import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { DemoCard } from "@/components/DemoCard";
import { FilterTabs } from "@/components/FilterTabs";
import { SearchInput } from "@/components/SearchInput";
import { demos, demoTypes, demoStyles } from "@/data/demos";
import { Sparkles, Code2, Copy, Eye } from "lucide-react";

export default function Index() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStyle, setSelectedStyle] = useState("All");

  const filteredDemos = useMemo(() => {
    return demos.filter((demo) => {
      const matchesSearch = demo.name.toLowerCase().includes(search.toLowerCase());
      const matchesType = selectedType === "All" || demo.type === selectedType;
      const matchesStyle = selectedStyle === "All" || demo.style === selectedStyle;
      return matchesSearch && matchesType && matchesStyle;
    });
  }, [search, selectedType, selectedStyle]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              20+ Beautiful Auth Templates
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Auth<span className="gradient-text">UI</span> Playground
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Explore, customize, and copy beautiful authentication UI templates. 
              Available in HTML + Tailwind and React + Tailwind.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
                <Code2 className="h-4 w-4" />
                <span className="text-sm font-medium">HTML + Tailwind</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
                <Code2 className="h-4 w-4" />
                <span className="text-sm font-medium">React + Tailwind</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
                <Eye className="h-4 w-4" />
                <span className="text-sm font-medium">Live Preview</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
                <Copy className="h-4 w-4" />
                <span className="text-sm font-medium">Copy Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50 py-4">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <FilterTabs
                options={[...demoTypes]}
                selected={selectedType}
                onSelect={setSelectedType}
              />
            </div>
            <div className="w-full lg:w-64">
              <SearchInput value={search} onChange={setSearch} />
            </div>
          </div>
          
          <div className="mt-4">
            <FilterTabs
              options={[...demoStyles]}
              selected={selectedStyle}
              onSelect={setSelectedStyle}
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">
            {filteredDemos.length} {filteredDemos.length === 1 ? "Template" : "Templates"}
          </h2>
        </div>

        {filteredDemos.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No templates found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDemos.map((demo, index) => (
              <DemoCard
                key={demo.id}
                id={demo.id}
                name={demo.name}
                type={demo.type}
                style={demo.style}
                preview={demo.preview}
                index={index}
              />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} <a
              href="https://arpankhan.tech"
              className="underline hover:text-primary"
            >Arpan Khan</a> –
            <span className="block sm:inline">arpankhan.tech</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
