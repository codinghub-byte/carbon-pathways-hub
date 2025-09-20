import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  ArrowUpCircle, 
  Clock,
  Building2,
  Leaf,
  AlertCircle
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Market = () => {
  const [selectedTab, setSelectedTab] = useState("buy");

  const marketListings = [
    {
      id: 1,
      company: "Tesla Inc.",
      logo: "🚗",
      credits: 5000,
      pricePerCredit: 18,
      totalValue: 90000,
      type: "sell",
      timeLeft: "2d 14h",
      trend: "up",
      change: "+5.2%",
      description: "High-quality renewable energy credits"
    },
    {
      id: 2,
      company: "Microsoft Corp.",
      logo: "💻",
      credits: 10000,
      pricePerCredit: 22,
      totalValue: 220000,
      type: "sell",
      timeLeft: "1d 8h",
      trend: "up",
      change: "+2.1%",
      description: "Carbon neutral data center operations"
    },
    {
      id: 3,
      company: "Green Energy Co.",
      logo: "🌱",
      credits: 15000,
      pricePerCredit: 16,
      totalValue: 240000,
      type: "sell",
      timeLeft: "3d 2h",
      trend: "down",
      change: "-1.5%",
      description: "Wind farm carbon offset credits"
    },
    {
      id: 4,
      company: "EcoTech Solutions",
      logo: "♻️",
      credits: 8000,
      pricePerCredit: 20,
      totalValue: 160000,
      type: "sell",
      timeLeft: "5h 30m",
      trend: "up",
      change: "+3.8%",
      description: "Forest conservation projects"
    }
  ];

  const buyOrders = [
    {
      id: 1,
      buyer: "Climate Corp.",
      credits: 12000,
      maxPrice: 19,
      totalBudget: 228000,
      timeLeft: "1d 12h",
      priority: "high"
    },
    {
      id: 2,
      buyer: "Sustainable Industries",
      credits: 7500,
      maxPrice: 21,
      totalBudget: 157500,
      timeLeft: "2d 6h",
      priority: "medium"
    }
  ];

  const marketStats = [
    {
      title: "Market Cap",
      value: "$2.4B",
      change: "+12.5%",
      trend: "up"
    },
    {
      title: "24h Volume",
      value: "45,320",
      change: "+8.2%",
      trend: "up"
    },
    {
      title: "Avg Price",
      value: "$18.50",
      change: "-2.1%",
      trend: "down"
    },
    {
      title: "Active Listings",
      value: "1,247",
      change: "+15.3%",
      trend: "up"
    }
  ];

  const priceHistory = [
    { time: "Jan", price: 15 },
    { time: "Feb", price: 16.5 },
    { time: "Mar", price: 18 },
    { time: "Apr", price: 17.2 },
    { time: "May", price: 19.8 },
    { time: "Jun", price: 18.5 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">Carbon Credit Market</h1>
          <p className="text-muted-foreground">Trade carbon credits in real-time with transparent pricing</p>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {marketStats.map((stat, index) => (
            <Card key={stat.title} className="shadow-soft animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-success" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    )}
                    <span className={`text-sm ${stat.trend === "up" ? "text-success" : "text-destructive"}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Trading Interface */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="buy" className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Buy Credits
                </TabsTrigger>
                <TabsTrigger value="sell" className="flex items-center gap-2">
                  <ArrowUpCircle className="h-4 w-4" />
                  Sell Orders
                </TabsTrigger>
              </TabsList>

              <TabsContent value="buy" className="space-y-4">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Available Credits for Purchase</CardTitle>
                    <CardDescription>Current market listings from verified sellers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {marketListings.map((listing) => (
                      <div key={listing.id} className="border border-border rounded-lg p-4 hover:shadow-soft transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{listing.logo}</span>
                            <div>
                              <h4 className="font-medium text-foreground">{listing.company}</h4>
                              <p className="text-sm text-muted-foreground">{listing.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {listing.trend === "up" ? (
                              <TrendingUp className="h-4 w-4 text-success" />
                            ) : (
                              <TrendingDown className="h-4 w-4 text-destructive" />
                            )}
                            <span className={`text-sm ${listing.trend === "up" ? "text-success" : "text-destructive"}`}>
                              {listing.change}
                            </span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-muted-foreground">Credits Available</p>
                            <p className="font-medium">{listing.credits.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Price per Credit</p>
                            <p className="font-medium text-primary">${listing.pricePerCredit}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Total Value</p>
                            <p className="font-medium">${listing.totalValue.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Time Left</p>
                            <p className="font-medium flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {listing.timeLeft}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button className="bg-gradient-eco hover:shadow-glow transition-all duration-300">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Buy Credits
                          </Button>
                          <Button variant="outline" className="hover:shadow-soft transition-all duration-200">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sell" className="space-y-4">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Buy Orders</CardTitle>
                    <CardDescription>Companies looking to purchase carbon credits</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {buyOrders.map((order) => (
                      <div key={order.id} className="border border-border rounded-lg p-4 hover:shadow-soft transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Building2 className="h-6 w-6 text-muted-foreground" />
                            <div>
                              <h4 className="font-medium text-foreground">{order.buyer}</h4>
                              <p className="text-sm text-muted-foreground">Verified buyer</p>
                            </div>
                          </div>
                          <Badge variant={order.priority === "high" ? "destructive" : "secondary"}>
                            {order.priority} priority
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-muted-foreground">Credits Needed</p>
                            <p className="font-medium">{order.credits.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Max Price</p>
                            <p className="font-medium text-primary">${order.maxPrice}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Total Budget</p>
                            <p className="font-medium">${order.totalBudget.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Expires In</p>
                            <p className="font-medium flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {order.timeLeft}
                            </p>
                          </div>
                        </div>
                        
                        <Button className="bg-gradient-eco hover:shadow-glow transition-all duration-300">
                          <ArrowUpCircle className="h-4 w-4 mr-2" />
                          Fulfill Order
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Price Chart & Info */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Price Trends
                </CardTitle>
                <CardDescription>6-month carbon credit price history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {priceHistory.map((point, index) => (
                    <div key={point.time} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{point.time}</span>
                      <span className="font-medium">${point.price}</span>
                      <div className="flex-1 mx-3">
                        <Progress value={(point.price / 25) * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  Market Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                    <p className="text-sm font-medium text-success">Market Outlook: Bullish</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Increased demand from tech companies driving prices up
                    </p>
                  </div>
                  
                  <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                    <p className="text-sm font-medium text-warning">Supply Alert</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Limited high-quality credits available this quarter
                    </p>
                  </div>
                  
                  <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-sm font-medium text-accent">Trading Tip</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Consider buying now before Q4 compliance deadlines
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-success" />
                  Your Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Credits Owned</span>
                  <span className="font-medium">8,350</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Portfolio Value</span>
                  <span className="font-medium text-primary">$154,650</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Today's P&L</span>
                  <span className="font-medium text-success">+$3,240</span>
                </div>
                <Button variant="outline" className="w-full mt-4 hover:shadow-soft transition-all duration-200">
                  Manage Portfolio
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Market;