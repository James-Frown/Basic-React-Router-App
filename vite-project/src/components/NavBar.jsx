import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav
      id="Nav-Wrapper"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10vw"
      }}
    >
      <motion.div
        id="Nav-Logo"
        initial={{
          x: "-100rem"
        }}
        animate={{
          x: 0
        }}
        transition={{
          duration: 1
        }}
        style={{
          padding: "1rem",
          width: "330px",
          textAlign: "center"
        }}
      >
        <Link
          exact
          to="/"
          style={{
            textDecoration: "none",
            color: "black"
          }}>
          <img
            src="./myLogo.svg"
          />
        </Link>
      </motion.div>
      <ul
        id="Nav-List"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          textDecoration: "none",
          padding: "1rem",
          gap: "1rem"
        }}
      >
        <motion.li
          initial={{
            x: "50rem"
          }}
          animate={{
            x: 0
          }}
          transition={{
            duration: 0.6
          }}
          style={{
            textDecoration: "none",
            
          }}
        >
          <Link
            exact
            to="/about"
            style={{
              textDecoration: "none",
              color: "black"
            }}
          >
            About
          </Link>
        </motion.li>
        <motion.li
          initial={{
            x: "50rem"
          }}
          animate={{
            x: 0
          }}
          transition={{
            duration: 0.7
          }}
          style={{

          }}
        >
          <Link
            to="/skills"
            style={{
              textDecoration: "none",
              color: "black"
            }}
          >
            Skills
          </Link>
        </motion.li>
        <motion.li
          initial={{
            x: "50rem"
          }}
          animate={{
            x: 0
          }}
          transition={{
            duration: 0.8
          }}
          style={{

          }}
        >
          <Link
            to="/projects"
            style={{
              textDecoration: "none",
              color: "black"
            }}
          >
            Projects
          </Link>
        </motion.li>
        <motion.li
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

          }}
        >
          <button>
            <a
              href="mailto:2022privateequity@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "black"
              }}
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
