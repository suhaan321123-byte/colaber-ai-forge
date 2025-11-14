import { useNavigate } from "react-router-dom";
import { ArrowLeft, Zap, Heart, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const aiTools = [
  {
    name: "Bolt",
    icon: Zap,
    gradient: "from-yellow-400 to-orange-500",
    path: "/bolt-config"
  },
  {
    name: "Lovable",
    icon: Heart,
    gradient: "from-pink-400 to-rose-500",
    path: "/lovable-config"
  },
  {
    name: "Replit",
    icon: Terminal,
    gradient: "from-green-400 to-emerald-500",
    path: "/replit-config"
  },
  {
    name: "v0.dev",
    icon: Code,
    gradient: "from-blue-400 to-cyan-500",
    path: "/v0-config"
  }
];

const AIBuilder = () => {
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
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            Choose Your AI Builder
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the AI-powered development platform to build your project
          </p>
        </div>

        {/* AI Tools Grid */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.name}
                onClick={() => navigate(tool.path)}
                className="group relative p-8 rounded-2xl glass-effect transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] border-2 border-transparent hover:border-primary/50 animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`mb-4 p-6 rounded-2xl bg-gradient-to-br ${tool.gradient} shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{tool.name}</h3>
                </div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AIBuilder;
