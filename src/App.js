import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import NotFound from "./Components/NotFound";
import styles from "./Components/Main.module.css";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className={styles["navbar-content"]}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog/1">Blog Post 1</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:postId" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
