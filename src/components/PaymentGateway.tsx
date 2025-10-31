import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Smartphone } from "lucide-react";

interface PaymentGatewayProps {
  amount: number;
  appointmentId?: string;
  onSuccess: (transactionId: string) => void;
  onCancel: () => void;
}

const PaymentGateway = ({ amount, appointmentId, onSuccess, onCancel }: PaymentGatewayProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi">("card");

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const transactionId = `TXN${Date.now()}`;
      
      toast({
        title: "Payment Successful!",
        description: `Transaction ID: ${transactionId}`,
      });

      onSuccess(transactionId);
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>
          Complete your payment to confirm appointment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handlePayment} className="space-y-6">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total Amount:</span>
              <span className="text-2xl font-bold text-primary">₹{amount}</span>
            </div>
          </div>

          <div>
            <Label className="mb-3 block">Payment Method</Label>
            <RadioGroup value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)}>
              <div className="flex items-center space-x-2 border rounded-lg p-4 mb-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                  <CreditCard className="h-5 w-5" />
                  Credit/Debit Card
                </Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-4">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer flex-1">
                  <Smartphone className="h-5 w-5" />
                  UPI
                </Label>
              </div>
            </RadioGroup>
          </div>

          {paymentMethod === "card" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    maxLength={5}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    type="password"
                    placeholder="123"
                    maxLength={3}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="cardName">Cardholder Name</Label>
                <Input
                  id="cardName"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
          )}

          {paymentMethod === "upi" && (
            <div>
              <Label htmlFor="upiId">UPI ID</Label>
              <Input
                id="upiId"
                placeholder="yourname@upi"
                required
              />
            </div>
          )}

          <div className="flex gap-3">
            <Button
              type="submit"
              className="flex-1 bg-gradient-hero"
              disabled={loading}
            >
              {loading ? "Processing..." : `Pay ₹${amount}`}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={loading}
            >
              Cancel
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            🔒 Secure payment powered by industry-standard encryption
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentGateway;
