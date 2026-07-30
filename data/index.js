import { IconBriefcase, IconMessage, IconUser, IconFolder, IconMessageStar } from "@tabler/icons-react";
import {
    IconBoxAlignRightFilled,
    IconTableColumn,
} from "@tabler/icons-react";
import { SkeletonFour, SkeletonFive } from "@/components/ui/skeletons";


export const navItems = [
    { name: "About", link: "#about", icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />, },
    { name: "Projects", link: "#projects" , icon: <IconFolder className="h-4 w-4 text-neutral-500 dark:text-white" />, },
    { name: "Experiences", link: "#experiences", icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />, },
    { name: "Testimonials", link: "#testimonials", icon: <IconMessageStar className="h-4 w-4 text-neutral-500 dark:text-white" />, },
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
      name: "NodeJS",
      designation: "Backend Development",
      image:
        "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp",
    },
    {
      id: 6,
      name: "Python",
      designation: "Backend Development",
      image:
        "https://cdn-icons-png.flaticon.com/512/5968/5968286.png",
    },
    {
      id: 7,
      name: "GenAI",
      designation: "AI Solutions",
      image:
        "https://img.freepik.com/premium-vector/artificial-intelligence-vector-illustration_1237743-49257.jpg",
    },
    {
      id: 8,
      name: "Ruby on Rails",
      designation: "Full Stack Development",
      image:
        "https://yt3.googleusercontent.com/VMZrABCrgw9tAvF-JF2bIyu8EFAA7TH7MrsPAOmU36UxuS55TNIEky4955y5kA9OJPf_QcO5xw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 9,
      name: "Supabase",
      designation: "Database Management",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*QzPzYLTNRX7p5Rsl",
    },
    {
      id: 10,
      name: "MongoDB",
      designation: "NoSQL Database Management",
      image:
        "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg",
    },
  
  ];

  export const myWorks = [
    {
      title: "May Day",
      description: "A simple Journal website",
      imageUrl:
        "./mayday.webp",
      linkHref: "https://may-day.vercel.app/",
      gitHref: "https://github.com/Maythunguyen/may-day",
      skills: [
        "Javascript",
        "Next.js",
        "TailwindCSS",
        "Python",
        "FastAPI",
        "GenAI",
        "MongoDB",
        "Sentry",
      ]
    },
    {
      title: "BrainWave",
      description:
        "Inspired by the idea from MasterJS combining with AI chat",
      imageUrl:
        "./bw.webp",
      linkHref: "https://chat-with-brainwave.vercel.app",
      gitHref: "https://github.com/Maythunguyen/chat-with-brainwave",
      skills: [
        "Javascript",
        "Next.js",
        "TailwindCSS",
        "Python",
        "FastAPI",
        "GenAI"
      ]
    },
    {
      title: "iPhone May",
      description:
        "Inspired by the idea from MasterJS for practicing 3D animation and 3D design",
      imageUrl:
        "./i-phone.webp",
      linkHref: "https://i-phone-may.vercel.app/",
      gitHref: "https://github.com/Maythunguyen/iPhone-May",
      skills: [
        "Javascript",
        "React-Vite",
        "TailwindCSS",
        "Gsap",
        "Three.js",
      ]
    },
    {
      title: "Calories Counter",
      description:
        "This is a simple website that helps me to count my calories intake in a meal by uploading a photo of the meal",
      imageUrl:
        "https://images.unsplash.com/photo-1651059452723-8b51fb72333e?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkHref: "https://may-calories-counter.vercel.app",
      gitHref: "https://github.com/Maythunguyen/may-calories-counter",
      skills: [
        "Typescript",
        "Next.js",
        "TailwindCSS",
        "Python",
        "FastAPI",
        "GenAI"
      ]
    },
    {
      title: "May Contact List",
      description:
        "A simple contact list website that helps to manage contacts",
      imageUrl:
        "./contacts.webp",
      linkHref: "https://contact-lists-ten.vercel.app",
      gitHref: "https://github.com/Maythunguyen/contact-lists",
      skills: [
        "Typescript",
        "Next.js",
        "TailwindCSS",
        "JSONPlaceholder API",
      ]
    },
     {
      title: "Stroke Prediction System - AI/ML",
      description:
        "Built and compared two feed-forward neural networks (TensorFlow/Keras) to predict stroke risk, achieving ROC AUC 0.81 through feature analysis, class imbalance handling, and recall-focused evaluation",
      imageUrl:
        "./stroke-prediction.webp",
      linkHref: "https://github.com/Maythunguyen/stroke-prediction-ml",
      gitHref: "https://github.com/Maythunguyen/stroke-prediction-ml",
      skills: [
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "Pandas",
      ]
    },
    
  ];

  export const experiences = [

  {
    id: 1,
    title: "Full Stack - AI Engineer - Freelance",
    name: "PitchUp",
    role: "Full Stack - AI Engineer - Freelance",
    awards: 2,
    categories: ["Booking System", "AI Agentic workflow", "Full Stack"],
    desc: "Working on a core booking feature for sport venues booking. Enhanced the user experience by implementing feature flow and improving the UI.",
    thumbnail: "/exp1.svg",
    link: "/Software Engineer - May Thu Nguyen.pdf",
  },
  {
    id: 2,
    title: "Full Stack Engineer Intern",
    name: "PitchUp",
    role: "Full Stack Engineer Intern",
    awards: 2,
    categories: ["Booking System", "UI/UX", "Full Stack"],
    desc: "Working on a core booking feature for sport venues booking. Enhanced the user experience by implementing feature flow and improving the UI.",
    thumbnail: "/exp3.svg",
    link: "/Software Engineer - May Thu Nguyen.pdf",
  },
  {
    id: 3,
    title: "Intern - Junior Full Stack Engineer",
    name: "CliniScribe",
    role: "Junior Full Stack Intern",
    awards: 2,
    categories: ["NDIS Reports", "AI", "Frontend"],
    desc: "Worked on NDIS report project, including refining CliniScribe UI",
    thumbnail: "/exp2.svg",
    link: "/Software Engineer - May Thu Nguyen.pdf",
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
        "May was an outstanding software engineering intern who consistently demonstrated proactivity, responsibility, and tenacity. Her strong work ethic and determination in solving complex technical challenges made her an invaluable team member.",
      name: "Barry Nguyen",
      designation: "CTO at CliniScribe",
      src: "/barry.webp",
    },
    
    {
      quote:
        "I had the pleasure of working alongside May as a fellow Junior Software Engineer, and I can't speak highly enough of her professionalism, generosity, and technical skill.",
      name: "Andrew Phan",
      designation: "Software Engineer at CliniScribe",
      src: "/andrew.webp",
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
  
  