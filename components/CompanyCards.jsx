"use client";

import Image from "next/image";

const companies = [
  {
    name: "Cliniscribe",
    role: "Software Engineer Intern",
    works: 4,
    awards: "Medical Reporting System",
    url: "https://cliniscribe.com", // if no public site, just leave as "#"
    image: "https://media.licdn.com/dms/image/v2/D4E0BAQEu4Cq1J3BW-Q/company-logo_200_200/company-logo_200_200/0/1681781962110?e=2147483647&v=beta&t=1iUgQokTMEkAv_mAu1BrHoTf7RTIxEOT8Csla2ToCVM", // replace with your image path
    logo: "/exp2.svg", // replace with your logo path
  },
  {
    name: "PitchUp",
    role: "Frontend Developer Intern",
    works: 5,
    awards: "Venue Booking Platform",
    url: "pitchup.com", // replace with real url
    image: "https://rabbixel.com/wp-content/uploads/2019/04/creative-logo-maker.png.webp",
    logo: "/exp1.svg",
  },

];

export default function CompanyCards() {
  return (
    <section className="w-full py-20 md:px-10 text-white" id="experience">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 max-w-full">
        {companies.map((company, idx) => (
          <div key={idx} className="bg-neutral-800 p-5 rounded-lg shadow-lg flex flex-col gap-4 hover:scale-[1.02] transition">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                <Image src={company.logo} alt={company.name} width={40} height={40} />
              </div>
              <span className="text-sm bg-neutral-700 px-2 py-1 rounded">Works {String(company.works).padStart(2, "0")}</span>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={company.image}
                alt={company.name}
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-[180px] sm:h-[200px] md:h-[220px]"
              />
            </div>
            <div>
              <p className="text-sm text-neutral-400">{company.role}</p>
              <h3 className="text-xl font-semibold">{company.name}</h3>
            </div>
            <div className="flex justify-between text-sm text-neutral-400">
              <a href={company.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {company.url.replace("https://", "")}
              </a>
              <span>{company.awards}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
