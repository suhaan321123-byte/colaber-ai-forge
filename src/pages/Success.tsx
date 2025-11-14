import { useNavigate } from "react-router-dom";
import { CheckCircle2, Home, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid-pattern flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-12 animate-in fade-in duration-700">
            <img src={logo} alt="Colaber" className="h-16" />
          </div>

          {/* Success Card */}
          <div className="glass-effect rounded-3xl p-12 text-center animate-in fade-in zoom-in duration-700 delay-150">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 mb-8 animate-in zoom-in duration-500 delay-300">
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Build Complete!
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Your project has been successfully built and is ready to deploy
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 p-6 rounded-xl bg-secondary/50">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">30s</div>
                <div className="text-sm text-muted-foreground">Build Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">6</div>
                <div className="text-sm text-muted-foreground">Tasks Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="h-12 px-8 border-primary/50 hover:bg-primary/10"
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
              <Button
                className="h-12 px-8 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
