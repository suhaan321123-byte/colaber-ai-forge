import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Templates = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid-pattern">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <img src={logo} alt="Colaber" className="h-12" />
        </div>

        {/* Content */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            Templates Coming Soon
          </h1>
          <p className="text-lg text-muted-foreground">
            We're working on an amazing collection of templates for you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Templates;
