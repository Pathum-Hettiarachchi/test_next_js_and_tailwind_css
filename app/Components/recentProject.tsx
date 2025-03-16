
import Image from "next/image";

const projects = [
  {
    title: "Podcast - Podcast Mobile App Solution",
    description: "A modern podcast app UI/UX design solution.",
    image: "/podcast-app.png", // Replace with actual image path
    tags: ["UI/UX Design", "App Design", "Wireframe"],
    link: "#",
  },
  // Add more projects here
];

export default function LatestProjects() {
  return (
    <div>
    <section className="bg-purple-700 text-white py-16 px-6 rounded-2xl my-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-gray-300">My</span> <span className="text-lime-400">Latest Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-purple-800 p-6 rounded-xl shadow-lg">
              <Image src={project.image} alt={project.title} width={500} height={300} className="rounded-lg" />
              <div className="mt-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-lime-500 text-black text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <a href={project.link} className="inline-block bg-lime-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-lime-600">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="bg-purple-700 text-white py-16 px-6 rounded-2xl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-gray-300">My</span> <span className="text-lime-400">Latest Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-purple-800 p-6 rounded-xl shadow-lg">
              <Image src={project.image} alt={project.title} width={500} height={300} className="rounded-lg" />
              <div className="mt-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-lime-500 text-black text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <a href={project.link} className="inline-block bg-lime-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-lime-600">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    
  );
}
