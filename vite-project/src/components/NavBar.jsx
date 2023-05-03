import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import './NavBar.css';

const Navbar = () => {
  return (
    <nav
      className="Nav-Wrapper"
    >
      <motion.div
        className="Nav-Logo"
        initial={{
          x: "-100rem"
        }}
        animate={{
          x: 0
        }}
        transition={{
          duration: 1
        }}
      >
        <Link
          exact
          to="/"
        >
          <img
            src="./myLogo.svg"
          />
        </Link>
      </motion.div>
      <ul
        className="Nav-List"
      >
        <motion.li
          className="Nav-Item"
          initial={{
            x: "50rem"
          }}
          animate={{
            x: 0
          }}
          transition={{
            duration: 0.6
          }}
        >
          <Link
            className="Nav-Link"
            exact
            to="/about"
          >
            About
          </Link>
        </motion.li>
        <motion.li
          className="Nav-Item"
          initial={{
            x: "50rem"
          }}
          animate={{
            x: 0
          }}
          transition={{
            duration: 0.7
          }}
        >
          <Link
            className="Nav-Link"
            to="/skills"
          >
            Skills
          </Link>
        </motion.li>
        <motion.li
          className="Nav-Item"
          initial={{
            x: "50rem"
          }}
          animate={{
            x: 0
          }}
          transition={{
            duration: 0.8
          }}
        >
          <Link
            className="Nav-Link"
            to="/projects"
          >
            Projects
          </Link>
        </motion.li>
        <motion.li
          className="Nav-Item"
          initial={{
            x: "50rem"
          }}
          animate={{
            x: 0
          }}
          transition={{
            duration: 1
          }}
        >
          <button
            className="Nav-Button"
          >
            <a
              className="Nav-Button"
              href="mailto:2022privateequity@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
          </button>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
