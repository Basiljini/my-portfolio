"use client"
import Image from "next/image";

type Achievements={
  image: string;
  title: string;
}

const achievementsData: Achievements[] = [
    {
      image: "/images/Achievements/Google for Developers.png",
      title: "Google For Developers Certified"
    },
    {
      image: "/images/Achievements/NoSQL & DBaas.png",
      title: "NoSQL & DBaaS IBM Certified"
    },
    {
      image: "/images/Achievements/Development Environment Azure.png",
      title: "Azure Development Environment Badge"
    },
    {
      image: "/images/Achievements/Cloud Computing Azure.png",
      title: "Cloud Computing by Azure Badge"
    },
    {
      image: "/images/Achievements/Cloud Services Azure.png",
      title: "Cloud Services by Azure Badge"
    },
  ];
export default function Achievements() {
    return (
      // Achievements Section
      <section id="Achievements" className="py-20 bg-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-12">
            My Achievements
          </h2>
          </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
              {achievementsData.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    width={500}
                    height={300}
                    className="w-full h-32 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {achievement.title}
                  </h3>
                </div>
              ))}
            </div>

          </section>
    );
}