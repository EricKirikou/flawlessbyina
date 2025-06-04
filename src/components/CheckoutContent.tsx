
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, Smartphone, Building2 } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postcode: string;
}

const CheckoutContent = () => {
  const { state, clearCart } = useCart();
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: ""
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const sendOrderEmail = async (orderData: any) => {
    try {
      // Simulate sending email to info@flawlessbyina.com
      console.log("Sending order details to info@flawlessbyina.com:", orderData);
      
      // In a real application, you would make an API call here
      // For now, we'll just simulate the email sending
      const emailContent = `
        New Order Received:
        
        Customer: ${orderData.firstName} ${orderData.lastName}
        Email: ${orderData.email}
        Phone: ${orderData.phone}
        Address: ${orderData.address}, ${orderData.city}, ${orderData.postcode}
        
        Payment Method: ${orderData.paymentMethod}
        Total Amount: ${orderData.total}
        
        Items:
        ${orderData.items.map((item: any) => `- ${item.title} x${item.quantity} - ${formatPrice(item.price * item.quantity)}`).join('\n')}
        
        Order Date: ${new Date().toISOString()}
      `;
      
      console.log("Email content:", emailContent);
      
      // Here you would integrate with your email service
      // Example: EmailJS, Nodemailer, or your backend API
      
      return true;
    } catch (error) {
      console.error("Failed to send order email:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      // Prepare order data
      const orderData = {
        ...formData,
        paymentMethod,
        total: formatPrice(state.total),
        items: state.items,
        orderId: `FLW-${Date.now()}`,
        timestamp: new Date().toISOString()
      };

      // Send email notification
      await sendOrderEmail(orderData);
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear cart and redirect
      clearCart();
      navigate("/order-success");
    } catch (error) {
      console.error("Order processing failed:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (state.items.length === 0) {
    navigate("/cart");
    return null;
  }

  const paymentOptions = [
    {
      id: "paypal",
      label: "PayPal",
      icon: CreditCard,
      description: "Pay securely with PayPal"
    },
    {
      id: "apple-pay",
      label: "Apple Pay",
      icon: Smartphone,
      description: "Quick payment with Apple Pay"
    },
    {
      id: "bank-transfer",
      label: "Bank Transfer",
      icon: Building2,
      description: "Direct bank transfer"
    }
  ];

  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Checkout</h1>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
          {/* Checkout Form */}
          <div className="order-2 xl:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Billing Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required 
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-sm font-medium">Address</Label>
                    <Input 
                      id="address" 
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required 
                      className="mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-sm font-medium">City</Label>
                      <Input 
                        id="city" 
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postcode" className="text-sm font-medium">Postcode</Label>
                      <Input 
                        id="postcode" 
                        value={formData.postcode}
                        onChange={(e) => handleInputChange('postcode', e.target.value)}
                        required 
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="space-y-3">
                      {paymentOptions.map((option) => (
                        <div key={option.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <option.icon size={24} className="text-gray-600" />
                          <div className="flex-1">
                            <Label htmlFor={option.id} className="font-medium cursor-pointer">
                              {option.label}
                            </Label>
                            <p className="text-sm text-gray-600">{option.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Button 
                type="submit" 
                className="w-full bg-pink-600 hover:bg-pink-700 py-3 text-lg font-semibold"
                disabled={isProcessing}
              >
                {isProcessing ? "Processing Order..." : `Place Order - ${formatPrice(state.total)}`}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="order-1 xl:order-2">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="max-h-60 overflow-y-auto space-y-3">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{item.title}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-semibold">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({state.items.length} items)</span>
                    <span>{formatPrice(state.total)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-pink-600">{formatPrice(state.total)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 bg-blue-50 p-3 rounded">
                  <p className="font-medium mb-1">Secure Payment</p>
                  <p>Your payment information is encrypted and secure. Order details will be sent to info@flawlessbyina.com for processing.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutContent;
