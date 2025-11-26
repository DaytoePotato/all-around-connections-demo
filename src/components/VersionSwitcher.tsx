"use client";

import { usePathname } from "next/navigation";

export default function VersionSwitcher() {
  const pathname = usePathname();
  const isProfessional = pathname === "/" || pathname.startsWith("/professional");
  const isTech = pathname.startsWith("/tech");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center font-bold">
              AC
            </div>
            <span className="font-semibold text-sm">All Around Connections - Demo Versions</span>
          </div>

          <div className="flex gap-2">
            <a
              href="/professional"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isProfessional
                  ? "bg-white text-blue-600 shadow-lg"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            >
              Professional Version
            </a>
            <a
              href="/tech"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isTech
                  ? "bg-white text-purple-600 shadow-lg"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            >
              Tech Version
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
