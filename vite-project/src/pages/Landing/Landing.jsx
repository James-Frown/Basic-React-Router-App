import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import Hero from "./Hero";

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
      transition: {
        duration: 5,
        repeat: Infinity
      },
    });
  });

  return (
    <>
      {isLoading ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "20vw",
            }}
          >
            <motion.h1
            >
              Loading
            </motion.h1>
            <motion.h1
              initial={{
                x: "100rem"
              }}
              animate={{
                x: 0
              }}
              transition={{
                duration: 0.8
              }}
            >
              .
            </motion.h1>
            <motion.h1
              initial={{
                x: "100rem"
              }}
              animate={{
                x: 0
              }}
              transition={{
                duration: 1.2
              }}
              className="center"
            >
              .
            </motion.h1>
            <motion.h1
              initial={{
                x: "100rem"
              }}
              animate={{
                x: 0
              }}
              transition={{
                duration: 1.4
              }}
              className="center"
            >
              .
            </motion.h1>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <Hero />
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
