import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { ProjectDetail, ProjectList } from "./pages/Projects";
import { CertificateDetail, CertificateList } from "./pages/Certificates";

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return <AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:.25}}>{children}</motion.div></AnimatePresence>;
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return <>
    <ScrollToTop/>
    <Navbar/>
    <PageTransition><Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<ProjectList/>}/>
      <Route path="/projects/:slug" element={<ProjectDetail/>}/>
      <Route path="/certificates" element={<CertificateList/>}/>
      <Route path="/certificates/:slug" element={<CertificateDetail/>}/>
      <Route path="*" element={<main className="page-top section-wrap"><h1 className="page-title">Page not found.</h1></main>}/>
    </Routes></PageTransition>
    <Footer/>
  </>;
}