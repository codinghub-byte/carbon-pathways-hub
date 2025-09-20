import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  TrendingUp, 
  Globe, 
  Shield, 
  BarChart3, 
  Users,
  ArrowRight,
  CheckCircle,
  Building2,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Tracking",
      description: "Monitor carbon emissions and credits with live data updates and comprehensive analytics."
    },
    {
      icon: Globe,
      title: "Global Marketplace",
      description: "Access a worldwide network of verified carbon credit sellers and buyers."
    },
    {
      icon: Shield,
      title: "Verified Credits",
      description: "All carbon credits are verified and certified by international standards."
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "AI-powered insights to optimize your carbon management strategy."
    }
  ];

  const stats = [
    { value: "2.4M", label: "Tons CO₂ Reduced", icon: Leaf },
    { value: "150+", label: "Companies Listed", icon: Building2 },
    { value: "98%", label: "Verification Rate", icon: Shield },
    { value: "$45M", label: "Credits Traded", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-gradient-eco shadow-glow">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">Carbonix</span>
              <Badge variant="secondary" className="text-xs">Beta</Badge>
            </Link>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/companies">Explore Companies</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/market">Marketplace</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild className="bg-gradient-eco hover:shadow-glow transition-all duration-300">
                <Link to="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2">
              🌱 Carbon Credit Trading Platform
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Track. Trade.{" "}
              <span className="bg-gradient-eco bg-clip-text text-transparent">
                Transform.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the world's most transparent carbon credit marketplace. Monitor emissions, 
              trade verified credits, and accelerate your journey to net-zero.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-eco hover:shadow-glow transition-all duration-300">
                <Link to="/login" className="flex items-center gap-2">
                  Start Trading
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover:shadow-soft transition-all duration-200">
                <Link to="/companies">Explore Companies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="text-center shadow-soft animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-eco shadow-glow">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Carbonix?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for the modern world, designed for maximum impact on climate action.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="shadow-soft hover:shadow-elevated transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="p-2 rounded-full bg-gradient-eco/10 w-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-elevated animate-fade-in">
            <CardContent className="p-12 text-center">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-eco shadow-glow">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-foreground">
                  Ready to Start Your Carbon Journey?
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of companies already using Carbonix to track, trade, 
                  and reduce their carbon footprint.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-gradient-eco hover:shadow-glow transition-all duration-300">
                    <Link to="/login">
                      Get Started Free
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="hover:shadow-soft transition-all duration-200">
                    <Link to="/list-company">List Your Company</Link>
                  </Button>
                </div>
                
                <div className="flex items-center justify-center gap-6 pt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Free to start</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Setup in minutes</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="p-2 rounded-full bg-gradient-eco shadow-glow">
                <Leaf className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-primary">Carbonix</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/companies" className="hover:text-primary transition-colors">Companies</Link>
              <Link to="/market" className="hover:text-primary transition-colors">Marketplace</Link>
              <Link to="/insights" className="hover:text-primary transition-colors">Insights</Link>
              <Link to="/list-company" className="hover:text-primary transition-colors">List Company</Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Carbonix. Building a sustainable future, one credit at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
