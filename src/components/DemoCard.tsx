import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface DemoCardProps {
  id: string;
  name: string;
  type: string;
  style: string;
  preview: string;
  index: number;
}

export function DemoCard({ id, name, type, style, preview, index }: DemoCardProps) {
  return (
    <Link
      to={`/demo/${id}`}
      className="group relative flex flex-col rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Preview */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <div
          className="absolute inset-0 flex items-center justify-center p-4"
          dangerouslySetInnerHTML={{ __html: preview }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg">
            View Demo
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-4">
        <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary" className="text-xs">
            {type}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {style}
          </Badge>
        </div>
      </div>
    </Link>
  );
}
