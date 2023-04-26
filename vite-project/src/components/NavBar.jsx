import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#CCC",
        height: "8vh",
        padding: "10px",
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          listStyle: "none",
          padding: "0",
          margin: 0,
        }}
      >
        <motion.li
          initial={{ x: "-800px" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          style={{ marginLeft: "20px" }}
        >
          <Link exact to="/" style={{ textDecoration: "none", color: "black" }}>
            <img src="./myLogo.svg"></img>
          </Link>
        </motion.li>
        <motion.li
          initial={{ x: "500px" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginLeft: "20px" }}
        >
          <Link
            exact
            to="/about"
            style={{ textDecoration: "none", color: "black" }}
          >
            About
          </Link>
        </motion.li>
        <motion.li
          initial={{ x: "500px" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          style={{ marginLeft: "20px" }}
        >
          <Link to="/skills" style={{ textDecoration: "none", color: "black" }}>
            Skills
          </Link>
        </motion.li>
        <motion.li
          initial={{ x: "500px" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginLeft: "20px" }}
        >
          <Link
            to="/projects"
            style={{ textDecoration: "none", color: "black" }}
          >
            Projects
          </Link>
        </motion.li>
        <motion.li
          initial={{ x: "500px" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9 }}
          style={{ marginLeft: "20px" }}
        >
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact
          </Link>
        </motion.li>
        <motion.li
          initial={{ x: "500px" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          style={{ marginLeft: "20px" }}
        >
          <a
            href="mailto:2022privateequity@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="Dark">Contact</button>
          </a>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
