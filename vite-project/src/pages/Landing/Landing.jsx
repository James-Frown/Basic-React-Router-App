import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import "./Landing.css";
import Navbar from "../../components/NavBar";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

  // READING
  // useEffect is a hook in React that allows you to perform side effects in your components.
  // Side effects are actions that affect the state of your application but are not directly related to rendering the UI.
  // Examples of side effects include fetching data from an API, setting up event listeners, and setting timers.

  // Example:
  // useEffect(() => {
  // side effect code here
  //  }, [dependencies]);
  //

  useEffect(() => {
    // set a timer to change isLoading state after 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // start an animation with Framer Motion
    controls.start({
      y: [0, 20, 0],
      transition: { duration: 5, repeat: Infinity },
    });
  });

  return (
    <>
      {isLoading ? (
        <div
          style={{
            padding: "20vw",
          }}
          className="wrapper center">
          <motion.h1 className="center">Loading</motion.h1>
          <motion.h1
            initial={{ x: "100rem" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="center">.
          </motion.h1>
          <motion.h1
            initial={{ x: "100rem" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2 }}
            className="center">.
          </motion.h1>
          <motion.h1
            initial={{ x: "100rem" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.4 }}
            className="center">.
          </motion.h1>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="wrapper center">
            <div className="hero">
              <motion.div
                initial={{ x: "-800px" }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="left"
              >
                <div className="text">
                  <p
                    style={{ fontSize: "30px" }}
                  >Welcome,</p>
                  <p>My Name Is <span>James Brown</span></p>
                  <p>I am a Designer & Developer!</p>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "2rem" }}
                >
                  <a
                    href="mailto:2022privateequity@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <button className="Dark">About Me</button>
                  </a>
                  <a
                    href="mailto:2022privateequity@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <button className="Dark">My Projects</button>
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: "800px" }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="right"
              >
                <div className="wrapper center">
                  <motion.img
                    animate={controls}
                    className="image"
                    src="https://i.ibb.co/dm3KxF1/dummy-img.png"
                    alt="hero image"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Landing;

// react hooks
// useState()
// useEffect()
// useReducer()
