import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Leaf, DollarSign, BarChart3, ShoppingCart, ArrowUpCircle, Target, Award } from "lucide-react";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const overviewStats = [
    {
      title: "Total Emissions Saved",
      value: "2,450",
      unit: "tons CO₂",
      change: "+12%",
      trending: "up",
      icon: Leaf,
      color: "success"
    },
    {
      title: "Credits Held",
      value: "8,350",
      unit: "credits",
      change: "+5%",
      trending: "up", 
      icon: Award,
      color: "accent"
    },
    {
      title: "Portfolio Value",
      value: "$125,400",
      unit: "",
      change: "+8.2%",
      trending: "up",
      icon: DollarSign,
      color: "primary"
    },
    {
      title: "Industry Ranking",
      value: "Top 15%",
      unit: "",
      change: "+3 positions",
      trending: "up",
      icon: Target,
      color: "warning"
    }
  ];

  const topIndustries = [
    { name: "Technology", emissions: "2.1M tons", reduction: 85, color: "success" },
    { name: "Manufacturing", emissions: "5.8M tons", reduction: 62, color: "warning" },
    { name: "Energy", emissions: "12.3M tons", reduction: 45, color: "destructive" },
    { name: "Transport", emissions: "8.7M tons", reduction: 38, color: "destructive" }
  ];

  const recentTrades = [
    { company: "Tesla Inc.", type: "buy", credits: 500, price: "$18", time: "2 hours ago" },
    { company: "Microsoft Corp.", type: "sell", credits: 200, price: "$22", time: "4 hours ago" },
    { company: "Apple Inc.", type: "buy", credits: 750, price: "$20", time: "1 day ago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Track your carbon impact and trading performance</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-gradient-eco hover:shadow-glow transition-all duration-300">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Buy Credits
            </Button>
            <Button variant="outline" className="hover:shadow-soft transition-all duration-200">
              <ArrowUpCircle className="h-4 w-4 mr-2" />
              Sell Credits
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewStats.map((stat, index) => (
            <Card key={stat.title} className="shadow-soft hover:shadow-elevated transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-full bg-${stat.color}/10`}>
                  <stat.icon className={`h-4 w-4 text-${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    {stat.unit}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {stat.trending === "up" ? (
                    <TrendingUp className="h-3 w-3 text-success" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-destructive" />
                  )}
                  <span className={`text-xs ${stat.trending === "up" ? "text-success" : "text-destructive"}`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Industry Performance */}
          <Card className="shadow-soft hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Industry Emissions Overview
              </CardTitle>
              <CardDescription>
                Comparison of emission reductions by industry
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topIndustries.map((industry, index) => (
                <div key={industry.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-foreground">{industry.name}</span>
                      <span className="text-sm text-muted-foreground ml-2">{industry.emissions}</span>
                    </div>
                    <Badge variant={industry.color === "success" ? "default" : "secondary"}>
                      {industry.reduction}% reduced
                    </Badge>
                  </div>
                  <Progress 
                    value={industry.reduction} 
                    className="h-2"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Trades */}
          <Card className="shadow-soft hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Recent Trading Activity
              </CardTitle>
              <CardDescription>
                Your latest carbon credit transactions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentTrades.map((trade, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${trade.type === "buy" ? "bg-success/10" : "bg-warning/10"}`}>
                      {trade.type === "buy" ? (
                        <ShoppingCart className="h-3 w-3 text-success" />
                      ) : (
                        <ArrowUpCircle className="h-3 w-3 text-warning" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{trade.company}</p>
                      <p className="text-sm text-muted-foreground">{trade.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">
                      {trade.type === "buy" ? "+" : "-"}{trade.credits} credits
                    </p>
                    <p className="text-sm text-muted-foreground">{trade.price}/credit</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4 hover:shadow-soft transition-all duration-200">
                View All Transactions
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Frequently used features for efficient carbon management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" asChild className="h-20 flex-col gap-2 hover:shadow-soft transition-all duration-200">
                <a href="/companies">
                  <BarChart3 className="h-5 w-5" />
                  <span className="text-sm">Explore Companies</span>
                </a>
              </Button>
              <Button variant="outline" asChild className="h-20 flex-col gap-2 hover:shadow-soft transition-all duration-200">
                <a href="/compare">
                  <Target className="h-5 w-5" />
                  <span className="text-sm">Compare Performance</span>
                </a>
              </Button>
              <Button variant="outline" asChild className="h-20 flex-col gap-2 hover:shadow-soft transition-all duration-200">
                <a href="/market">
                  <DollarSign className="h-5 w-5" />
                  <span className="text-sm">Market Trading</span>
                </a>
              </Button>
              <Button variant="outline" asChild className="h-20 flex-col gap-2 hover:shadow-soft transition-all duration-200">
                <a href="/insights">
                  <Award className="h-5 w-5" />
                  <span className="text-sm">Insights & Tips</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;