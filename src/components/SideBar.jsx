import {
  Github,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  FileText,
  Moon,
  Sun,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "./Link";
import imgPerfil from "/perfil.jpeg";

export default function ProfileSidebar() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // if (Array.from(document.documentElement.classList).includes("dark")) {
    //   document.documentElement.classList.remove("dark");
    //   document.documentElement.classList.add("light");
    // } else {
    //   document.documentElement.classList.remove("light");
    //   document.documentElement.classList.toggle("dark");
    // }
    document.documentElement.classList.toggle("dark");
  };

  // Check system preference on mount
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="sticky top-10 h-min w-[320px] bg-red-500 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800 transition-colors duration-200">
      {/* Gradient background elements */}
      <div className="absolute w-64 h-64 rounded-full -top-24 -right-24 bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-3xl dark:from-purple-900/20 dark:to-blue-900/20" />
      <div className="absolute w-64 h-64 rounded-full -bottom-32 -left-32 bg-gradient-to-tr from-pink-500/20 to-yellow-500/20 blur-3xl dark:from-pink-900/20 dark:to-yellow-900/20" />

      {/* Header with profile photo */}
      <div className="relative flex flex-col items-center p-8">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />

        <button
          onClick={toggleDarkMode}
          className="absolute z-10 p-2 transition-colors rounded-full shadow-sm right-4 top-4 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} className="text-gray-600" />
          )}
        </button>

        <div className="relative z-10 mb-4 w-28 h-28">
          <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-sm opacity-70 dark:opacity-50" />
          <img
            src={imgPerfil}
            alt="Profile Photo"
            className="relative object-cover rounded-full ring-2 ring-white dark:ring-gray-800"
          />
        </div>

        <h1 className="relative z-10 text-2xl font-bold text-center text-gray-900 dark:text-white">
          Nestor Gomez
        </h1>
        <p className="relative z-10 font-medium text-center text-gray-500 dark:text-gray-400">
          Frontend Developer
        </p>

        {/* Social Media Links */}
        <div className="relative z-10 flex gap-3 mt-4">
          <Link
            href="www.linkedin.com/in/néstor-david-gómez-sanabria-385b8b211"
            className="text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://github.com/nedagosa-cod"
            className="text-gray-500 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
            aria-label="GitHub profile"
          >
            <Github size={20} />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      {/* Contact Information */}
      <div className="relative z-10 p-6 space-y-4 backdrop-blur-sm">
        <h2 className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
          CONTACT INFORMATION
        </h2>

        <div className="flex items-center gap-3 group">
          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all duration-300 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-700 group-hover:from-blue-200 group-hover:to-blue-100 dark:group-hover:from-gray-700 dark:group-hover:to-gray-600">
            <Phone className="text-blue-500 dark:text-blue-400" size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
            <p className="font-medium text-gray-900 dark:text-white">
              +57 3007805666
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 group">
          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all duration-300 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 dark:from-gray-800 dark:to-gray-700 group-hover:from-purple-200 group-hover:to-purple-100 dark:group-hover:from-gray-700 dark:group-hover:to-gray-600">
            <Mail className="text-purple-500 dark:text-purple-400" size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
            <p className="font-medium text-gray-900 dark:text-white">
              nestorcode4004@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 group">
          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all duration-300 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 dark:from-gray-800 dark:to-gray-700 group-hover:from-pink-200 group-hover:to-pink-100 dark:group-hover:from-gray-700 dark:group-hover:to-gray-600">
            <MapPin className="text-pink-500 dark:text-pink-400" size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
            <p className="font-medium text-gray-900 dark:text-white">
              Colombia/Bucaramanga
            </p>
          </div>
        </div>
      </div>

      {/* Download CV Button */}
      <div className="relative z-10 px-6 pb-6">
        <button className="relative w-full mt-10 overflow-hidden group">
          <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 group-hover:scale-105"></div>
          <div className="relative py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-white font-medium">
            <FileText size={18} />
            Download My CV
            <div className="absolute right-0 w-12 h-full transition-opacity duration-300 opacity-0 bg-gradient-to-l from-white/20 to-transparent group-hover:opacity-100"></div>
          </div>
        </button>
      </div>
    </div>
  );
}
