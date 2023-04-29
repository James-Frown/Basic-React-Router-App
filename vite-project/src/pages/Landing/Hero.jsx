import { motion, useAnimation } from "framer-motion";

const Hero = () => {
    const controls = useAnimation();

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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
                            flexDirection: "colum",
                            justifyContent: "space-around",
                            alignItems: "flex-start",
                            gap: "1rem",
                        }}
                    >
                        <div
                            className="text"
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
                                gap: "2rem"
                            }}
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
                                    About Me
                                </button>
                            </a>
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
                                    My Projects
                                </button>
                            </a>
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