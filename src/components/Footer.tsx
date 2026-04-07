import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { getEmailHref, getInstagramHref } from "./contact";

export default function Footer() {
  const emailHref = getEmailHref();
  const instagramHref = getInstagramHref();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            {`© ${currentYear} FPArchviz. Todos los derechos reservados.`}
          </p>
          <div className="flex items-center gap-4">
            <a
              className="text-slate-900 transition-colors duration-200 hover:text-[var(--accent-color)]"
              href={emailHref}
            >
              <IoMailOutline size={20} />
            </a>
            <a
              className="text-slate-900 transition-colors duration-200 hover:text-[var(--accent-color)]"
              href={instagramHref}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
