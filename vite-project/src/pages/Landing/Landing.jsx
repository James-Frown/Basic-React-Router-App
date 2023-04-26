import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import "./Landing.css";
import Navbar from "../../components/NavBar";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
