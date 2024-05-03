import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";
// import pdf from "../public/mycv.pdf";s

const App = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div className="app">
        <motion.h1
          className={`animated-text ${showAnimation ? "fade-in" : ""}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Samir Koirala
        </motion.h1>
        {showAnimation && (
          <div className="construction-animation">
            <motion.div
              className="animation-box"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.h1
              className={`animated-text ${showAnimation ? "fade-in" : ""}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Portfolio Under construction
            </motion.h1>
            {showAnimation && (
              <div className="construction-animation">
                <motion.div
                  className="animation-box"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/samirkoirala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="social-icon linkedin-icon"
          />
        </a>
        <a
          href="https://www.facebook.com/samirk.official"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="social-icon facebook-icon"
          />
        </a>
        <a
          href="https://www.twitter.com/_samirkoirala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="social-icon twitter-icon"
          />
        </a>
        <a
          href="https://www.instagram.com/_samirkoirala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="social-icon instagram-icon"
          />
        </a>
      </div>

      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I describe myself as an enthusiastic, self-motivated and flexible
          person. I love doing team works and always ready to explore new
          things.
        </p>
      </div>

      <a href="./mycv.pdf" download="cv.pdf">
        Download CV
      </a>
    </div>
  );
};

export default App;
