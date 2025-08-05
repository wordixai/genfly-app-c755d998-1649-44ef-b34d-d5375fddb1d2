import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-border/50">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary"></div>
          <span className="font-semibold text-lg">OpenRouter</span>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1.5 bg-muted rounded-md border-0 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
            ⌘K
          </span>
        </div>
      </div>
      
      <nav className="flex items-center gap-6 text-sm">
        <a href="#" className="text-muted-foreground hover:text-foreground">Models</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">Chat</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">Rankings</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">Enterprise</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">Docs</a>
        <Button variant="ghost" className="text-sm">Sign in</Button>
      </nav>
    </header>
  );
};

export default Header;