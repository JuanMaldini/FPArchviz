import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const target = document.getElementById(targetId);
      if (target) {
        const headerHeight =
          document.querySelector("header")?.getBoundingClientRect().height ?? 0;
        const top =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          8;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Navbar />
      <main className="flex-1 pt-16">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
