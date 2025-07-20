import { RevealOnScroll } from "../RevealOnScroll";


export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
    <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Mental Health Self-Assessment</h3>
              <p className="text-gray-400 mb-4">
                AI-powered tool for mental health evaluation using PHQ-9 and GAD-7 with personalized recommendations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Django", "RandomForest", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Vikaslh/mental-health-app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">FAQ Generator using AI</h3>
              <p className="text-gray-400 mb-4">
                Automatically generates question-answer pairs from uploaded documents using LLMs and LangChain.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Django-Ninja", "LangChain", "Gemini API", "Tailwind"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Vikaslh/faq-generator"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Accessibility Hub</h3>
              <p className="text-gray-400 mb-4">
                Web app with speech-to-text, object detection, and gesture control to aid users with disabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TensorFlow.js", "Tailwind", "Web Speech API"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Vikaslh/accessibility-hub"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Spotify Clone</h3>
              <p className="text-gray-400 mb-4">
                A full-featured music streaming clone with playlists, playback controls, and user authentication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Tailwind", "Supabase", "Stripe"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Vikaslh/spotify-clone"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 5: Converso AI */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Converso AI</h3>
              <p className="text-gray-400 mb-4">
                An AI-powered learning companion with real-time voice lessons, user authentication, and subscriptions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Vapi", "Clerk", "Supabase", "Tailwind"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#" // Replace with your actual project link
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 6: Leetcode Helper */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Leetcode Helper</h3>
              <p className="text-gray-400 mb-4">
                AI-powered Chrome extension to help people solve Leetcode problems efficiently.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Openai", "Typescript", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Vikaslh/leetcode-helper"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            </div>

            
          </div>
          

        </div>
        </RevealOnScroll>
    </section>
  );
};
