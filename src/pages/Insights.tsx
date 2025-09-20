import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Lightbulb, 
  TrendingUp, 
  Target, 
  Award, 
  BookOpen, 
  AlertCircle,
  CheckCircle,
  Clock,
  Leaf,
  BarChart3,
  ArrowRight
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Insights = () => {
  const recommendations = [
    {
      id: 1,
      type: "urgent",
      title: "Renewable Energy Investment",
      description: "Your emissions are 20% higher than industry average. Consider investing in renewable energy to reduce your carbon footprint.",
      impact: "High",
      effort: "Medium",
      savings: "$45,000/year",
      timeline: "3-6 months",
      icon: Lightbulb
    },
    {
      id: 2,
      type: "opportunity",
      title: "Energy Efficiency Optimization",
      description: "Implement smart building systems to reduce energy consumption by up to 30%.",
      impact: "Medium",
      effort: "Low",
      savings: "$25,000/year",
      timeline: "1-2 months",
      icon: Target
    },
    {
      id: 3,
      type: "trending",
      title: "Carbon Credit Portfolio Diversification",
      description: "Current market trends suggest diversifying into forestry and renewable credits.",
      impact: "Medium",
      effort: "Low",
      savings: "$12,000/year",
      timeline: "2 weeks",
      icon: TrendingUp
    }
  ];

  const achievements = [
    {
      title: "Carbon Neutral Milestone",
      description: "Achieved carbon neutrality for Q2 2024",
      date: "2 weeks ago",
      points: 500,
      icon: Award,
      color: "success"
    },
    {
      title: "Top 10% Performer",
      description: "Ranked in top 10% for emission reductions",
      date: "1 month ago", 
      points: 300,
      icon: Target,
      color: "primary"
    },
    {
      title: "Green Innovation Leader",
      description: "Implemented 5 sustainable initiatives",
      date: "2 months ago",
      points: 250,
      icon: Leaf,
      color: "accent"
    }
  ];

  const educationalContent = [
    {
      title: "Understanding Carbon Credits",
      description: "Learn the basics of carbon credit trading and how it impacts your business.",
      readTime: "5 min read",
      category: "Basics",
      difficulty: "Beginner"
    },
    {
      title: "Net Zero Strategies for Business",
      description: "Comprehensive guide to achieving net-zero emissions in your organization.",
      readTime: "12 min read",
      category: "Strategy",
      difficulty: "Intermediate"
    },
    {
      title: "Regulatory Compliance 2024",
      description: "Stay updated with the latest carbon reporting requirements and deadlines.",
      readTime: "8 min read",
      category: "Compliance",
      difficulty: "Advanced"
    },
    {
      title: "Renewable Energy ROI Calculator",
      description: "Calculate the return on investment for various renewable energy projects.",
      readTime: "10 min read",
      category: "Finance",
      difficulty: "Intermediate"
    }
  ];

  const getRecommendationType = (type: string) => {
    switch (type) {
      case "urgent":
        return { color: "destructive", icon: AlertCircle };
      case "opportunity":
        return { color: "primary", icon: Target };
      case "trending":
        return { color: "accent", icon: TrendingUp };
      default:
        return { color: "secondary", icon: Lightbulb };
    }
  };

  const progressGoals = [
    {
      title: "Annual Emission Reduction",
      current: 68,
      target: 100,
      unit: "%"
    },
    {
      title: "Renewable Energy Usage",
      current: 45,
      target: 80,
      unit: "%"
    },
    {
      title: "Carbon Credit Efficiency",
      current: 82,
      target: 95,
      unit: "%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">Insights & Recommendations</h1>
          <p className="text-muted-foreground">Personalized guidance to optimize your carbon management strategy</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personalized Recommendations */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-warning" />
                  Personalized Recommendations
                </CardTitle>
                <CardDescription>
                  AI-powered suggestions based on your performance data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((rec, index) => {
                  const typeInfo = getRecommendationType(rec.type);
                  return (
                    <div 
                      key={rec.id} 
                      className="border border-border rounded-lg p-4 hover:shadow-soft transition-all duration-300 animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-full bg-${typeInfo.color}/10`}>
                          <typeInfo.icon className={`h-4 w-4 text-${typeInfo.color}`} />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-foreground">{rec.title}</h4>
                            <Badge variant={typeInfo.color as any}>{rec.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{rec.description}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                            <div>
                              <p className="text-xs text-muted-foreground">Impact</p>
                              <p className="font-medium text-sm">{rec.impact}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Effort</p>
                              <p className="font-medium text-sm">{rec.effort}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Savings</p>
                              <p className="font-medium text-sm text-success">{rec.savings}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Timeline</p>
                              <p className="font-medium text-sm">{rec.timeline}</p>
                            </div>
                          </div>
                          
                          <div className="flex gap-2 mt-4">
                            <Button size="sm" className="bg-gradient-eco hover:shadow-glow transition-all duration-300">
                              Implement Now
                            </Button>
                            <Button size="sm" variant="outline" className="hover:shadow-soft transition-all duration-200">
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Educational Content */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-accent" />
                  Learning Center
                </CardTitle>
                <CardDescription>
                  Stay informed with the latest in carbon management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {educationalContent.map((content, index) => (
                    <div 
                      key={index} 
                      className="border border-border rounded-lg p-4 hover:shadow-soft transition-all duration-300 group cursor-pointer"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {content.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{content.readTime}</span>
                        </div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {content.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{content.description}</p>
                        <div className="flex items-center justify-between mt-3">
                          <Badge variant="outline" className="text-xs">
                            {content.difficulty}
                          </Badge>
                          <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Goals */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Progress Goals
                </CardTitle>
                <CardDescription>
                  Track your sustainability targets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {progressGoals.map((goal, index) => (
                  <div key={goal.title} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{goal.title}</span>
                      <span className="text-sm text-muted-foreground">
                        {goal.current}{goal.unit} / {goal.target}{goal.unit}
                      </span>
                    </div>
                    <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-warning" />
                  Recent Achievements
                </CardTitle>
                <CardDescription>
                  Your sustainability milestones
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={achievement.title} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className={`p-2 rounded-full bg-${achievement.color}/10`}>
                      <achievement.icon className={`h-3 w-3 text-${achievement.color}`} />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-medium text-foreground">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{achievement.date}</span>
                        <Badge variant="outline" className="text-xs">
                          +{achievement.points} pts
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start hover:shadow-soft transition-all duration-200">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start hover:shadow-soft transition-all duration-200">
                  <Target className="h-4 w-4 mr-2" />
                  Set New Goal
                </Button>
                <Button variant="outline" className="w-full justify-start hover:shadow-soft transition-all duration-200">
                  <Clock className="h-4 w-4 mr-2" />
                  Schedule Review
                </Button>
                <Button className="w-full bg-gradient-eco hover:shadow-glow transition-all duration-300">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Get Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Insights;