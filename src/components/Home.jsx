import { Code, Palette, Globe, Camera } from "lucide-react";
const Home = () => {
  return (
    <>
      {/* About Me Section */}
      <div className="relative p-8">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[rgb(var(--gr-from))] to-[rgb(var(--gr-to))] " />

        <div className="relative z-10">
          <h2 className="inline-block mb-4 text-2xl font-bold text-[rgb(var(--dark))]">
            About Me
            <div className="w-full h-1 mt-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </h2>

          <div className="space-y-4 [rgb(var(--dark))]">
            <p>
              I started as a developer in early 2020, where I discovered a
              passion that continues to this day. I am constantly learning and
              improving my skills every day. I work as a software lead at the
              company that gave me the opportunity to start in development,
              where I had the chance to create the company's training web
              application.
            </p>
            <p>
              I currently develop software as a freelancer and own a gaming
              server that hosts up to 800 players who play and make purchases in
              my online store. I am currently working on integrating artificial
              intelligence to add more dynamism to the game system.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      {/* Skills Section */}
      <div className="relative z-10 p-8 ">
        <h2 className="inline-block mb-6 text-2xl font-bold text-[rgb(var(--dark))]">
          Skills
          <div className="w-full h-1 mt-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Web Development Skill */}
          <div className="relative overflow-hidden transition-all duration-300 border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-md">
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-600/5 to-blue-600/10 dark:from-blue-600/10 dark:to-blue-600/20 group-hover:opacity-100"></div>
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-all duration-300 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-800/50 group-hover:from-blue-200 group-hover:to-blue-100 dark:group-hover:from-blue-800/50 dark:group-hover:to-blue-700/50">
                  <Code
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[rgb(var(dark))]">
                  Web Development
                </h3>
              </div>
              <p className="text-[rgb(var(dark))]">
                4 years as a front-end software developer (React, Next.js,
                MySQL, Tailwind).
              </p>
            </div>
          </div>

          {/* Design Skill */}
          <div className="relative overflow-hidden transition-all duration-300 border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-md">
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-600/5 to-purple-600/10 dark:from-purple-600/10 dark:to-purple-600/20 group-hover:opacity-100"></div>
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-all duration-300 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/50 dark:to-purple-800/50 group-hover:from-purple-200 group-hover:to-purple-100 dark:group-hover:from-purple-800/50 dark:group-hover:to-purple-700/50">
                  <Palette
                    className="text-purple-600 dark:text-purple-400"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[rgb(var(dark))]">
                  Design
                </h3>
              </div>
              <p className="text-[rgb(var(dark))]">
                4 years of study as a graphic designer with extensive knowledge
                of the Adobe Suite.
              </p>
            </div>
          </div>

          {/* English Skill */}
          <div className="relative overflow-hidden transition-all duration-300 border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-md">
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-600/5 to-green-600/10 dark:from-green-600/10 dark:to-green-600/20 group-hover:opacity-100"></div>
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-all duration-300 rounded-full bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/50 dark:to-green-800/50 group-hover:from-green-200 group-hover:to-green-100 dark:group-hover:from-green-800/50 dark:group-hover:to-green-700/50">
                  <Globe
                    className="text-green-600 dark:text-green-400"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[rgb(var(dark))]">
                  English
                </h3>
              </div>
              <p className="text-[rgb(var(dark))]">
                I have B1 level in English
              </p>
            </div>
          </div>

          {/* Photography Skill */}
          <div className="relative overflow-hidden transition-all duration-300 border border-gray-200 rounded-lg group dark:border-gray-700 hover:shadow-md">
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-pink-600/5 to-pink-600/10 dark:from-pink-600/10 dark:to-pink-600/20 group-hover:opacity-100"></div>
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-all duration-300 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900/50 dark:to-pink-800/50 group-hover:from-pink-200 group-hover:to-pink-100 dark:group-hover:from-pink-800/50 dark:group-hover:to-pink-700/50">
                  <Camera
                    className="text-pink-600 dark:text-pink-400"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[rgb(var(dark))]">
                  Photography
                </h3>
              </div>
              <p className="text-[rgb(var(dark))]">
                Photography is one of my favorite hobbies
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
