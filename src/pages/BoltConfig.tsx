import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Upload, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";

const BoltConfig = () => {
  const navigate = useNavigate();
  const [githubUrl, setGithubUrl] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleStartBuilding = () => {
    navigate("/building");
  };

  return (
    <div className="min-h-screen grid-pattern">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate("/ai-builder")}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <img src={logo} alt="Colaber" className="h-12" />
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg mb-6">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Configure Bolt
            </h1>
            <p className="text-lg text-muted-foreground">
              Provide your project details to start building with Bolt AI
            </p>
          </div>

          {/* Config Form */}
          <div className="glass-effect rounded-2xl p-8 space-y-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            {/* GitHub URL */}
            <div className="space-y-3">
              <Label htmlFor="github-url" className="text-base flex items-center gap-2">
                <Github className="w-4 h-4 text-muted-foreground" />
                GitHub Repository URL
              </Label>
              <Input
                id="github-url"
                type="url"
                placeholder="https://github.com/username/repository"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="h-12 bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            {/* Upload Project */}
            <div className="space-y-3">
              <Label htmlFor="file-upload" className="text-base flex items-center gap-2">
                <Upload className="w-4 h-4 text-muted-foreground" />
                Upload Project Files
              </Label>
              <div className="relative">
                <Input
                  id="file-upload"
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".zip,.rar,.7zip"
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center justify-center h-32 border-2 border-dashed border-border/50 rounded-xl cursor-pointer hover:border-primary/50 transition-colors bg-background/50"
                >
                  <div className="text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      {fileName || "Click to upload project files"}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      ZIP, RAR, or 7ZIP files
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Start Building Button */}
            <Button
              onClick={handleStartBuilding}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Zap className="mr-2 h-5 w-5" />
              Start Building
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoltConfig;
