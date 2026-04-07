import { useState, type MouseEvent } from "react";
import { IoMenu } from "react-icons/io5";
import { getEmailHref } from "./contact";

type NavItemData = {
  href: string;
  label: string;
};

const NavItem = ({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className={
      className ??
      "relative px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900 after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[var(--accent-color)] after:transition-transform after:duration-300 hover:after:scale-x-100"
    }
  >
    {children}
  </a>
);

export default function Navbar() {
  const contactHref = getEmailHref();
  const navItems: NavItemData[] = [
    { href: "#inicio", label: "Inicio" },
    { href: "#gallery", label: "Galería" },
    { href: "#destacados", label: "Proyectos" },
    { href: contactHref, label: "Contacto" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick =
    (href: string, onDone?: () => void) =>
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith("#")) {
        onDone?.();
        return;
      }

      event.preventDefault();
      const targetId = href.replace("#", "");
      const target = document.getElementById(targetId);

      if (target) {
        const headerHeight =
          document.querySelector("header")?.getBoundingClientRect().height ?? 0;
        const top =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }

      if (window.location.hash !== href) {
        window.history.pushState(null, "", href);
      }

      onDone?.();
    };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between h-16">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-lg md:text-xl font-bold leading-none text-slate-900"
        >
          <img
            src="/logo/logo-b.svg"
            alt="FPArchviz Logo"
            className="h-16 w-16 md:h-16 md:w-16 shrink-0"
          />
          <span className="hidden md:inline whitespace-nowrap">FPArchviz</span>
        </a>

        <nav className="hidden sm:flex items-center gap-4">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              onClick={handleNavClick(item.href)}
            >
              {item.label}
            </NavItem>
          ))}
        </nav>

        <div className="relative sm:hidden">
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            <IoMenu size={24} />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-44 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
              {navItems.map((item) => (
                <NavItem
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onClick={handleNavClick(item.href, closeMenu)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-[var(--accent-soft)] hover:text-slate-900"
                >
                  {item.label}
                </NavItem>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
