import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Leaf, 
  Building2, 
  DollarSign,
  Target,
  ArrowRight,
  Plus
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Compare = () => {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>(["tesla", "microsoft"]);

  const companies = {
    tesla: {
      name: "Tesla Inc.",
      logo: "🚗",
      industry: "Automotive",
      emissions: 120000,
      creditsAvailable: 50000,
      pricePerCredit: 18,
      ecoScore: "A",
      trend: "up",
      change: "+15.2%",
      efficiency: 85,
      monthlyData: [100, 95, 88, 82, 75, 68],
      region: "North America"
    },
    microsoft: {
      name: "Microsoft Corp.",
      logo: "💻",
      industry: "Technology",
      emissions: 300000,
      creditsAvailable: 80000,
      pricePerCredit: 15,
      ecoScore: "B+",
      trend: "up",
      change: "+8.5%",
      efficiency: 72,
      monthlyData: [120, 115, 108, 102, 95, 88],
      region: "North America"
    },
    shell: {
      name: "Shell PLC",
      logo: "⛽",
      industry: "Energy",
      emissions: 2000000,
      creditsAvailable: 500000,
      pricePerCredit: 10,
      ecoScore: "C",
      trend: "down",
      change: "-3.2%",
      efficiency: 45,
      monthlyData: [200, 195, 188, 185, 180, 175],
      region: "Europe"
    },
    nestle: {
      name: "Nestlé S.A.",
      logo: "🍫",
      industry: "Food & Beverage",
      emissions: 900000,
      creditsAvailable: 200000,
      pricePerCredit: 12,
      ecoScore: "B",
      trend: "up",
      change: "+5.8%",
      efficiency: 62,
      monthlyData: [150, 145, 140, 135, 128, 122],
      region: "Europe"
    }
  };

  const addCompany = (companyId: string) => {
    if (!selectedCompanies.includes(companyId) && selectedCompanies.length < 4) {
      setSelectedCompanies([...selectedCompanies, companyId]);
    }
  };

  const removeCompany = (companyId: string) => {
    setSelectedCompanies(selectedCompanies.filter(id => id !== companyId));
  };

  const getScoreColor = (score: string) => {
    if (score.startsWith('A')) return 'bg-success text-success-foreground';
    if (score.startsWith('B')) return 'bg-warning text-warning-foreground';
    return 'bg-destructive text-destructive-foreground';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">Company Comparison</h1>
          <p className="text-muted-foreground">Compare carbon performance and trading metrics across companies</p>
        </div>

        {/* Company Selection */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Select Companies to Compare
            </CardTitle>
            <CardDescription>
              Choose up to 4 companies for detailed comparison
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 mb-4">
              {selectedCompanies.map((companyId) => (
                <Badge key={companyId} variant="secondary" className="px-3 py-2 flex items-center gap-2">
                  <span className="text-lg">{companies[companyId as keyof typeof companies].logo}</span>
                  {companies[companyId as keyof typeof companies].name}
                  <button 
                    onClick={() => removeCompany(companyId)}
                    className="ml-1 text-muted-foreground hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              ))}
              {selectedCompanies.length < 4 && (
                <Select onValueChange={addCompany}>
                  <SelectTrigger className="w-48">
                    <Plus className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Add company" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(companies).map(([id, company]) => (
                      !selectedCompanies.includes(id) && (
                        <SelectItem key={id} value={id}>
                          <div className="flex items-center gap-2">
                            <span>{company.logo}</span>
                            {company.name}
                          </div>
                        </SelectItem>
                      )
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Comparison Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedCompanies.map((companyId, index) => {
            const company = companies[companyId as keyof typeof companies];
            return (
              <Card key={companyId} className="shadow-soft hover:shadow-elevated transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{company.logo}</span>
                      <div>
                        <CardTitle className="text-sm">{company.name}</CardTitle>
                        <CardDescription className="text-xs">{company.industry}</CardDescription>
                      </div>
                    </div>
                    <Badge className={`text-xs ${getScoreColor(company.ecoScore)}`}>
                      {company.ecoScore}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Emissions</span>
                      <span>{(company.emissions / 1000).toFixed(0)}K tons</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Credits</span>
                      <span>{(company.creditsAvailable / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Price/Credit</span>
                      <span className="text-primary">${company.pricePerCredit}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Efficiency</span>
                      <span>{company.efficiency}%</span>
                    </div>
                    <Progress value={company.efficiency} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">6M Trend</span>
                    <div className="flex items-center gap-1">
                      {company.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 text-success" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-destructive" />
                      )}
                      <span className={company.trend === "up" ? "text-success" : "text-destructive"}>
                        {company.change}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed Metrics Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Emissions Comparison */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-success" />
                Emissions Comparison
              </CardTitle>
              <CardDescription>Total carbon emissions by company</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedCompanies.map((companyId) => {
                const company = companies[companyId as keyof typeof companies];
                const maxEmissions = Math.max(...selectedCompanies.map(id => companies[id as keyof typeof companies].emissions));
                const percentage = (company.emissions / maxEmissions) * 100;
                
                return (
                  <div key={companyId} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>{company.logo}</span>
                        <span className="font-medium text-sm">{company.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {(company.emissions / 1000).toFixed(0)}K tons CO₂
                      </span>
                    </div>
                    <Progress value={percentage} className="h-3" />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Credit Pricing Comparison */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Credit Pricing
              </CardTitle>
              <CardDescription>Price per carbon credit comparison</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedCompanies.map((companyId) => {
                const company = companies[companyId as keyof typeof companies];
                const maxPrice = Math.max(...selectedCompanies.map(id => companies[id as keyof typeof companies].pricePerCredit));
                const percentage = (company.pricePerCredit / maxPrice) * 100;
                
                return (
                  <div key={companyId} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>{company.logo}</span>
                        <span className="font-medium text-sm">{company.name}</span>
                      </div>
                      <span className="text-sm font-medium text-primary">
                        ${company.pricePerCredit}/credit
                      </span>
                    </div>
                    <Progress value={percentage} className="h-3" />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Performance Efficiency */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                Efficiency Scores
              </CardTitle>
              <CardDescription>Carbon reduction efficiency rating</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedCompanies.map((companyId) => {
                const company = companies[companyId as keyof typeof companies];
                
                return (
                  <div key={companyId} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>{company.logo}</span>
                        <span className="font-medium text-sm">{company.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{company.efficiency}%</span>
                        <Badge className={`text-xs ${getScoreColor(company.ecoScore)}`}>
                          {company.ecoScore}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={company.efficiency} className="h-3" />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* 6-Month Trend */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-warning" />
                6-Month Emissions Trend
              </CardTitle>
              <CardDescription>Monthly emissions reduction progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedCompanies.map((companyId) => {
                const company = companies[companyId as keyof typeof companies];
                const reductionPercent = ((company.monthlyData[0] - company.monthlyData[5]) / company.monthlyData[0]) * 100;
                
                return (
                  <div key={companyId} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>{company.logo}</span>
                        <span className="font-medium text-sm">{company.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {reductionPercent > 0 ? (
                          <TrendingDown className="h-3 w-3 text-success" />
                        ) : (
                          <TrendingUp className="h-3 w-3 text-destructive" />
                        )}
                        <span className={`text-sm ${reductionPercent > 0 ? 'text-success' : 'text-destructive'}`}>
                          {reductionPercent > 0 ? '-' : '+'}{Math.abs(reductionPercent).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {company.monthlyData.map((value, index) => (
                        <div 
                          key={index} 
                          className="flex-1 bg-muted rounded-sm"
                          style={{ height: `${(value / 200) * 40}px` }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-eco hover:shadow-glow transition-all duration-300">
                <BarChart3 className="h-4 w-4 mr-2" />
                Export Comparison Report
              </Button>
              <Button variant="outline" className="hover:shadow-soft transition-all duration-200">
                <Target className="h-4 w-4 mr-2" />
                Set Performance Targets
              </Button>
              <Button variant="outline" className="hover:shadow-soft transition-all duration-200">
                <ArrowRight className="h-4 w-4 mr-2" />
                View Market Analysis
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Compare;