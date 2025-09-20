import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Building2, Leaf, DollarSign, TrendingUp, BarChart3, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const companies = [
    {
      id: 1,
      name: "Tesla Inc.",
      logo: "🚗",
      industry: "Automotive",
      emissions: "120,000",
      creditsAvailable: "50,000",
      pricePerCredit: "$18",
      ecoScore: "A",
      region: "North America",
      trend: "up",
      description: "Leading electric vehicle manufacturer"
    },
    {
      id: 2,
      name: "Microsoft Corp.",
      logo: "💻",
      industry: "Technology",
      emissions: "300,000",
      creditsAvailable: "80,000",
      pricePerCredit: "$15",
      ecoScore: "B+",
      region: "North America",
      trend: "up",
      description: "Cloud computing and software services"
    },
    {
      id: 3,
      name: "Shell PLC",
      logo: "⛽",
      industry: "Energy",
      emissions: "2,000,000",
      creditsAvailable: "500,000",
      pricePerCredit: "$10",
      ecoScore: "C",
      region: "Europe",
      trend: "down",
      description: "Global energy and petrochemical company"
    },
    {
      id: 4,
      name: "Nestlé S.A.",
      logo: "🍫",
      industry: "Food & Beverage",
      emissions: "900,000",
      creditsAvailable: "200,000",
      pricePerCredit: "$12",
      ecoScore: "B",
      region: "Europe",
      trend: "up",
      description: "Multinational food and drink processing"
    },
    {
      id: 5,
      name: "Infosys Ltd.",
      logo: "💼",
      industry: "Technology",
      emissions: "250,000",
      creditsAvailable: "75,000",
      pricePerCredit: "$16",
      ecoScore: "A-",
      region: "Asia",
      trend: "up",
      description: "Information technology services"
    },
    {
      id: 6,
      name: "Toyota Motor",
      logo: "🚙",
      industry: "Automotive",
      emissions: "800,000",
      creditsAvailable: "300,000",
      pricePerCredit: "$14",
      ecoScore: "B+",
      region: "Asia",
      trend: "up",
      description: "Automotive manufacturing leader"
    }
  ];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "all" || company.industry === selectedIndustry;
    const matchesRegion = selectedRegion === "all" || company.region === selectedRegion;
    
    return matchesSearch && matchesIndustry && matchesRegion;
  });

  const getScoreColor = (score: string) => {
    if (score.startsWith('A')) return "default";
    if (score.startsWith('B')) return "secondary";
    return "destructive";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">Company Explorer</h1>
          <p className="text-muted-foreground">Discover and analyze carbon performance across industries</p>
        </div>

        {/* Filters */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 transition-all duration-200 focus:shadow-soft"
                />
              </div>
              
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger className="transition-all duration-200 focus:shadow-soft">
                  <SelectValue placeholder="All Industries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Automotive">Automotive</SelectItem>
                  <SelectItem value="Energy">Energy</SelectItem>
                  <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="transition-all duration-200 focus:shadow-soft">
                  <SelectValue placeholder="All Regions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="North America">North America</SelectItem>
                  <SelectItem value="Europe">Europe</SelectItem>
                  <SelectItem value="Asia">Asia</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="hover:shadow-soft transition-all duration-200">
                <BarChart3 className="h-4 w-4 mr-2" />
                Compare Selected
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredCompanies.length} of {companies.length} companies
          </p>
          <Select defaultValue="emissions">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="emissions">Emissions (High to Low)</SelectItem>
              <SelectItem value="credits">Credits Available</SelectItem>
              <SelectItem value="price">Price per Credit</SelectItem>
              <SelectItem value="score">Eco Score</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company, index) => (
            <Card 
              key={company.id} 
              className="shadow-soft hover:shadow-elevated transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{company.logo}</div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {company.name}
                      </CardTitle>
                      <CardDescription>{company.industry}</CardDescription>
                    </div>
                  </div>
                  <Badge 
                    variant={getScoreColor(company.ecoScore)} 
                    className={`font-bold ${company.ecoScore.startsWith('A') ? 'bg-success text-success-foreground' : company.ecoScore.startsWith('B') ? 'bg-warning text-warning-foreground' : ''}`}
                  >
                    {company.ecoScore}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{company.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Leaf className="h-3 w-3" />
                      Emissions
                    </div>
                    <p className="font-medium">{company.emissions} tons CO₂</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Building2 className="h-3 w-3" />
                      Credits
                    </div>
                    <p className="font-medium">{company.creditsAvailable}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <DollarSign className="h-3 w-3" />
                      Price/Credit
                    </div>
                    <p className="font-medium text-primary">{company.pricePerCredit}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <TrendingUp className="h-3 w-3" />
                      Trend
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className={`h-3 w-3 ${company.trend === 'up' ? 'text-success' : 'text-destructive'}`} />
                      <span className={`text-sm ${company.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                        {company.trend === 'up' ? 'Improving' : 'Declining'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-eco hover:shadow-glow transition-all duration-300"
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="hover:shadow-soft transition-all duration-200">
                    Compare
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredCompanies.length > 0 && (
          <div className="text-center">
            <Button variant="outline" className="hover:shadow-soft transition-all duration-200">
              Load More Companies
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Companies;