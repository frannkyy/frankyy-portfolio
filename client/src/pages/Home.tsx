import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

/**
 * Franklin Ogot Portfolio - Home Page
 * Design: Minimalist Professional Tech
 * Color Palette: Navy (#0F172A), White (#FFFFFF), Blue Accent (#2563EB), Gray Text (#475569)
 * Typography: Poppins (headings), Inter (body), JetBrains Mono (code)
 * Light Theme with Dark Text for Excellent Contrast
 */

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Unbridled Eve Landing Page",
      description: "Modern WordPress landing page built with Elementor Pro, featuring responsive design and high-converting layout.",
      image: "https://i.ibb.co/PZb93L0w/chrome-YZBky-Rkf-Sw.jpg",
      tags: ["WordPress", "Elementor Pro", "Responsive Design"],
      link: "https://www.behance.net/gallery/233468245/Unbridled-Eve-Landing-Page-WordPress-Elementor-Pro",
      behanceLink: true,
    },
    {
      id: 2,
      title: "Churchill Mae Landing Page",
      description: "E-commerce landing page with WooCommerce integration, optimized for product showcase and conversions.",
      image: "https://i.ibb.co/cXkFd71P/chrome-db-Pb4ij5a9.png",
      tags: ["WordPress", "WooCommerce", "E-commerce"],
      link: "https://www.behance.net/gallery/233467861/Churchill-Mae-Landing-Page-WordPress-WooCommerce",
      behanceLink: true,
    },
    {
      id: 3,
      title: "New Day Pharmaceuticals",
      description: "Professional pharmaceutical website with Elementor Pro, featuring clean design and effective information architecture.",
      image: "https://i.ibb.co/TD7BDFsS/chrome-k-Pn2-DEfn-DS.png",
      tags: ["WordPress", "Elementor Pro", "Web Design"],
      link: "https://www.behance.net/gallery/233472897/New-Day-Pharmaceuticals-WordPress-Elementor-Pro",
      behanceLink: true,
    },
  ];

  const skills = [
    { category: "eCommerce", items: ["Nifty AI", "eBay", "Poshmark", "Depop", "WooCommerce"] },
    { category: "Web Development", items: ["WordPress", "Elementor", "HTML", "CSS", "Responsive Design"] },
    { category: "Automation", items: ["Python", "Web Scraping", "Data Processing", "Excel"] },
    { category: "Design", items: ["Canva", "Figma", "Adobe Photoshop", "Illustrator"] },
    { category: "Tools", items: ["ChatGPT", "DeepSeek", "Mailchimp", "Microsoft 365"] },
  ];

  const experience = [
    {
      role: "IT Specialist / Web Designer",
      company: "Sheltowee Network, LLC",
      period: "Aug 2024 - Present",
      responsibilities: [
        "Manage WordPress websites and build landing pages with Elementor",
        "Upload, edit, and optimize products in WooCommerce",
        "List and distribute products across eBay, Poshmark, and Depop using Nifty AI",
        "Built a Python scraping tool to extract product data and generate bulk uploads",
        "Design marketing materials, email campaigns, and visual assets",
      ],
    },
    {
      role: "Web Developer / Support Engineer / Social Media Manager",
      company: "Vera Equinox Technologies, Inc.",
      period: "July 2023 - Aug 2024",
      responsibilities: [
        "Developed and maintained websites for training and business platforms",
        "Provided technical support (remote & onsite) and hardware troubleshooting",
        "Managed social media content and ran Facebook Ads campaigns",
        "Created marketing graphics and promotional material",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold font-heading text-[#0F172A]">Franklin Ogot</div>
          <div className="flex gap-6">
            <a href="#projects" className="text-sm text-[#475569] hover:text-accent transition-colors font-medium">
              Projects
            </a>
            <a href="#about" className="text-sm text-[#475569] hover:text-accent transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-sm text-[#475569] hover:text-accent transition-colors font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="https://i.ibb.co/4ZXw0sL3/unnamed.png"
                alt="Franklin Ogot"
                className="w-full h-full rounded-lg object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-lg border-2 border-accent/20"></div>
            </div>
          </div>

          {/* Right: Introduction */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold font-heading mb-4 text-[#0F172A]">
                Franklin Ogot
              </h1>
              <p className="text-xl text-[#2563EB] font-medium">Web Designer & IT Specialist</p>
            </div>

            <p className="text-lg text-[#475569] leading-relaxed">
              eCommerce & Web Specialist with hands-on experience in WordPress, WooCommerce, and AI-powered product listing workflows. I streamline operations using automation tools and create high-converting web and digital assets.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-accent hover:bg-blue-600 text-white">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                </a>
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/profile-thirdparty-redirect/AgEb6aRzYfpXqwAAAZjtQ1Ox-Tdxll3oF3t5c60MVfemADTePO91QxR86NhK3EZSV4yguFQp_jOvriC56TK5K4JxcQONjtljFMDLeAuzJ7bpnNkwvwzR91cdLOktmJ7G"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card text-[#0F172A] hover:bg-accent hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.behance.net/franklinogot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card text-[#0F172A] hover:bg-accent hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="mailto:franklinogot11@gmail.com"
                className="p-3 rounded-lg bg-card text-[#0F172A] hover:bg-accent hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-card text-[#0F172A] py-20 md:py-32">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-[#0F172A]">Featured Projects</h2>
            <p className="text-lg text-[#475569]">
              A selection of my recent web design and development work
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-cols-2 md:[&>:first-child]:order-2" : ""
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold font-heading text-[#0F172A]">{project.title}</h3>
                  <p className="text-lg text-[#475569]">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                    >
                      View on Behance
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-[#0F172A]">Skills & Expertise</h2>
            <p className="text-lg text-[#475569]">
              A comprehensive set of tools and technologies I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="p-6 rounded-lg bg-card text-[#0F172A] border border-border hover:border-accent transition-colors">
                <h3 className="text-xl font-bold font-heading mb-4 text-[#2563EB]">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#F8FAFC] text-[#0F172A] text-sm rounded-full border border-[#E2E8F0]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="bg-card text-[#0F172A] py-20 md:py-32">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-[#0F172A]">Professional Experience</h2>
            <p className="text-lg text-[#475569]">
              My journey in web development and digital design
            </p>
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-accent pl-6 py-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-bold font-heading text-[#0F172A]">{exp.role}</h3>
                  <span className="text-sm text-[#475569]">{exp.period}</span>
                </div>
                <p className="text-[#2563EB] font-medium mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-3 text-[#475569]">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#0F172A]">Let's Work Together</h2>
          <p className="text-lg text-[#475569] mb-8">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-blue-600 text-white text-lg px-8 py-6">
              <a href="mailto:franklinogot11@gmail.com" className="flex items-center gap-2">
                <Mail size={20} />
                Send Email
              </a>
            </Button>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 text-lg px-8 py-6">
              <a href="https://www.behance.net/franklinogot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink size={20} />
                View Behance
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card text-[#0F172A] py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#475569]">
            © 2026 Franklin Ogot. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://www.behance.net/franklinogot" target="_blank" rel="noopener noreferrer" className="text-sm text-[#475569] hover:text-accent transition-colors">
              Behance
            </a>
            <a href="https://www.linkedin.com/profile-thirdparty-redirect/AgEb6aRzYfpXqwAAAZjtQ1Ox-Tdxll3oF3t5c60MVfemADTePO91QxR86NhK3EZSV4yguFQp_jOvriC56TK5K4JxcQONjtljFMDLeAuzJ7bpnNkwvwzR91cdLOktmJ7G" target="_blank" rel="noopener noreferrer" className="text-sm text-[#475569] hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="mailto:franklinogot11@gmail.com" className="text-sm text-[#475569] hover:text-accent transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
