import { IconBriefcase, IconMessage, IconUser, IconFolder } from "@tabler/icons-react";
import {
    IconBoxAlignRightFilled,
    IconTableColumn,
} from "@tabler/icons-react";
import { SkeletonFour, SkeletonFive } from "@/components/ui/skeletons";


export const navItems = [
    { name: "About", link: "#about", icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />, },
    { name: "Projects", link: "#projects" , icon: <IconFolder className="h-4 w-4 text-neutral-500 dark:text-white" />, },
    { name: "Experiences", link: "#experiences", icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />, },
    { name: "Testimonials", link: "#testimonials", icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />, },
    { name: "Contact", link: "#contact", icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />, },
];

export const gridItems = [
    {
      title: "Full Stack Development",
      description: (
        <span className="text-sm">
            Spending time on LeetCode and building things to understand better. Always open to feedback and improving little by little every day.
         Gaining experience with APIs using Python (FastAPI) and Ruby on Rails. Learning building Multi-AI agents , working with PostgreSQL and data flow.
        </span>
      ),
      header: <SkeletonFour />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  
    {
      title: "Problem Solving",
      description: (
        <span className="text-sm">
          
          Currently building real-world projects with React and exploring Next.js. I enjoy crafting clean, simple user interfaces using Tailwind CSS.
        </span>
      ),
      header: <SkeletonFive />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];

export const skills = [
    {
      id: 1,
      name: "JavaScript",
      designation: "Data structures, algorithms",
      image:
        "https://cdn-icons-png.flaticon.com/512/5968/5968238.png",
    },
    {
      id: 2,
      name: "ReactJS",
      designation: "Frontend Development",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
    },
    {
      id: 3,
      name: "NextJS",
      designation: "React Framework",
      image:
        "https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      id: 4,
      name: "TailwindCSS",
      designation: "Styling",
      image:
        "https://nanostack.io/_next/image?url=https%3A%2F%2Fnanostack.s3.ap-south-1.amazonaws.com%2F1708452954835Group%20451.png&w=828&q=75",
    },
    {
      id: 5,
      name: "Python",
      designation: "Backend Development",
      image:
        "https://cdn-icons-png.flaticon.com/512/5968/5968286.png",
    },
    {
      id: 6,
      name: "GenAI",
      designation: "AI Solutions",
      image:
        "https://img.freepik.com/premium-vector/artificial-intelligence-vector-illustration_1237743-49257.jpg",
    },
    {
      id: 7,
      name: "Ruby on Rails",
      designation: "Full Stack Development",
      image:
        "https://yt3.googleusercontent.com/VMZrABCrgw9tAvF-JF2bIyu8EFAA7TH7MrsPAOmU36UxuS55TNIEky4955y5kA9OJPf_QcO5xw=s900-c-k-c0x00ffffff-no-rj",
    },
  
  ];

  export const myWorks = [
    {
      title: "May Day",
      description: "A simple Journal website",
      imageUrl:
        "./mayday.webp",
      linkHref: "https://may-day.vercel.app/",
      skills: [
        "Javascript",
        "NextJS",
        "TailwindCSS",
        "Python",
        "FastAPI",
        "GenAI"
      ]
    },
    {
      title: "BrainWave Project",
      description:
        "Inspired by the idea from MasterJS combining with AI chat",
      imageUrl:
        "./bw.webp",
      linkHref: "https://www.brainwave-ai.click",
      skills: [
        "Javascript",
        "NextJS",
        "TailwindCSS",
        "Python",
        "FastAPI",
        "GenAI"
      ]
    },

  ];

  export const experiences = [
    {
      id: 1,
      title: "Junior Full Stack Developer",
      company: "CliniScribe",
      desc: "Worked on NDIS report project, including refining CliniScribe UI",
      thumbnail: "/exp1.svg",
    
    },
    {
      id: 2,
      title: "Customer Support",
      company: "Teleperformance",
      desc: "Supported clients with API, pixel, and platform issues while building my technical skills and learning to communicate solutions clearly and simply.",
      thumbnail: "/exp2.svg",
    },
  ];

  export const testimonials = [
    {
      quote:
        "The attention to detail and innovative features. I believe in her potential and am excited to see her grow.",
      name: "Gull A.",
      designation: "Software Engineer Lead at CliniScribe",
      src: "/gull.webp",
    },
    {
      quote:
        "She's learning and growing every day. I can see her potential and I'm excited to see where she goes. I like her atitude and her work ethic.",
      name: "Barry Nguyen",
      designation: "CTO at CliniScribe",
      src: "/barry.webp",
    },
    
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Andrew Phan",
      designation: "Project Manager at CliniScribe",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "All I want to say is that she is amazing",
      name: "Mariam G.",
      designation: "Manager at L8",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Maythunguyen"
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/may-thu-nguyen/"
    },
];
  
  