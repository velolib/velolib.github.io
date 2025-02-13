import { SiGithub } from "@icons-pack/react-simple-icons";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-white dark:bg-zinc-950 snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left: Logo/Branding */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                velolib.github.io
              </span>
            </div>

            {/* Center: Copyright */}
            <div className="flex items-center justify-center text-sm text-zinc-500 dark:text-zinc-400">
              <span>© {currentYear} • Built with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>using&nbsp;</span>
              <a
                href="https://astro.build/"
                className="text-primary-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Astro
              </a>
            </div>

            {/* Right: Links */}
            <div className="flex items-center justify-center md:justify-end gap-6">
              <a
                href="https://github.com/yourusername/gallery-app"
                className="text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 transition-colors flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="h-4 w-4" />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
