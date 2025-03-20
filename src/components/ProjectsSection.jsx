import { ExternalLink, Github, Code, Users, Calendar } from "lucide-react";

import { useState } from "react";
import { ImageGallery } from "./ui/image-gallery";
import { Modal } from "./ui/modal";

// Datos ampliados de los proyectos
const projects = [
  {
    id: 1,
    title: "Multivendor Store Platform",
    description:
      "A fully responsive e-commerce platform built with Next.js, Tailwind CSS and Strapi CMS",
    shortDescription:
      "A fully responsive e-commerce platform built with Next.js, Tailwind CSS and Strapi CMS",
    image: "/lc_a.png",
    images: [
      "/lc_a.png",
      "/lc_b.png",
      "/lc_c.png",
      "/lc_d.png",
    ],
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Strapi",
      "PostgreSQL",
      "Shadcn UI",
      "MercadoPago",
      "API Rest",
    ],
    liveLink: "#",
    githubLink: "#",
    fullDescription: `
      This multi-vendor online store is an advanced e-commerce platform that allows multiple sellers to manage and sell their products efficiently. Built with Next.js for optimal performance using Server-Side Rendering (SSR), the application ensures a smooth and fast user experience. 

      The system includes secure user authentication, advanced product filtering, payment gateway integration, and multi-language support to reach a global audience.
      
      On the backend, Strapi is used as a CMS, along with PostgreSQL as the database, ensuring a scalable and flexible structure. Additionally, custom APIs were developed and implemented for efficient integration between the different system modules.
    `,
    timeline: "4 months",
    team: "Solo project",
    role: "Full-stack developer",
  },
  {
    id: 2,
    title: "Premise Learning Web System",
    description:
      "A responsive React.js tool where users engage in simulations, explore an immersive store, and validate their knowledge.",
    shortDescription:
      "A responsive React.js tool where users engage in simulations, explore an immersive store, and validate their knowledge.",
    image: "/premise_d.png",
    images: [
      "/premise_a.png",
      "/premise_b.png",
      "/premise_c.png",
      "/premise_d.png",
    ],
    tags: ["React", "Tailwind CSS", "Pannellum", "React data tables"],
    liveLink: "https://premise-store-360.onrender.com/",
    githubLink: "https://github.com/nedagosa-cod/premise-store",
    fullDescription: `
      This web application is a practice and learning tool designed to guide users through a process flow, completing each stage until they receive a final score.

      The user participates in a simulated conversation, which must be completed correctly to gain access to a store with an immersive panoramic view. Inside the store, the user can move freely and answer various questions related to the learning topics.

      Each response is evaluated, and at the end of the experience, the user receives a score based on their performance in the validated topics within the immersive store.

      Key Features:

      - Interactive learning flow with real-time feedback
      - Simulated conversation as an access requirement
      - Immersive environment with free movement inside the store
      - Evaluation system based on responses within the virtual store
      - This project offers an innovative educational experience, combining simulation, immersion, and gamification to enhance the user’s learning process.
    `,
    timeline: "3 months",
    team: "2 developers",
    role: "Frontend developer",
  },
  {
    id: 3,
    title: "Web Training",
    description: "Continuous learning platform and process automation.",
    shortDescription: "Continuous learning platform and process automation.",
    image: "/atento_a.png",
    images: [
      "/atento_a.png",
      "/atento_b.png",
      "/atento_c.png",
      "/atento_d.png",
    ],
    tags: ["React", "Webpack", "Tailwind CSS", "React data tables", "API Rest"],
    liveLink: "#",
    githubLink: "https://github.com/nedagosa-cod/wt-plantilla-react",
    fullDescription: `
      A robust web platform designed to optimize workflows and processes for sales and customer service advisors. With three years of continuous development, it integrates tools that reduce management time and minimize quality errors, enhancing user efficiency.

      Key Features:

      Specialized calculators tailored to advisors' needs
      Smart forms with auto-completion and conditional validations
      Typification trees and flowcharts to guide processes
      Checklists and product/service comparison tools
      Additional features to support decision-making and streamline advisor tasks
      This project is continuously evolving to meet industry needs, providing an increasingly efficient and comprehensive solution.
    `,
    timeline: "1 Year",
    team: "3 Developers",
    role: "Designer & Developer",
  },
  {
    id: 4,
    title: "Digital Invitation",
    description:
      "An elegant digital wedding invitation with immersive animations and a sophisticated UX design.",
    shortDescription:
      "An elegant digital wedding invitation with immersive animations and a sophisticated UX design.",
    image: "/wedding_a.png",
    images: [
      "/wedding_a.png",
      "/wedding_b.png",
      "/wedding_c.png",
      "/wedding_d.png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Gsap.js", "Aos.js"],
    liveLink: "https://nedagosa-cod.github.io/liz-card-invitation/",
    githubLink: "https://github.com/nedagosa-cod/liz-card-invitation",
    fullDescription: `
      An elegant digital wedding invitation with immersive animations and a sophisticated UX design. Features include a photo gallery, an interactive 3D animation of the wedding rings, a real-time countdown timer for the event, and a RSVP form for guest attendance confirmation.
    `,
    timeline: "3 weeks",
    team: "Solo project",
    role: "Designer & Developer",
  },
  {
    id: 5,
    title: "Personal Kanban",
    description:
      "Kanban Board, storing tasks and information directly in the browser to prevent data loss.",
    shortDescription:
      "Kanban Board, storing tasks and information directly in the browser to prevent data loss.",
    image: "/kanban_a.png",
    images: [
      "/kanban_b.png",
      "/kanban_b.png",
      "/kanban_b.png",
      "/kanban_b.png",
    ],
    tags: ["React", "React Quill", "Antd", "SASS"],
    liveLink: "https://mykanban-zt4o.onrender.com/kanban",
    githubLink: "https://github.com/nedagosa-cod/Kanban-task-job",
    fullDescription: `
      A React.js web application that provides a personal Kanban Board, storing tasks and information directly in the browser to prevent data loss. It offers the same functionalities as other Kanban tools but in a fully private way, without requiring registration or cloud storage.
    `,
    timeline: "1 month",
    team: "Solo project",
    role: "Frontend developer",
  },
  {
    id: 6,
    title: "Movie API",
    description:
      " A React.js web page that consumes a movie API, displaying content with pagination, detailed descriptions.",
    shortDescription:
      " A React.js web page that consumes a movie API, displaying content with pagination, detailed descriptions.",
    image: "/movie_a.png",
    images: ["/movie_a.png", "/movie_b.png", "/movie_c.png", "/movie_d.png"],
    tags: ["HTML", "CSS", "JavaScript", "API"],
    liveLink: "https://nedagosa-cod.github.io/movie-vanilla/",
    githubLink: "https://github.com/nedagosa-cod/movie-vanilla",
    fullDescription: `
      A React.js web page that consumes a movie API, displaying content with pagination, detailed descriptions, and a list of YouTube trailers. It provides a smooth and intuitive experience for exploring and discovering movies.
    `,
    timeline: "1 month",
    team: "Solo project",
    role: "Frontend developer",
  },
  {
    id: 7,
    title: "XLS Map To JSON",
    description:
      "A SaaS application that allows users to upload Excel files with matrices and convert them into objects with a customizable format.",
    shortDescription:
      "A SaaS application that allows users to upload Excel files with matrices and convert them into objects with a customizable format.",
    image: "/xlsmap_a.png",
    images: [
      "/xlsmap_a.png",
      "/xlsmap_b.png",
      "/xlsmap_c.png",
      "/xlsmap_a.png",
    ],
    tags: ["React", "Codemirror", "React Excel File"],
    liveLink: "https://xlsmaptojson.onrender.com",
    githubLink: "https://github.com/nedagosa-cod/xlsMapToJson",
    fullDescription: `
      A SaaS application that allows users to upload Excel files with matrices and convert them into objects with a customizable format. It provides fast and accurate conversion, optimizing data management and structuring.
    `,
    timeline: "1 month",
    team: "Solo project",
    role: "Frontend developer",
  },
  {
    id: 8,
    title: "Aretaz",
    description:
      "A digital catalog website for a fast-food company specializing in stuffed arepas and fried foods.",
    shortDescription:
      "A digital catalog website for a fast-food company specializing in stuffed arepas and fried foods.",
    image: "/aretaz_a.png",
    images: [
      "/aretaz_a.png",
      "/aretaz_b.png",
      "/aretaz_c.png",
      "/aretaz_a.png",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://aretaz.onrender.com/",
    githubLink: "https://github.com/nedagosa-cod/landing-aretaz",
    fullDescription: `
      A digital catalog website for a fast-food company specializing in stuffed arepas and fried foods. It showcases products with high-quality images, detailed descriptions, and an intuitive browsing experience for customers.
    `,
    timeline: "2 Weeks",
    team: "Solo project",
    role: "Frontend developer",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="relative p-8">
        <div className="relative z-10">
          <h2 className="inline-block mb-6 text-2xl font-bold text-[rgb(var(--dark))]">
            Projects
            <div className="w-full h-1 mt-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden transition-all duration-300  border  shadow-sm cursor-pointer group  rounded-xl bg-gradient-to-br from-[rgb(var(--gr-from))] to-[rgb(var(--gr-to))] hover:shadow-md"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 z-10 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-blue-600/40 to-purple-600/40 group-hover:opacity-70"></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <span className="px-4 py-2 font-medium text-gray-900 rounded-full bg-white/90 dark:bg-gray-900/90 dark:text-white">
                      View Details
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-[rgb(var(--dark))]">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-[rgb(var(--dark))]">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-8">
            {/* Image Gallery */}
            <ImageGallery
              images={selectedProject.images}
              alt={selectedProject.title}
            />

            {/* Project Info */}
            <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full dark:bg-blue-900/30">
                  <Calendar
                    className="text-blue-600 dark:text-blue-400"
                    size={16}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Timeline
                  </p>
                  <p className="font-medium text-[rgb(var(--dark))]">
                    {selectedProject.timeline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full dark:bg-purple-900/30">
                  <Users
                    className="text-purple-600 dark:text-purple-400"
                    size={16}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Team
                  </p>
                  <p className="font-medium text-[rgb(var(--dark))]">
                    {selectedProject.team}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full dark:bg-pink-900/30">
                  <Code
                    className="text-pink-600 dark:text-pink-400"
                    size={16}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    My Role
                  </p>
                  <p className="font-medium text-[rgb(var(--dark))]">
                    {selectedProject.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-[rgb(var(--dark))]">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-blue-800 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-[rgb(var(--dark))]">
                About This Project
              </h3>
              <div className="space-y-4 text-gray-700 whitespace-pre-line dark:text-gray-300">
                {selectedProject.fullDescription}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href={selectedProject.liveLink}
                className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a
                href={selectedProject.githubLink}
                className="flex items-center gap-2 px-4 py-2 text-gray-900 transition-colors bg-gray-200 rounded-lg dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                Source Code
              </a>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
