import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Calendar as CalendarIcon, Users, TrendingUp, LogOut, FileText } from "lucide-react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

const AdminEnhanced = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [appointments, setAppointments] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);
  const [dailyAppointments, setDailyAppointments] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalPatients: 0,
    totalAppointments: 0,
    totalRevenue: 0,
    thisMonth: 0
  });

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (date) {
      fetchDailyAppointments(date);
    }
  }, [date]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/login");
      return;
    }

    const { data: roleData, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', session.user.id)
      .eq('role', 'admin')
      .maybeSingle();

    if (error || !roleData) {
      toast({
        title: "Access Denied",
        description: "You don't have admin privileges.",
        variant: "destructive"
      });
      navigate("/");
      return;
    }

    await fetchData();
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [appointmentsRes, patientsRes, paymentsRes] = await Promise.all([
        supabase.from('appointments').select('*').order('created_at', { ascending: false }),
        supabase.from('patients').select('*').order('created_at', { ascending: false }),
        supabase.from('payments').select('amount, created_at')
      ]);

      if (appointmentsRes.data) setAppointments(appointmentsRes.data);
      if (patientsRes.data) setPatients(patientsRes.data);

      // Calculate stats
      const totalRevenue = paymentsRes.data?.reduce((sum, p) => sum + Number(p.amount), 0) || 0;
      const thisMonth = paymentsRes.data?.filter(p => {
        const paymentDate = new Date(p.created_at);
        const now = new Date();
        return paymentDate.getMonth() === now.getMonth() && 
               paymentDate.getFullYear() === now.getFullYear();
      }).reduce((sum, p) => sum + Number(p.amount), 0) || 0;

      setStats({
        totalPatients: patientsRes.data?.length || 0,
        totalAppointments: appointmentsRes.data?.length || 0,
        totalRevenue,
        thisMonth
      });

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDailyAppointments = async (selectedDate: Date) => {
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    const { data } = await supabase
      .from('appointments')
      .select('*')
      .eq('preferred_date', dateStr)
      .order('preferred_time');
    
    setDailyAppointments(data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Enhanced Admin Dashboard</h1>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Patients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-2xl font-bold">{stats.totalPatients}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-primary" />
                  <span className="text-2xl font-bold">{stats.totalAppointments}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-2xl font-bold">₹{stats.totalRevenue.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-2xl font-bold">₹{stats.thisMonth.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="calendar" className="space-y-6">
            <TabsList>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              <TabsTrigger value="patients">Patient CRM</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="calendar" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Date</CardTitle>
                    <CardDescription>View appointments for a specific date</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>
                      Appointments for {date && format(date, 'PPP')}
                    </CardTitle>
                    <CardDescription>
                      {dailyAppointments.length} appointment(s) scheduled
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {dailyAppointments.length > 0 ? (
                      <div className="space-y-3">
                        {dailyAppointments.map((apt) => (
                          <div key={apt.id} className="border rounded-lg p-3">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-semibold">{apt.name}</p>
                                <p className="text-sm text-muted-foreground">{apt.condition}</p>
                              </div>
                              <span className="text-sm font-medium">{apt.preferred_time}</span>
                            </div>
                            <div className="flex gap-2">
                              <span className={`text-xs px-2 py-1 rounded ${
                                apt.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                                apt.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {apt.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-muted-foreground py-8">
                        No appointments for this date
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="patients" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Patient Records</CardTitle>
                  <CardDescription>Complete patient database and history</CardDescription>
                </CardHeader>
                <CardContent>
                  {patients.length > 0 ? (
                    <div className="space-y-4">
                      {patients.map((patient) => (
                        <Card key={patient.id}>
                          <CardContent className="pt-6">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <p className="font-semibold text-lg mb-2">{patient.full_name}</p>
                                <p className="text-sm text-muted-foreground">
                                  DOB: {patient.date_of_birth || 'Not provided'}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Gender: {patient.gender || 'Not provided'}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Blood Group: {patient.blood_group || 'Not provided'}
                                </p>
                              </div>
                              <div>
                                {patient.medical_history && (
                                  <div className="mb-2">
                                    <p className="text-sm font-medium">Medical History:</p>
                                    <p className="text-sm text-muted-foreground">{patient.medical_history}</p>
                                  </div>
                                )}
                                {patient.allergies && (
                                  <div>
                                    <p className="text-sm font-medium">Allergies:</p>
                                    <p className="text-sm text-muted-foreground">{patient.allergies}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground py-8">No patient records yet</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Business Analytics</CardTitle>
                  <CardDescription>Performance metrics and insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Revenue Overview</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-primary/10 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                          <p className="text-2xl font-bold">₹{stats.totalRevenue.toFixed(2)}</p>
                        </div>
                        <div className="bg-green-100 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">This Month</p>
                          <p className="text-2xl font-bold">₹{stats.thisMonth.toFixed(2)}</p>
                        </div>
                        <div className="bg-blue-100 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Avg per Appointment</p>
                          <p className="text-2xl font-bold">
                            ₹{stats.totalAppointments ? (stats.totalRevenue / stats.totalAppointments).toFixed(2) : '0'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Patient Metrics</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Total Patients</p>
                          <p className="text-2xl font-bold">{stats.totalPatients}</p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Total Appointments</p>
                          <p className="text-2xl font-bold">{stats.totalAppointments}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminEnhanced;
