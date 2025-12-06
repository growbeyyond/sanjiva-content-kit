import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, FileText, CreditCard, User } from "lucide-react";
import { format } from "date-fns";

const PatientPortal = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [patientData, setPatientData] = useState<any>(null);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [prescriptions, setPrescriptions] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/login");
      return;
    }
    setUser(user);
    await fetchPatientData(user.id);
  };

  const fetchPatientData = async (userId: string) => {
    try {
      // Fetch patient profile
      const { data: patient } = await supabase
        .from("patients")
        .select("*")
        .eq("user_id", userId)
        .single();
      
      setPatientData(patient);

      // Fetch appointments
      const { data: appointmentsData } = await supabase
        .from("appointments")
        .select("*")
        .eq("email", user?.email)
        .order("created_at", { ascending: false });
      
      setAppointments(appointmentsData || []);

      if (patient) {
        // Fetch prescriptions
        const { data: prescriptionsData } = await supabase
          .from("prescriptions")
          .select("*")
          .eq("patient_id", patient.id)
          .order("created_at", { ascending: false });
        
        setPrescriptions(prescriptionsData || []);

        // Fetch payments
        const { data: paymentsData } = await supabase
          .from("payments")
          .select("*")
          .eq("patient_id", patient.id)
          .order("created_at", { ascending: false });
        
        setPayments(paymentsData || []);
      }
    } catch (error) {
      console.error("Error fetching patient data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <>
        <TopBanner />
        <Navigation />
        <main className="min-h-screen bg-gradient-subtle pt-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <p className="text-center text-muted-foreground">Loading...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBanner />
      <Helmet>
        <title>Patient Portal - Dr. Prasanna Boddupally | Your Health Dashboard</title>
        <meta name="description" content="Access your appointments, prescriptions, and medical records in your secure patient portal." />
        <link rel="canonical" href="https://drprasanna.lovable.app/patient-portal" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-subtle">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
                  Patient Portal
                </h1>
                <p className="text-muted-foreground">
                  Welcome back, {patientData?.full_name || user?.email}
                </p>
              </div>
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">
                  <User className="h-4 w-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="appointments">
                  <Calendar className="h-4 w-4 mr-2" />
                  Appointments
                </TabsTrigger>
                <TabsTrigger value="prescriptions">
                  <FileText className="h-4 w-4 mr-2" />
                  Prescriptions
                </TabsTrigger>
                <TabsTrigger value="payments">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Payments
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Total Appointments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary">{appointments.length}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Prescriptions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary">{prescriptions.length}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Total Payments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary">
                        ₹{payments.reduce((sum, p) => sum + Number(p.amount), 0).toFixed(2)}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {patientData && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Full Name</p>
                          <p className="font-medium">{patientData.full_name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Date of Birth</p>
                          <p className="font-medium">{patientData.date_of_birth || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Gender</p>
                          <p className="font-medium">{patientData.gender || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Blood Group</p>
                          <p className="font-medium">{patientData.blood_group || "Not provided"}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="appointments" className="space-y-4">
                {appointments.length > 0 ? (
                  appointments.map((appointment) => (
                    <Card key={appointment.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{appointment.condition}</CardTitle>
                            <CardDescription>
                              {appointment.preferred_date && format(new Date(appointment.preferred_date), "PPP")}
                              {appointment.preferred_time && ` at ${appointment.preferred_time}`}
                            </CardDescription>
                          </div>
                          <Badge variant={
                            appointment.status === "confirmed" ? "default" :
                            appointment.status === "pending" ? "secondary" :
                            "outline"
                          }>
                            {appointment.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      {appointment.message && (
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{appointment.message}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="text-center py-12">
                      <Calendar className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                      <p className="text-muted-foreground mb-2">No appointments yet</p>
                      <p className="text-sm text-muted-foreground/70 mb-4">
                        Book your first consultation to start your healing journey
                      </p>
                      <Button asChild className="bg-gradient-hero">
                        <a href="/contact">Book Your First Appointment</a>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="prescriptions" className="space-y-4">
                {prescriptions.length > 0 ? (
                  prescriptions.map((prescription) => (
                    <Card key={prescription.id}>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          {prescription.diagnosis || "Prescription"}
                        </CardTitle>
                        <CardDescription>
                          {format(new Date(prescription.created_at), "PPP")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {prescription.instructions && (
                          <div>
                            <p className="text-sm font-medium mb-1">Instructions:</p>
                            <p className="text-sm text-muted-foreground">{prescription.instructions}</p>
                          </div>
                        )}
                        {prescription.follow_up_date && (
                          <div>
                            <p className="text-sm font-medium">Follow-up Date:</p>
                            <p className="text-sm text-muted-foreground">
                              {format(new Date(prescription.follow_up_date), "PPP")}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="text-center py-12">
                      <FileText className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                      <p className="text-muted-foreground mb-2">No prescriptions available</p>
                      <p className="text-sm text-muted-foreground/70">
                        Your prescriptions will appear here after your consultation
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="payments" className="space-y-4">
                {payments.length > 0 ? (
                  payments.map((payment) => (
                    <Card key={payment.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">₹{Number(payment.amount).toFixed(2)}</CardTitle>
                            <CardDescription>
                              {format(new Date(payment.created_at), "PPP")}
                            </CardDescription>
                          </div>
                          <Badge variant={
                            payment.payment_status === "completed" ? "default" :
                            payment.payment_status === "pending" ? "secondary" :
                            "outline"
                          }>
                            {payment.payment_status}
                          </Badge>
                        </div>
                      </CardHeader>
                      {payment.payment_method && (
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Payment Method: {payment.payment_method}
                          </p>
                          {payment.transaction_id && (
                            <p className="text-sm text-muted-foreground">
                              Transaction ID: {payment.transaction_id}
                            </p>
                          )}
                        </CardContent>
                      )}
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="text-center py-12">
                      <CreditCard className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                      <p className="text-muted-foreground mb-2">No payment history</p>
                      <p className="text-sm text-muted-foreground/70">
                        Your payment records will be displayed here
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PatientPortal;
