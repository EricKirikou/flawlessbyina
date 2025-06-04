
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would send the email to a backend
    toast({
      title: "Success!",
      description: "Thank you for subscribing to my newsletter!",
    });
    
    setEmail("");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Subscribe to My Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest beauty tips, product reviews, and exclusive content delivered directly to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-pink-600 hover:bg-pink-700">
              Subscribe
            </Button>
          </form>
          
          <p className="text-gray-500 text-sm mt-4">
            I'll never spam you or share your email with third parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
