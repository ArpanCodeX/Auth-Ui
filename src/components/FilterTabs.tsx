import { cn } from "@/lib/utils";

interface FilterTabsProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  label?: string;
}

export function FilterTabs({ options, selected, onSelect, label }: FilterTabsProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
      )}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              selected === option
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
