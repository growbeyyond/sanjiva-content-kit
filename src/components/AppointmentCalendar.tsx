import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Clock } from "lucide-react";

interface AppointmentCalendarProps {
  onSelectSlot: (date: Date, time: string) => void;
  selectedDate?: Date;
  selectedTime?: string;
}

const AppointmentCalendar = ({ onSelectSlot, selectedDate, selectedTime }: AppointmentCalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(selectedDate);
  const [availableSlots, setAvailableSlots] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Default time slots (9 AM - 7 PM, every hour)
  const defaultTimeSlots = [
    "09:00", "10:00", "11:00", "12:00", 
    "13:00", "14:00", "15:00", "16:00", 
    "17:00", "18:00", "19:00"
  ];

  useEffect(() => {
    if (date) {
      fetchAvailableSlots(date);
    }
  }, [date]);

  const fetchAvailableSlots = async (selectedDate: Date) => {
    setLoading(true);
    try {
      const dateStr = format(selectedDate, 'yyyy-MM-dd');
      
      // Fetch booked slots for the selected date
      const { data: bookedSlots, error } = await supabase
        .from("appointment_slots")
        .select("start_time")
        .eq("date", dateStr)
        .eq("is_available", false);

      if (error) throw error;

      // Create available slots by filtering out booked ones
      const bookedTimes = bookedSlots?.map(slot => slot.start_time) || [];
      const available = defaultTimeSlots.map(time => ({
        time,
        isBooked: bookedTimes.includes(time)
      }));

      setAvailableSlots(available);
    } catch (error) {
      console.error("Error fetching slots:", error);
      // If error, show all slots as available
      setAvailableSlots(defaultTimeSlots.map(time => ({ time, isBooked: false })));
    } finally {
      setLoading(false);
    }
  };

  const handleTimeSelect = (time: string) => {
    if (date) {
      onSelectSlot(date, time);
    }
  };

  // Disable Sundays and past dates
  const disabledDates = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0; // Sunday = 0
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Select Appointment Date & Time
        </CardTitle>
        <CardDescription>
          Choose your preferred date and time slot. Clinic is closed on Sundays.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={disabledDates}
            className="rounded-md border"
          />
        </div>

        {date && (
          <div>
            <h3 className="font-semibold mb-3">
              Available Time Slots for {format(date, 'PPP')}
            </h3>
            {loading ? (
              <p className="text-sm text-muted-foreground">Loading slots...</p>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {availableSlots.map((slot) => (
                  <Button
                    key={slot.time}
                    variant={selectedTime === slot.time ? "default" : "outline"}
                    size="sm"
                    disabled={slot.isBooked}
                    onClick={() => handleTimeSelect(slot.time)}
                    className="relative"
                  >
                    {slot.time}
                    {slot.isBooked && (
                      <Badge 
                        variant="secondary" 
                        className="absolute -top-2 -right-2 text-xs px-1"
                      >
                        Booked
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>
            )}
            {availableSlots.length === 0 && !loading && (
              <p className="text-sm text-muted-foreground">No slots available for this date</p>
            )}
          </div>
        )}

        {selectedDate && selectedTime && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-sm font-medium">
              Selected: {format(selectedDate, 'PPP')} at {selectedTime}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AppointmentCalendar;
