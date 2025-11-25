import {
  About,
  Projects,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
  Certificate,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";


const person: Person = {
  firstName: "Andrew",
  lastName: "Macedo",
  name: `Andrew Macedo`,
  role: "Project Manager & Robotics Engineer",
  avatar: "/images/avatar.jpg",
  email: "findat.global@gmail.com",
  location: "Asia/Bangkok", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "German", "French", "Thai"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Conscientia-Lumina",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/macedoandrew/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>From Robotics to AI: Building Intelligent Systems</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Andrew, a Project Manager and Software Engineer specializing in
      robotics and AI-driven solutions. With a passion for innovation, I create
      intelligent systems that enhance efficiency and drive progress across
      industries. Explore my portfolio to see how I blend technology and
      creativity to solve complex challenges.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/findat-global/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Andrew Macedo is a seasoned Project Manager and Robotics Engineer with proven expertise in AI-driven automation, industrial robotics, and scalable software solutions.
        With a diverse background spanning automotive manufacturing, machine learning operations, and full-stack development, he delivers innovative systems that optimize efficiency and drive measurable business results. 
        Fluent in English and German Andrew brings a global perspective to complex technical challenges. His portfolio demonstrates a unique blend of hands-on engineering experience and strategic project leadership, making him an ideal partner for organizations seeking transformative technology solutions in robotics, AI, and intelligent automation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Scale AI",
        timeframe: "2024 - 2025",
        role: "Coding Project Manager",
        achievements: [
          <>
            Coordinated cross-functional teams to ensure timely delivery of
            high-quality annotated datasets for machine learning applications,
            contributing to some of the industry's most advanced AI models.
          </>,
          <>
            Developed and implemented training programs for new hires and
            freelancers, reducing onboarding time and improving overall team
            productivity.
          </>,
          <>
            Collaborated with engineering and product teams to align project
            goals with business objectives, driving client satisfaction and
            retention.
          </>,
          <>
            Built data analysis tools to monitor project progress and identify
            areas for improvement, leveraging insights to optimize workflows and
            resource allocation.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //  src: "/images/projects/project-01/scale-background.jpg",
          //  alt: "Scale AI image",
          //  width: 16,
          //  height: 9,
          //},
        ],
      },
      {
        company: "SAR Elektronic GmbH",
        timeframe: "2018 - 2023",
        role: "Senior Robotics Engineer",
        achievements: [
          <>
            Designed and deployed custom robotic automation for Volkswagen and
            BMW, ensuring seamless PLC integration and error reduction.
          </>,
          <>
            Developed custom software solutions for robotic control and
            automation
          </>,
          <>
            Regularly collaborated with senior client engineers to align
            solutions with evolving requirements, delivering high-performance
            systems tailored to complex manufacturing demands.
          </>,
          <>
            Optimized robotic workflows through data-driven analysis, enhancing
            efficiency and reducing operational costs through cycle time reduction.
          </>,
        ],
        images: [
          // {
          //   src: "/images/projects/project-01/sar-banner.png",
          //   alt: "SAR Elektronic GmbH image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Faurecia / Plastic Omnium",
        timeframe: "2014 - 2018",
        role: "Plant Process Engineer",
        achievements: [        
          <>
            At Faurecia I studied Synthetic Material Engineering and my role involved managing injection molding systems, start-up processes, and quality control of manufactured components
          </>,
          <>
            At Plastic Omnium I was responsible for overseeing production lines, optimizing manufacturing processes, and ensuring product quality in a high-volume automotive parts facility
          </>,
          <>
            Implemented process improvements that enhanced production efficiency and reduced waste, contributing to cost savings and improved product quality
          </>,
          <>
            Programmed robotic systems to pick and place components, enhancing assembly line efficiency and accuracy
          </>,
        ],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Berufsschule Rothenburg-Dinkelsbühl",
        description: <>Studied manufacturing technology and industrial processes.</>,
      },
      {
        name: "Kuka College Braunschweig",
        description: <>Studied robotics and automation engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Software Development",
        description: (
          <>Full-stack development with JavaScript, React.js, Python, and C/C#. Experienced in building scalable backend systems and data pipelines.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React.js",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: []
      },
      {
        title: "Project Management & Leadership",
        description: (
          <>Team leadership, project planning, execution, and stakeholder communication across cross-functional teams.</>
        ),
        tags: [
          {
            name: "Project Management",
            icon: "project-management",
          },
          {
            name: "Leadership",
            icon: "star",
          },
        ],
        images: []
      },
      {
        title: "Robotics & Automation",
        description: (
          <>Robotics engineering, PLC integration, industrial automation, process optimization, and system commissioning.</>
        ),
        tags: [
          {
            name: "Robotics",
            icon: "settings",
          },
          {
            name: "Automation",
            icon: "zap",
          },
        ],
        images: []
      },
      {
        title: "Data Analysis & AI",
        description: (
          <>Data pipelines, analytics, LLM fine-tuning, QA automation, and AI-driven insights for business intelligence.</>
        ),
        tags: [
          {
            name: "Data Analysis",
            icon: "grid",
          },
          {
            name: "SQL",
            icon: "database",
          },
          {
            name: "AI/ML",
            icon: "cpu",
          },
        ],
        images: []
      },
      {
        title: "Tools & Platforms",
        description: (
          <>Git/GitHub, Supabase, Airtable, OpenAI API, React dashboards, and comprehensive documentation.</>
        ),
        tags: [
          {
            name: "Git/GitHub",
            icon: "github",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
          {
            name: "Airtable",
            icon: "grid",
          },
        ],
        images: []
      },
    ],
  },
};

const projects: Projects = {
  path: "/projects",
  label: "Projects",
  title: "Successful Projects",
  description: `Explore ${person.name}'s most successful projects showcasing expertise in AI, robotics, and automation`,
  // Create new project posts by adding a new .mdx file to app/projects/posts
  // All project posts will be listed on the /projects route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `${person.name}'s Discography`,
  // Create new work/project pages by adding a new .mdx file to app/work/projects
  // All work projects will be listed on the /home and /work routes
};

const certifications: Certificate = {
  path: "/certs",
  label: "Certifications",
  title: `Certifications – ${person.name}`,
  description: `Certifications earned by ${person.name}`,
  
  images: [
    {
      src: "/images/certs/engel_eob_1.jpg",
      alt: "Engel EOB 1",
      orientation: "horizontal",
    },
    {
      src: "/images/certs/engel_era_1.jpg",
      alt: "Engel ERA 1",
      orientation: "horizontal",
    },
    {
      src: "/images/certs/engel_erb_1.jpg",
      alt: "Engel ERB 1",
      orientation: "horizontal",
    },
    {
      src: "/images/certs/kuka_1.jpg",
      alt: "Kuka 1",
      orientation: "horizontal",
    },
    {
      src: "/images/certs/kuka_2.jpg",
      alt: "Kuka 2",
      orientation: "horizontal",
    },
    {
      src: "/images/certs/kuka_3.jpg",
      alt: "Kuka 3",
      orientation: "horizontal",
    },
    {
      src: "/images/certs/kuka_4.jpg",
      alt: "Kuka 4",
      orientation: "horizontal",
    },
    {
      src: "/images/certs/sar_kuka_1.jpg",
      alt: "SAR Kuka 1",
      orientation: "horizontal",
    },
    {
      src: "/images/certs/sar_kuka_2.jpg",
      alt: "SAR Kuka 2",
      orientation: "horizontal",
    },
    {
      src: "/images/certs/sar_kuka_3.jpg",
      alt: "SAR Kuka 3",
      orientation: "horizontal",
    },
    {
      src: "/images/certs/sar_kuka_4.jpg",
      alt: "SAR Kuka 4",
      orientation: "horizontal",
    },
    {
      src: "/images/certs/sar_kuka_5.jpg",
      alt: "SAR Kuka 5",
      orientation: "horizontal",
    },
    {
      src: "/images/certs/sar_kuka_6.jpg",
      alt: "SAR Kuka 6",
      orientation: "horizontal",
    },
  ],
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Feedback Gallery",
  title: `Feedback gallery – ${person.name}`,
  description: `Feedback from projects by ${person.name}`,

  categories: [
    {
      id: "scale-ai",
      title: "Scale AI",
      icon: "brain",
      description: "Feedback from AI/ML project management work",
      images: [
        {
          src: "/images/gallery/recommend_august_ss.png",
          alt: "Scale AI feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback1.png",
          alt: "Scale AI feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback2.png",
          alt: "Scale AI feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback3.png",
          alt: "Scale AI feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback4.png",
          alt: "Scale AI feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback5.png",
          alt: "Scale AI feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback6.png",
          alt: "SAR Elektronic feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback7.png",
          alt: "SAR Elektronic feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback8.png",
          alt: "SAR Elektronic feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback9.png",
          alt: "SAR Elektronic feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback10.png",
          alt: "Faurecia feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback11.png",
          alt: "Faurecia feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback12.png",
          alt: "Plastic Omnium feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback13.png",
          alt: "Project feedback",
          orientation: "auto",
        },
        {
          src: "/images/gallery/feedback14.png",
          alt: "Project feedback",
          orientation: "auto",
        },
      ],
    },
    {
      id: "findat-global",
      title: "Findat Global",
      icon: "person",
      description: "Feedback from colleagues and clients",
      images: [
        {
          src: "/images/findat/findat_fb_1.png",
          alt: "Project feedback",
          orientation: "auto",
        },
        {
          src: "/images/findat/findat_fb_2.png",
          alt: "Project feedback",
          orientation: "auto",
        },
        {
          src: "/images/findat/findat_fb_3.png",
          alt: "Project feedback",
          orientation: "auto",
        },
        {
          src: "/images/findat/findat_fb_4.png",
          alt: "Project feedback",
          orientation: "auto",
        },
        {
          src: "/images/findat/findat_fb_5.png",
          alt: "Project feedback",
          orientation: "auto",
        },        
      ],
    },
    {
      id: "sar-elektronic",
      title: "SAR Elektronic",
      icon: "robot",
      description: "Reference Letter from SAR Elektronic GmbH. projects",
      images: [
        {
          src: "/images/certs/sar_zeugnis_alt_1.jpg",
          alt: "Work Certificate",
          orientation: "auto",
        },
        {
          src: "/images/certs/sar_zeugnis_alt_2.jpg",
          alt: "Work Certificate",
          orientation: "auto",
        },  
      ],
    },
    {
      id: "faurecia",
      title: "Faurecia / Plastic Omnium",
      icon: "factory",
      description: "Reference Letter from Faurecia / Plastic Omnium engineering projects",
      images: [
        {
          src: "/images/certs/po_zeugnis_1.jpg",
          alt: "Work Certificate",
          orientation: "auto",
        }, 
        {
          src: "/images/certs/po_zeugnis_2.jpg",
          alt: "Work Certificate",
          orientation: "auto",
        }, 
      ],
    },
  ],
};

export { person, social, newsletter, home, about, projects, work, certifications, gallery };
