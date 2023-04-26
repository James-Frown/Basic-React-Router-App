import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import "./Landing.css";

const Landing = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, 20, 0],
      transition: { duration: 5, repeat: Infinity },
    });
  });

  return (
    <div className="wrapper center">
      <div className="hero">
        <motion.div
          initial={{ x: "-800px" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="left"
        >
          <div className="heading">
            <h1>James Brown</h1>
          </div>
          <div className="text">
            <p>Developer && Designer</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "800px" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="right"
        >
          <div className="center wrapper">
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
  );
};

export default Landing;

// react hooks
// useState()
// useEffect()
// useReducer()
