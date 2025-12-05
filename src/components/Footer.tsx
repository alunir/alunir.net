import { CURRENT_YEAR, CONTACT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-[family-name:var(--font-orbitron)] text-xl font-bold gradient-text">
          alunir
        </div>
        <div className="text-gray-500 text-sm">
          &copy; {CURRENT_YEAR} alunir. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-gray-400 hover:text-neon-cyan transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
