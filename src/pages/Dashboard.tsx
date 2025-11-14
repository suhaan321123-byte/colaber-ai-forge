import { useNavigate } from "react-router-dom";
import { Sparkles, LayoutTemplate } from "lucide-react";
import { CardOption } from "@/components/ui/card-option";
import logo from "@/assets/logo.png";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid-pattern">
      <div className="container mx-auto px-4 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-16 animate-in fade-in duration-700">
          <img src={logo} alt="Colaber" className="h-16 md:h-20" />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Build Your Website
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose how you want to create your next project with AI-powered tools
          </p>
        </div>

        {/* Options */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="animate-in fade-in slide-in-from-left duration-700 delay-300">
            <CardOption
              icon={LayoutTemplate}
              title="Select Template"
              description="Choose from our collection of pre-built templates and customize them to your needs"
              onClick={() => navigate("/templates")}
            />
          </div>
          
          <div className="animate-in fade-in slide-in-from-right duration-700 delay-300">
            <CardOption
              icon={Sparkles}
              title="Build with AI"
              description="Let AI assist you in building your website from scratch with intelligent recommendations"
              onClick={() => navigate("/ai-builder")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
