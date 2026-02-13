export function Footer() {
  return (
    <footer className="mt-auto py-8 px-8 border-t border-gray-100/50 dark:border-white/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-semibold text-gray-400">
          &copy; {new Date().getFullYear()} Qaos. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs font-bold text-gray-400 hover:text-navigator transition-colors"
          >
            Documentation
          </a>
          <a
            href="#"
            className="text-xs font-bold text-gray-400 hover:text-navigator transition-colors"
          >
            Support
          </a>
          <a
            href="#"
            className="text-xs font-bold text-gray-400 hover:text-navigator transition-colors"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
