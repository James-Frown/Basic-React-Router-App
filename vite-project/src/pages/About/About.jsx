import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import "./About.css";
import Navbar from "../../components/NavBar";
import Intrests from "../../components/Intrests";

const About = () => {
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
        <div
          style={{
            padding: "20vw",
          }}
          className="wrapper center">
          <motion.h1
            className="center"
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
            className="center">.
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
            className="center">.
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
            className="center">.
          </motion.h1>
        </div>
      ) : (
        <>
          <Navbar />
          <div
            className="wrapper center"
          >
            <div
              className="content"
            >
              <motion.div
                initial={{
                  x: "50rem"
                }}
                animate={{
                  x: 0
                }}
                transition={{
                  duration: 1
                }}
                style={{
                  marginLeft: "20px"
                }}
                className="center"
              >
                <a
                  href="mailto:2022privateequity@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "black"
                  }}
                >
                  <button
                    className="Dark"
                  >
                    RESUME
                  </button>
                </a>
              </motion.div>
              <motion.div
                initial={{
                  x: "-800px"
                }}
                animate={{
                  x: 0
                }}
                transition={{
                  duration: 1
                }}
                className="center"
              >
                <div
                  className="text"
                >
                  <p
                    className="section1text"
                  >
                    As a tech enthusiast with a passion for learning,
                    I am committed to designing, developing, and innovating in the tech industry.
                    With an innate entrepreneurial spirit that drives me to push beyond my limits,
                    I am constantly seeking opportunities to challenge myself and never shy away from taking calculated risks to achieve my goals.
                  </p>
                  <p
                    className="section1text"
                  >
                    I am fueled by my desire to create positive change and leave a lasting impact on the world.
                    My drive for growth and hunger for knowledge fuels my creativity,
                    resilience, and unwavering commitment to success.
                    I pride myself on being a self-starter and team player with excellent communication skills and a strong drive to code.
                  </p>
                  <p
                    className="section1text"
                  >
                    I indulge in my love for music, surfing, fitness, and exploring new cultures in my spare time.
                    I believe that my diverse interests and experiences contribute to my ability to think outside the box and bring unique perspectives to my work.
                  </p>
                  <p
                    className="section1text"
                  >
                    I am eager to apply my skills to new challenges and contribute meaningfully to the tech industry.
                    With my passion for innovation, willingness to take on new challenges,
                    and ability to work well in a team, I am confident that I would be a valuable asset to any tech organization.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  x: "800px"
                }}
                animate={{
                  x: 0
                }}
                transition={{
                  duration: 1
                }}
                className="media"
              >
                <div
                  className="wrapper center"
                >
                  <motion.img
                    animate={controls}
                    className="image"
                    src="https://i.ibb.co/dm3KxF1/dummy-img.png"
                    alt="about image"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div
            className="wrapper center"
          >
            <div
              className="content"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "3rem"
                }}
              >
                <Intrests
                  name="React.js"
                  image="https://i.ibb.co/dm3KxF1/dummy-img.png"
                />
                <Intrests
                  name="React.js"
                  image="https://i.ibb.co/dm3KxF1/dummy-img.png"
                />
                <Intrests
                  name="React.js"
                  image="https://i.ibb.co/dm3KxF1/dummy-img.png"
                />
                <Intrests
                  name="React.js"
                  image="https://i.ibb.co/dm3KxF1/dummy-img.png"
                />
              </div>
              <h1>
                My Intrests
              </h1>
            </div>
          </div>
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

