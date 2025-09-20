import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Leaf, Mail, Lock, ArrowRight } from "lucide-react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background/50" />
      
      <Card className="w-full max-w-md relative z-10 shadow-elevated animate-fade-in">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="p-2 rounded-full bg-gradient-eco shadow-glow">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-primary">Carbonix</h1>
          </div>
          <CardTitle className="text-xl">
            {isLogin ? "Welcome Back" : "Join the Movement"}
          </CardTitle>
          <CardDescription>
            {isLogin ? "Track. Trade. Transform." : "Start your carbon journey today."}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com"
                className="transition-all duration-200 focus:shadow-soft"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Password
              </Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password"
                className="transition-all duration-200 focus:shadow-soft"
              />
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Confirm Password
                </Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  placeholder="Confirm your password"
                  className="transition-all duration-200 focus:shadow-soft"
                />
              </div>
            )}
          </div>

          <Button 
            asChild 
            className="w-full group bg-gradient-eco hover:shadow-glow transition-all duration-300"
          >
            <Link to="/dashboard" className="flex items-center gap-2">
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Separator />

          <div className="space-y-3">
            <Button variant="outline" className="w-full hover:shadow-soft transition-all duration-200">
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full hover:shadow-soft transition-all duration-200">
              Continue with LinkedIn
            </Button>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;