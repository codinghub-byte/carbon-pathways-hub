import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Home, 
  Building2, 
  BarChart3, 
  ShoppingCart, 
  Lightbulb,
  PlusCircle,
  User,
  Menu,
  X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Companies", href: "/companies", icon: Building2 },
    { name: "Compare", href: "/compare", icon: BarChart3 },
    { name: "Market", href: "/market", icon: ShoppingCart },
    { name: "Insights", href: "/insights", icon: Lightbulb },
    { name: "List Company", href: "/list-company", icon: PlusCircle },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-background border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2 group">
            <div className="p-2 rounded-full bg-gradient-eco shadow-glow group-hover:animate-glow-pulse">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">Carbonix</span>
            <Badge variant="secondary" className="text-xs">Beta</Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant={isActive(item.href) ? "default" : "ghost"}
                asChild
                className={`transition-all duration-200 ${
                  isActive(item.href) 
                    ? "bg-gradient-eco text-white shadow-soft" 
                    : "hover:bg-muted hover:shadow-soft"
                }`}
              >
                <Link to={item.href} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="hover:shadow-soft transition-all duration-200">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant={isActive(item.href) ? "default" : "ghost"}
                  asChild
                  className={`w-full justify-start transition-all duration-200 ${
                    isActive(item.href) 
                      ? "bg-gradient-eco text-white shadow-soft" 
                      : "hover:bg-muted hover:shadow-soft"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to={item.href} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              ))}
              <div className="pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:shadow-soft transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;