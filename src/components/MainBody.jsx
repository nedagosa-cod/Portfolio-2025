import Home from "./Home";

export default function MainBody({ children }) {
  return (
    <div className="relative flex-1 max-w-3xl mb-10 overflow-hidden transition-colors duration-200 bg-white border border-gray-100 shadow-lg animate__animated animate__fadeIn min-h-dvh dark:bg-gray-900 rounded-xl dark:border-gray-800">
      {/* Gradient background elements */}
      <div className="absolute w-64 h-64 rounded-full -top-24 -right-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl dark:from-blue-900/20 dark:to-purple-900/20" />
      <div className="absolute w-64 h-64 rounded-full -bottom-32 -left-32 bg-gradient-to-tr from-pink-500/20 to-yellow-500/20 blur-3xl dark:from-pink-900/20 dark:to-yellow-900/20" />

      {children}
    </div>
  );
}
