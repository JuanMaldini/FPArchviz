import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const contactEmail =
  import.meta.env.VITE_CONTACT_EMAIL ?? "contact@example.com";
const instagramUrl =
  import.meta.env.VITE_FOOTER_INSTAGRAM ?? "https://instagram.com";
const twitterUrl = import.meta.env.VITE_FOOTER_TWITTER ?? "https://twitter.com";

function App() {
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--footer-contact-email", contactEmail);
    root.style.setProperty("--footer-instagram", instagramUrl);
    root.style.setProperty("--footer-twitter", twitterUrl);
  }, [contactEmail, instagramUrl, twitterUrl]);

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Container as="main" flex="1" maxW="container.lg" py={8}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer
        email={contactEmail}
        instagram={instagramUrl}
        twitter={twitterUrl}
      />
    </Box>
  );
}

export default App;
