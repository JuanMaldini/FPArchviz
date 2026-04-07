import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    const scrollToHash = () => {
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }

      const targetId = window.location.hash.replace("#", "");
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
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Navbar />
      <main className="flex-1 pt-16">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
