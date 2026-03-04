import { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { demos } from "@/data/demos";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Copy, Check, Code2, Eye, Maximize2, Minimize2 } from "lucide-react";
import { toast } from "sonner";

export default function DemoViewer() {
  const { id } = useParams<{ id: string }>();
  const [codeType, setCodeType] = useState<"html" | "react">("html");
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const demo = useMemo(() => demos.find((d) => d.id === id), [id]);

  const currentCode = codeType === "html" ? demo?.htmlCode : demo?.reactCode;

  const handleCopy = async () => {
    if (!currentCode) return;
    
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
    }
  };

  useEffect(() => {
    setCopied(false);
  }, [codeType, id]);

  if (!demo) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Demo not found</h1>
          <Link to="/">
            <Button>Back to Gallery</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Toolbar */}
      <div className="border-b border-border/50 bg-card">
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-semibold">{demo.name}</h1>
                <div className="flex gap-2 mt-1">
                  <Badge variant="secondary">{demo.type}</Badge>
                  <Badge variant="outline">{demo.style}</Badge>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Tabs value={codeType} onValueChange={(v) => setCodeType(v as "html" | "react")}>
                <TabsList>
                  <TabsTrigger value="html" className="gap-2">
                    <Code2 className="h-4 w-4" />
                    HTML
                  </TabsTrigger>
                  <TabsTrigger value="react" className="gap-2">
                    <Code2 className="h-4 w-4" />
                    React
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              
              <Button variant="outline" size="sm" onClick={handleCopy} className="gap-2">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="hidden lg:flex"
              >
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col lg:flex-row ${isFullscreen ? "" : ""}`}>
        {/* Code Editor */}
        <div className={`${isFullscreen ? "hidden" : "w-full lg:w-1/2"} border-r border-border/50 flex flex-col`}>
          <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border/50">
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                {codeType === "html" ? "index.html" : "Component.tsx"}
              </span>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <textarea
              value={currentCode}
              readOnly
              className="w-full h-full p-4 font-mono text-sm bg-muted/30 resize-none outline-none"
              style={{ minHeight: "calc(100vh - 220px)" }}
            />
          </div>
        </div>

        {/* Preview */}
        <div className={`${isFullscreen ? "w-full" : "w-full lg:w-1/2"} flex flex-col`}>
          <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border/50">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Preview</span>
            </div>
          </div>
          <div className="flex-1 bg-muted/20">
            <iframe
              srcDoc={demo.htmlCode}
              className="w-full h-full border-0"
              style={{ minHeight: "calc(100vh - 220px)" }}
              title={`Preview of ${demo.name}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
