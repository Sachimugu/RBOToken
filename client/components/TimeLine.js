import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Rocket, Users, CheckCircle } from "lucide-react";

const roadmapData = [
  {
    milestone: "Presale Launch",
    description: "Start of the presale phase. Early backers can get exclusive tokens at a discounted rate.",
    date: "Q1 2025",
    icon: <Calendar size={32} className="text-primary" />,
    image: "/images/presale.png",
  },
  {
    milestone: "Token Launch",
    description: "Official launch of MyToken. Tokens will be available for purchase on major exchanges.",
    date: "Q2 2025",
    icon: <Rocket size={32} className="text-primary" />,
    image: "/images/token-launch.png",
  },
  {
    milestone: "Partnerships & Integrations",
    description: "Strategic partnerships with key platforms and integrations with Web3 services.",
    date: "Q3 2025",
    icon: <Users size={32} className="text-primary" />,
    image: "/images/partnerships.png",
  },
  {
    milestone: "Community Governance",
    description: "Full launch of community-driven governance, where holders can vote on proposals.",
    date: "Q4 2025",
    icon: <CheckCircle size={32} className="text-primary" />,
    image: "/images/governance.png",
  },
];

export const RoadmapSection = () => {
  return (
    <section id="roadmap" className="container py-24 sm:py-32 mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-lg text-gray-700 mb-2 font-semibold">Roadmap</h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Journey Ahead</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Follow our journey as we revolutionize the crypto space. Our roadmap outlines key milestones and plans for the future.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-px bg-gray-300 h-full"></div>

        {roadmapData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between mb-16 relative z-10 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
              <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{item.milestone}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <p className="text-sm text-gray-500 font-semibold">{item.date}</p>
                </CardContent>
              </Card>
            </div>

            <div className="w-full md:w-1/2">
              <img
                src={item.image}
                alt={item.milestone}
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadmapSection;
