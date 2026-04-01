import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {
  const email = import.meta.env.VITE_CONTACT_EMAIL;
  const instagram = import.meta.env.VITE_FOOTER_INSTAGRAM;

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-end items-center gap-4">
          <a
            className="text-slate-900 hover:text-[var(--accent-color)] transition-colors"
            href={`mailto:${email ?? "fparchviz@gmail.com"}`}
          >
            <IoMailOutline size={20} />
          </a>
          <a
            className="text-slate-900 hover:text-[var(--accent-color)] transition-colors"
            href={instagram ?? "https://www.instagram.com/fparchviz/"}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
