import { User, FileText, Briefcase, Code, Mail } from "lucide-react";
import { useState } from "react";

export default function NavigationSidebar({ viewMain }) {
  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="animate__animated animate__fadeIn sticky top-10 h-min w-[200px] bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800 transition-colors duration-200">
      {/* Gradient background elements */}
      <div className="absolute w-64 h-64 rounded-full -top-24 -right-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl dark:from-purple-900/20 dark:to-blue-900/20" />
      <div className="absolute w-64 h-64 rounded-full -bottom-32 -left-32 bg-gradient-to-tr from-pink-500/10 to-yellow-500/10 blur-3xl dark:from-pink-900/10 dark:to-yellow-900/10" />

      {/* Navigation Header */}
      <div className="relative p-6">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />

        <div className="relative z-10">
          <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white">
            Navigation
          </h2>
          <div className="w-24 h-1 mx-auto mt-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      {/* Navigation Items */}
      <div className="relative z-10 flex-1 p-4 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  viewMain(item.id);
                  setActiveSection(item.id);
                }}
                className={`
                  w-full relative group overflow-hidden rounded-lg flex items-center gap-3 p-3 transition-all duration-300
                  ${
                    isActive
                      ? "text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                `}
              >
                {/* Active background gradient */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500"></div>
                )}

                {/* Hover effect for inactive items */}
                {!isActive && (
                  <div className="absolute inset-0 transition-colors duration-300 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 dark:group-hover:from-blue-600/10 dark:group-hover:to-purple-600/10"></div>
                )}

                {/* Icon container */}
                <div
                  className={`
                  relative z-10 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300
                  ${
                    isActive
                      ? "bg-white/20"
                      : "bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700"
                  }
                `}
                >
                  <Icon
                    size={18}
                    className={
                      isActive
                        ? "text-white"
                        : "text-blue-600 dark:text-blue-400"
                    }
                  />
                </div>

                {/* Label */}
                <span className="relative z-10 font-medium">{item.label}</span>

                {/* Shine effect for active items */}
                {isActive && (
                  <div className="absolute right-0 w-12 h-full transition-opacity duration-300 opacity-0 bg-gradient-to-l from-white/20 to-transparent group-hover:opacity-100"></div>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
