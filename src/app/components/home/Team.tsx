import Image from "next/image";
import TeamCard from "./TeamCard";

export default function Team() {
  const teams = [
    {
      name: "Shakti Yonjan",
      role: "",
      image: "/images/team/shakti-yonjan.jpeg",
    },
    {
      name: "Jiwan Shrestha",
      role: "",
      image: "/images/team/jiwan-shrestha.jpeg",
    },
    {
      name: "Nabin Shrestha",
      role: "",
      image: "/images/team/nabin-shrestha.jpeg",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Meet our dedicated team members who will make your journey memorable
            and exciting. We are glad to meet you.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
          {teams.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
}
