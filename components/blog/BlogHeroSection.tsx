import { Sparkles } from "lucide-react";

export function BlogHeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent pt-20">
      <div className="container relative mx-auto px-4 py-12">
        <div className="flex items-center justify-center space-x-2 text-center">
          <Sparkles className="h-6 w-6 text-primary" />
          <p className="text-lg font-medium text-gray-800">
            Where AI meets human creativity, and marketing magic happens
          </p>
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
}
