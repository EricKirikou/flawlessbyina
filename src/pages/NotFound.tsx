
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-pink-600 mb-6">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Oops! It seems like the page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-pink-600 hover:bg-pink-700">
            <Link to="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
