
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  useEffect(() => {
    // Set page title
    document.title = "Book an Appointment | Flawless by Ina Studios";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Book Your Appointment</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Schedule your beauty and hair service appointment with Flawless by Ina Studios. 
                We offer professional styling, makeup, and wig installation services.
              </p>
            </div>
          </div>
        </section>
        
        {/* Booking Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Booking Form Column */}
              <div className="lg:col-span-7">
                <BookingForm />
              </div>
              
              {/* Info Column */}
              <div className="lg:col-span-5">
                {/* Contact Info Card */}
                <Card className="border-none shadow-lg mb-8 bg-pink-600 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Phone className="mr-3 h-5 w-5 mt-0.5" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p>(+44) 7909 009155</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="mr-3 h-5 w-5 mt-0.5" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p>info@flawlessbyina.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <MapPin className="mr-3 h-5 w-5 mt-0.5" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p>Chippenham, Wiltshire<br />United Kingdom</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Calendar className="mr-3 h-5 w-5 mt-0.5" />
                        <div>
                          <p className="font-medium">Opening Hours</p>
                          <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                             Saturday: 10:00 AM - 4:00 PM<br />
                             Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Alternative Booking Methods */}
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Alternative Booking Methods</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium mb-2">Book Online</p>
                        <p className="text-gray-600 mb-3">
                          Use our online booking form to schedule your appointment at your convenience.
                        </p>
                        <Link to="/booking">
                          <Button className="w-full bg-dustygold hover:bg-dustygold/90">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                      
                      <div>
                        <p className="font-medium mb-2">WhatsApp</p>
                        <p className="text-gray-600 mb-3">
                          Contact us directly via WhatsApp to discuss your requirements and book your appointment.
                        </p>
                        <a 
                          href="https://wa.me/+447909009155" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" className="w-full border-dustygold text-dustygold hover:bg-dustygold/10">
                            WhatsApp Message
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Policies Section */}
        <section className="py-12 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Booking Policies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Cancellation Policy</h3>
                  <p className="text-gray-600">
                    We require at least 24 hours notice for cancellations. Late cancellations may result in a cancellation fee of 50% of the service price.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Deposits</h3>
                  <p className="text-gray-600">
                    Some services require a deposit to secure your booking. This will be clearly communicated during the booking process and deducted from your final service total.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Late Arrivals</h3>
                  <p className="text-gray-600">
                    Please arrive 5-10 minutes before your scheduled appointment time. Late arrivals may result in shortened service time while being charged the full amount.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
