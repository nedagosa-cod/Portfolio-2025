import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function ResumeSection() {
  return (
    <div className="relative p-8">
      <div className="absolute inset-0 z-0 " />

      <div className="relative z-10 ">
        <h2 className="inline-block mb-6 text-2xl font-bold text-[rgb(var(--dark))] ">
          Resume
          <div className="w-full h-1 mt-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </h2>

        {/* Work Experience */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-800/50">
              <Briefcase
                className="text-blue-600 dark:text-blue-400"
                size={20}
              />
            </div>
            <h3 className="text-xl font-semibold text-[rgb(var(--dark))]">
              Work Experience
            </h3>
          </div>

          <div className="pl-5 space-y-6 border-l-2 border-gray-200 dark:border-gray-700">
            {/* Job 1 */}
            <div className="relative">
              <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="p-5 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-[rgb(var(--gr-from))] to-[rgb(var(--gr-to))]">
                <div className="flex flex-wrap justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-[rgb(var(--dark))]">
                    Freelance Frontend Developer
                  </h4>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    2020 - 2021
                  </span>
                </div>
                <h5 className="mb-3 text-purple-600 dark:text-purple-400">
                  Freelance
                </h5>
                <p className="text-[rgb(var(--dark))]">
                  I have created online stores with WordPress and Shopify, as
                  well as landing pages for product catalogs and digital
                  invitations.
                </p>
              </div>
            </div>

            {/* Job 2 */}
            <div className="relative">
              <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="p-5 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-[rgb(var(--gr-from))] to-[rgb(var(--gr-to))]">
                <div className="flex flex-wrap justify-between gap-2 mb-2">
                  <h4 className="font-semibold ttext-[rgb(var(--dark))]">
                    Junior Frontend Developer
                  </h4>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    2020 - 2023
                  </span>
                </div>
                <h5 className="mb-3 text-purple-600 dark:text-purple-400">
                  Atento Colombia.
                </h5>
                <p className="text-[rgb(var(--dark))]">
                  Developed and maintained client websites and web applications,
                  focusing on performance optimization and cross-browser
                  compatibility.
                </p>
              </div>
            </div>

            {/* Job 3 */}
            <div className="relative">
              <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="p-5  border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-[rgb(var(--gr-from))] to-[rgb(var(--gr-to))]">
                <div className="flex flex-wrap justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-[rgb(var(--dark))]">
                    Lead Frontend Developer
                  </h4>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    2023 - Now
                  </span>
                </div>
                <h5 className="mb-3 text-purple-600 dark:text-purple-400">
                  Atento Colombia.
                </h5>
                <p className="text-[rgb(var(--dark))]">
                  Development team leader, managing various types of web
                  software, simulators, and the metaverse, attracting clients,
                  and providing implementation and improvement proposals for
                  applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/50 dark:to-purple-800/50">
              <GraduationCap
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
            </div>
            <h3 className="text-xl font-semibold text-[rgb(var(--dark))]">
              Education
            </h3>
          </div>

          <div className="pl-5 space-y-6 border-l-2 border-gray-200 dark:border-gray-700">
            {/* Education 1 */}
            <div className="relative">
              <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <div className="p-5  border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-[rgb(var(--gr-from))] to-[rgb(var(--gr-to))]">
                <div className="flex flex-wrap justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-[rgb(var(--dark))]">
                    Systems Technician.
                  </h4>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    2012 - 2013
                  </span>
                </div>
                <h5 className="mb-3 text-blue-600 dark:text-blue-400">SENA</h5>
                <p className="text-[rgb(var(--dark))]">
                  I studied a technical program in systems after finishing high
                  school, focusing on computer repair.
                </p>
              </div>
            </div>

            {/* Education 2 */}
            <div className="relative">
              <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <div className="p-5  border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-[rgb(var(--gr-from))] to-[rgb(var(--gr-to))]">
                <div className="flex flex-wrap justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-[rgb(var(--dark))]">
                    Business Administration.
                  </h4>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    2018 - 2025
                  </span>
                </div>
                <h5 className="mb-3 text-blue-600 dark:text-blue-400">
                  Areandina
                </h5>
                <p className="text-[rgb(var(--dark))]">
                  I studied Business Management Technology at SENA and later
                  validated my studies to complete a Bachelor's degree in
                  Business Administration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900/50 dark:to-pink-800/50">
              <Award className="text-pink-600 dark:text-pink-400" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-[rgb(var(--dark))]">
              Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-[rgb(var(--gr-from))] to-[rgb(var(--gr-to))]">
              <h4 className="font-semibold text-[rgb(var(--dark))]">
                Frontend Developer
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Platzi, 2022
              </p>
            </div>

            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-[rgb(var(--gr-from))] to-[rgb(var(--gr-to))]">
              <h4 className="font-semibold text-[rgb(var(--dark))]">
                Definitive Javascript
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Platzi, 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
