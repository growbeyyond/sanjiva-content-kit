import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Mail, Users, LogOut } from "lucide-react";

interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  condition: string;
  preferred_date: string | null;
  preferred_time: string | null;
  message: string | null;
  status: string | null;
  created_at: string;
}

interface ContactInquiry {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  subject: string | null;
  message: string;
  status: string | null;
  created_at: string;
}

interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  active: boolean | null;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/login");
      return;
    }

    // Verify admin role
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

    fetchData();
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [appointmentsRes, inquiriesRes, subscribersRes] = await Promise.all([
        supabase.from('appointments').select('*').order('created_at', { ascending: false }),
        supabase.from('contact_inquiries').select('*').order('created_at', { ascending: false }),
        supabase.from('newsletter_subscribers').select('*').order('subscribed_at', { ascending: false })
      ]);

      if (appointmentsRes.data) setAppointments(appointmentsRes.data);
      if (inquiriesRes.data) setInquiries(inquiriesRes.data);
      if (subscribersRes.data) setSubscribers(subscribersRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to load data.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateAppointmentStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('appointments')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      setAppointments(prev =>
        prev.map(apt => apt.id === id ? { ...apt, status: newStatus } : apt)
      );

      toast({
        title: "Status Updated",
        description: "Appointment status has been updated successfully.",
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Error",
        description: "Failed to update status.",
        variant: "destructive"
      });
    }
  };

  const updateInquiryStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      setInquiries(prev =>
        prev.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq)
      );

      toast({
        title: "Status Updated",
        description: "Inquiry status has been updated successfully.",
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Error",
        description: "Failed to update status.",
        variant: "destructive"
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
    navigate("/");
  };

  if (isLoading) {
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
      <div className="min-h-screen py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <Calendar className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{appointments.length}</p>
                  <p className="text-sm text-muted-foreground">Total Appointments</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <Mail className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{inquiries.length}</p>
                  <p className="text-sm text-muted-foreground">Contact Inquiries</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{subscribers.length}</p>
                  <p className="text-sm text-muted-foreground">Newsletter Subscribers</p>
                </div>
              </div>
            </Card>
          </div>

          <Tabs defaultValue="appointments" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
              <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
            </TabsList>

            <TabsContent value="appointments" className="space-y-4">
              {appointments.map((appointment) => (
                <Card key={appointment.id} className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-foreground">{appointment.name}</p>
                      <p className="text-sm text-muted-foreground">{appointment.phone}</p>
                      {appointment.email && (
                        <p className="text-sm text-muted-foreground">{appointment.email}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-sm"><strong>Condition:</strong> {appointment.condition}</p>
                      {appointment.preferred_date && (
                        <p className="text-sm"><strong>Preferred Date:</strong> {appointment.preferred_date}</p>
                      )}
                      {appointment.preferred_time && (
                        <p className="text-sm"><strong>Preferred Time:</strong> {appointment.preferred_time}</p>
                      )}
                      {appointment.message && (
                        <p className="text-sm mt-2"><strong>Message:</strong> {appointment.message}</p>
                      )}
                      <div className="mt-3 flex items-center gap-2">
                        <label className="text-sm font-medium">Status:</label>
                        <select
                          value={appointment.status || 'pending'}
                          onChange={(e) => updateAppointmentStatus(appointment.id, e.target.value)}
                          className="px-3 py-1 text-sm rounded-md border border-border bg-background"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Submitted: {new Date(appointment.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
              {appointments.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No appointments yet</p>
              )}
            </TabsContent>

            <TabsContent value="inquiries" className="space-y-4">
              {inquiries.map((inquiry) => (
                <Card key={inquiry.id} className="p-6">
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">{inquiry.name}</p>
                    <p className="text-sm text-muted-foreground">{inquiry.phone}</p>
                    {inquiry.email && (
                      <p className="text-sm text-muted-foreground">{inquiry.email}</p>
                    )}
                    {inquiry.subject && (
                      <p className="text-sm"><strong>Subject:</strong> {inquiry.subject}</p>
                    )}
                    <p className="text-sm"><strong>Message:</strong> {inquiry.message}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <label className="text-sm font-medium">Status:</label>
                      <select
                        value={inquiry.status || 'new'}
                        onChange={(e) => updateInquiryStatus(inquiry.id, e.target.value)}
                        className="px-3 py-1 text-sm rounded-md border border-border bg-background"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Submitted: {new Date(inquiry.created_at).toLocaleString()}
                    </p>
                  </div>
                </Card>
              ))}
              {inquiries.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No inquiries yet</p>
              )}
            </TabsContent>

            <TabsContent value="subscribers" className="space-y-4">
              <Card className="p-6">
                <div className="space-y-2">
                  {subscribers.map((subscriber) => (
                    <div key={subscriber.id} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <p className="text-sm text-foreground">{subscriber.email}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(subscriber.subscribed_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
              {subscribers.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No subscribers yet</p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
