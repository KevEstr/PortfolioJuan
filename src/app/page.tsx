import { SocialMedia } from "@/components/SocialMedia";
import { ContactMeButton, DownloadResumeButton } from "@/components/ui/Button";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { SectionHeader } from "@/components/ui/Typography";
import { getHomePageData, getTechItems } from "../../sanity/lib/api";
import { SectionContainer } from "@/components/ui/Container";
import { ProjectCardList } from "@/components/ui/Card";
import { ExperienceList } from "@/components/ui/Timeline";
import Link from "next/link";
import { Qoute } from "@/components/ui/Qoute";
import { AboutMe } from "@/components/AboutMe";
import { TechSection } from "@/components/TechSection";

export default async function Home() {

  const techItems = [
    {
      name: "JavaScript",
      icon: "/icons/javascript.png",
      categories: [{ title: "Frontend", slug: "frontend" }]
    },
    {
      name: "React",
      icon: "/icons/react.png",
      categories: [{ title: "Frontend", slug: "frontend" }]
    },
    {
      name: "HTML",
      icon: "/icons/html.png",
      categories: [{ title: "Frontend", slug: "frontend" }]
    },
    {
      name: "CSS",
      icon: "/icons/css.png",
      categories: [{ title: "Frontend", slug: "frontend" }]
    },
    {
      name: "Express",
      icon: "/icons/express-js.svg",
      categories: [{ title: "Backend", slug: "backend" }]
    },
    {
      name: "MySQL",
      icon: "/icons/mysql.png",
      categories: [{ title: "Backend", slug: "backend" }]
    },
    {
      name: "Java",
      icon: "/icons/java.png",
      categories: [{ title: "Backend", slug: "backend" }]
    },
    {
      name: "Python",
      icon: "/icons/python.svg",
      categories: [{ title: "Backend", slug: "backend" }]
    },
    {
      name: "PostgreSQL",
      icon: "/icons/postgres.png",
      categories: [{ title: "Backend", slug: "backend" }]
    },
    {
      name: "C++",
      icon: "/icons/c++.png",
      categories: [{ title: "Backend", slug: "backend" }]
    },


  ];

  const projects = [
    {
      title: "Guacarí Hotel",
      slug: "project-1",
      description: "This web application simplifies the management of hotel guests, room reservations, and restaurant inventory. The platform streamlines daily operations, offering staff an efficient solution for managing guest details and maintaining accurate tracking of restaurant supplies.",

      websiteUrl: "https://example.com/project-1",
      githubUrl: "https://github.com/usuario/project-1",
      dateRange: { start: "2024-06-01", end: "2024-10-01" },
      tags: [
        { name: "React", icon: "/icons/react.png", slug: "frontend", categories: [{ title: "Frontend", slug: "frontend" }] },
        { name: "Express", icon: "/icons/express-js.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "PostgreSQL", icon: "/icons/postgres.png", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "JavaScript", icon: "/icons/javascript.png", slug: "frontend", categories: [{ title: "Frontend", slug: "frontend" }] }
      ],
      content: [
        "<p>This web application simplifies the management of hotel guests, room reservations, and restaurant inventory. The platform streamlines daily operations, offering staff an efficient solution for managing guest details and maintaining accurate tracking of restaurant supplies.</p>",
        "<p>This project was sold and is currently being used to manage a hotel in Colombia.</p>"
      ],

      thumbnail: "/icons/hotel.jpg"
    },
    {
      title: "Pruebas Saber PRO",
      slug: "project-2",
      description: "I built a predictive model to estimate student performance on the Saber Pro exams. The project entailed cleaning data using pandas and numpy, addressing missing values with SimpleImputer, normalizing features with StandardScaler, and transforming categorical data with OneHotEncoder to enhance the model's precision.",
      websiteUrl: "https://example.com/project-1",
      githubUrl: "https://github.com/mono789/ProyectoModelos1",
      dateRange: { start: "2024-04-01", end: "2024-05-10" },
      tags: [
        { name: "Python", icon: "/icons/python.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
      ],
      content: [
        "<p>.</p>"
      ],
      thumbnail: "/icons/modelo.jpg"
    },
    
  ];

  const experiences = [
    {
      organization: " Tutor in Machine Learning Technical Component",
      title: "Sapiencia",
      dateRange: { start: "September 2023", end: "November 2023" },
      description: "I taught Python for Machine Learning to 30 students remotely, developing and managing both theoretical and practical content. My efforts led to successful student certifications and a comprehensive learning experience.",
      content: "<p>.</p>",
      slug: "experience-1"
    },
    {
      organization: "Founder and CEO",
      title: "Parchese Store",
      dateRange: { start: "October 2017", end: "December 2023" },
      description: "I made key decisions to meet sales goals and ensure financial control. I led a team of 5, managing tasks such as payroll and inventory. I launched a website with 2500 products, optimized inventory and shipping processes, and handled digital marketing and content development.",
      content: "<p>.</p>", // Un solo string en lugar de un array
      slug: "experience-2"
    },
    {
      organization: "Lost Item Agent at Uber",
      title: "Teleperformance",
      dateRange: { start: "October 2017", end: "December 2023" },
      description: "I helped Uber users recover lost items and was named Top Performer for exceeding KPIs. I developed skills in adaptability, learning, and communication while supporting various customer service areas.",
      content: "<p>.</p>", // Un solo string en lugar de un array
      slug: "experience-3"
    },
    {
      organization: "Web Developer",
      title: "Guacarí Hotel",
      dateRange: { start: "May 2024", end: "August 2024" },
      description: "Developed a comprehensive management system for Guacari Hotel, utilizing React, Express, and PostgreSQL. Enhanced operational efficiency and customer satisfaction through features like real-time updates and automated reporting. Managed version control and streamlined deployment processes to ensure smooth and efficient updates.",
      content: "<p>.</p>", // Un solo string en lugar de un array
      slug: "experience-4"
    },
    // Agrega más experiencias según sea necesario...
  ];
  
  const data = await getHomePageData();
  console.log("render home page");
  return (
    <DefaultLayout>
      <section className="h-[var(--h-main)] fcenter">
        <div className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 md:text-4xl">
          <h1 className="text-[2rem] text-center tracking-normal sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] 2xl:text-[4rem] sm:tracking-wider">
            Hello, {"I'm "}
            <span className="font-bold primary-gradient">
              Juan Andrés
            </span>
          </h1>
          <div className="text-base tracking-wide text-center lg:pt-3 sm:text-xl md:text-2xl text-slate-300">
            Full-Stack Web Developer and Student of Systems Engineer
          </div>
          <div className="text-sm italic font-bold tracking-wide text-center md:text-base lg:text-lg primary-gradient-2">
            Actively looking for full-time jobs positions!
          </div>
          <div className="flex items-center pt-3 md:gap-4">
            {/* <ContactMeButton /> */}
            <DownloadResumeButton />
          </div>
          <div className="pt-4">
            <SocialMedia />
          </div>
        </div>
      </section>

      <SectionContainer>
        <SectionHeader>About Me</SectionHeader>
        <AboutMe />
      </SectionContainer>

      {/* tech section */}
      <SectionContainer>
        <SectionHeader>Technologies</SectionHeader>
        <div className="flex flex-wrap justify-center">
          <TechSection data={techItems} />
        </div>
      </SectionContainer>

      <SectionContainer className="z-10">
        <SectionHeader>My Projects</SectionHeader>
        <ProjectCardList
          projects={projects}
          className="grid-cols-1 lg:grid-cols-2 sm:max-w-[600px] md:max-w-[700px] lg:max-w-none"
        />
      </SectionContainer>

      {/* experience section */}
      <SectionContainer>
        <SectionHeader>Experiences</SectionHeader>
        <ExperienceList experiences={experiences} />
      </SectionContainer>

   
    </DefaultLayout>
  );
}
