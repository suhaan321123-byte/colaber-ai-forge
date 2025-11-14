import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardOptionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
}

export const CardOption = ({ icon: Icon, title, description, onClick, className }: CardOptionProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative p-8 rounded-2xl glass-effect transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
        "border-2 border-transparent hover:border-primary/50",
        "text-left w-full",
        className
      )}
    >
      <div className="relative z-10">
        <div className="mb-4 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};
