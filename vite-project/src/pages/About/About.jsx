import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import Navbar from "../../components/NavBar";
import Section1 from "./Section1";
import Section2 from "./Section2";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

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
            >
              .
            </motion.h1>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <Section1 />
          <Section2 />
        </>
      )}
    </>
  );
};

export default About;

// react hooks
// useState()
// useEffect()
// useReducer()

