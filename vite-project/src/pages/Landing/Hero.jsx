import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    const controls = useAnimation();

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2rem"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "row",
                        flexWrap: "wrap-reverse",
                        gap: "10vw",
                    }}
                >
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
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            alignItems: "flex-start",
                            gap: "1rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column"
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "30px"
                                }}
                            >
                                Welcome,
                            </p>
                            <p>
                                My Name Is <span>James Brown</span>
                            </p>
                            <p>
                                I am a Designer & Developer!
                            </p>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                gap: "2rem",
                            }}
                        >
                            <button
                                style={{
                                    padding: "6px",
                                    background: "black",
                                    borderRadius: "4px",
                                    border: "solid black 1px"
                                }}
                            >
                                <Link
                                    to="/about"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                >
                                    Read More
                                </Link>
                            </button>
                            <button
                                style={{
                                    padding: "6px",
                                    background: "white",
                                    borderRadius: "4px",
                                    border: "solid black 1px"
                                }}
                            >
                                <Link
                                    to="/projects"
                                    style={{
                                        textDecoration: "none",
                                        color: "black"
                                    }}
                                >
                                    My Projects
                                </Link>
                            </button>
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
                        className="right"
                    >
                        <div
                            className="wrapper center"
                        >
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
    )
};

export default Hero;