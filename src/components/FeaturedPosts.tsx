
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  likes: number;
}

const featuredPosts: Post[] = [
  {
    id: 1,
    title: "10 Makeup Must-Haves for Summer",
    excerpt: "Discover the essential products that will keep your makeup looking fresh all summer long.",
    category: "Makeup",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    likes: 243
  },
  {
    id: 2,
    title: "Nighttime Skincare Routine for Glowing Skin",
    excerpt: "Follow this simple routine before bed to wake up with refreshed, radiant skin every morning.",
    category: "Skincare",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    likes: 189
  },
  {
    id: 3,
    title: "How to Apply Foundation for a Flawless Finish",
    excerpt: "Master the techniques that professional makeup artists use for perfect foundation application.",
    category: "Tutorials",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    likes: 312
  },
];

const FeaturedPosts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Featured Posts</h2>
          <p className="text-gray-600 mt-2">Discover my most popular beauty content</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-60 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium px-3 py-1 bg-pink-100 text-pink-800 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Heart size={16} className="mr-1" /> {post.likes}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
                <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0">
                  Read More →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
