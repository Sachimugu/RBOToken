import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Blocks, DollarSign, Shield, Users } from "lucide-react";

const tokenDetails = [
  {
    icon: <Blocks size={32} className="mb-6 text-primary" />,
    title: "Blockchain Technology",
    description: "Our token is powered by Ethereum, one of the most secure and decentralized blockchains, ensuring trust and security for all transactions.",
  },
  {
    icon: <DollarSign size={32} className="mb-6 text-primary" />,
    title: "Affordable Price",
    description: "At a competitive presale price of $0.10, MyToken is designed to be accessible for everyone, whether you’re a small investor or a large backer.",
  },
  {
    icon: <Shield size={32} className="mb-6 text-primary" />,
    title: "Security",
    description: "Built with top-tier security protocols, MyToken ensures safe transactions and storage for all users, with smart contract auditing and decentralized governance.",
  },
  {
    icon: <Users size={32} className="mb-6 text-primary" />,
    title: "Community Driven",
    description: "We believe in community involvement. Token holders can vote on key decisions, making MyToken a truly decentralized and community-driven project.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="container py-24 sm:py-32 mx-auto">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        {/* Section Header */}
        <div className="text-center lg:text-left">
          <h2 className="text-lg text-primary mb-2 tracking-wider font-semibold">
            About MyToken
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Revolutionizing the Crypto Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            MyToken is a next-generation cryptocurrency designed to enhance the digital economy. From seamless payments to secure governance, it offers everything the crypto community needs.
          </p>
        </div>

        {/* Token Details Grid */}
        <div className="grid lg:grid-cols-2 gap-6 w-full">
          {tokenDetails.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number hover:shadow-lg relative overflow-hidden border border-transparent hover:border-primary/20 animate-border"
            >
              {/* Gradient Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover/number:border-primary/50 rounded-lg animate-border-inner" />

              <CardHeader>
                <div className="flex justify-between items-center">
                  {icon}
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;