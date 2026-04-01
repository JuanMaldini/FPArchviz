import { Link, NavLink } from "react-router-dom";

const NavItem = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm font-medium ${isActive ? "text-slate-900" : "text-slate-600"}`
    }
  >
    <span className="px-3 py-2 hover:text-slate-900">{children}</span>
  </NavLink>
);

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between h-16">
        <NavLink to="/" className="text-xl font-bold text-slate-900">
          FPArchviz
        </NavLink>
        <nav className="flex items-center gap-4">
          <Link
            to="/#gallery"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2"
          >
            Gallery
          </Link>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
      </div>
    </header>
  );
}
