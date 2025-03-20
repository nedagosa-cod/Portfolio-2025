import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="relative p-8">
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-[rgb(var(--dark))] mb-6 inline-block">
          Contact Me
          <div className="w-full h-1 mt-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-[rgb(var(--dark))] mb-4">
              Get In Touch
            </h3>
            <p className="mb-6 text-[rgb(var(--dark))]">
              Feel free to reach out to me for any questions or opportunities.
              I'll try my best to get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-800/50">
                  <Mail
                    className="text-blue-600 dark:text-blue-400"
                    size={18}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="text-[rgb(var(--dark))] font-medium">
                    nestorcode4004@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/50 dark:to-purple-800/50">
                  <Phone
                    className="text-purple-600 dark:text-purple-400"
                    size={18}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Phone
                  </p>
                  <p className="text-[rgb(var(--dark))] font-medium">
                    +57 3007805666
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900/50 dark:to-pink-800/50">
                  <MapPin
                    className="text-pink-600 dark:text-pink-400"
                    size={18}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="text-[rgb(var(--dark))] font-medium">
                    Colombia/Bucaramanga
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 rounded-xl dark:border-gray-700">
            <h3 className="text-xl font-semibold text-[rgb(var(--dark))] mb-4">
              Send Message
            </h3>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium text-[rgb(var(--dark))]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-[rgb(var(--dark))] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-[rgb(var(--dark))]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-[rgb(var(--dark))] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-[rgb(var(--dark))]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-[rgb(var(--dark))] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="relative w-full overflow-hidden rounded-lg group"
              >
                <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 group-hover:scale-105"></div>
                <div className="relative py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-white font-medium">
                  <Send size={18} />
                  Send Message
                  <div className="absolute right-0 w-12 h-full transition-opacity duration-300 opacity-0 bg-gradient-to-l from-white/20 to-transparent group-hover:opacity-100"></div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
