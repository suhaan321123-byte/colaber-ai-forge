import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, FileCode, FolderTree, Settings, Bug, Wand2, Eye } from "lucide-react";
import logo from "@/assets/logo.png";

const buildingSteps = [
  { icon: FileCode, text: "Reading files...", duration: 3000 },
  { icon: FolderTree, text: "Analyzing page routes...", duration: 5000 },
  { icon: Settings, text: "Processing environment files...", duration: 7000 },
  { icon: Bug, text: "Fixing bugs...", duration: 12000 },
  { icon: Wand2, text: "Adding animations and effects...", duration: 20000 },
  { icon: Eye, text: "Optimizing user experience...", duration: 28000 },
];

const Building = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Update progress bar smoothly
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 / 300); // 30 seconds = 300 intervals of 100ms
      });
    }, 100);

    // Navigate to success after 30 seconds
    const timer = setTimeout(() => {
      navigate("/success");
    }, 30000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [navigate]);

  useEffect(() => {
    // Update current step based on time
    buildingSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index);
      }, step.duration);
    });
  }, []);

  return (
    <div className="min-h-screen grid-pattern flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-12 animate-in fade-in duration-700">
            <img src={logo} alt="Colaber" className="h-16" />
          </div>

          {/* Main Card */}
          <div className="glass-effect rounded-3xl p-12 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            {/* Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6 animate-pulse-slow">
                <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary animate-spin border-4 border-transparent border-t-white" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                Building Your Project
              </h1>
              <p className="text-muted-foreground">
                Our AI is working hard to create something amazing...
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-12">
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary via-primary-glow to-accent transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-center mt-3 text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </div>
            </div>

            {/* Building Steps */}
            <div className="space-y-4">
              {buildingSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;

                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                      isActive
                        ? "bg-primary/10 border border-primary/30 scale-105"
                        : isCompleted
                        ? "bg-secondary/50"
                        : "bg-secondary/30 opacity-50"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                        isCompleted
                          ? "bg-green-500/20"
                          : isActive
                          ? "bg-primary/20 animate-pulse"
                          : "bg-secondary"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <Icon
                          className={`w-5 h-5 ${
                            isActive ? "text-primary" : "text-muted-foreground"
                          }`}
                        />
                      )}
                    </div>
                    <span
                      className={`font-medium transition-colors ${
                        isActive
                          ? "text-foreground"
                          : isCompleted
                          ? "text-muted-foreground line-through"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
