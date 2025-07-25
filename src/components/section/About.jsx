import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "TailwindCSS",
    "SQL",
    "Node.js", "Python", "AWS", "Java Script", "Django"
  ];

  const certification = ["NPTEL c programming","NPTEL c++ problem solving","Artificial Intelligence Fundamentals (IBM)","python programming(udemy)"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {certification.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B tech in Artificial Intelligence & Data Science   </strong> - Reva University
                  (2022-2026)
                </li>
                <li>
                <strong> Class 12    </strong> - New horizon pu college (2020-2022)
                </li>
                
                <li>
                <strong> Class 10    </strong> - Jss public school (2010-2020)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Experience  </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    DSU DevHack 2024
                  </h4>
                  <p>
                  Participated in DSU DevHack 2024,
                    creating a blockchain solution for
                    detecting counterfeit medicines
                    through decentralized verification.
                  </p>
                        <br></br>
                  <h4>
                  SIT Hackcult(2024)
                  </h4>

                  <p>Participated in a 24-hour national-level
hackathon,developing a secure
communication system using custom
encryption and decryption techniques.
Gained hands-on experience in
cryptographic principles, secure
coding practices, and collaborative
problem-solving under pressure.</p>


                </div>

                
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
    </section>
  );
};