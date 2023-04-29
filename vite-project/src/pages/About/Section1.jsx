import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Section1 = () => {
    const controls = useAnimation();

    useEffect(() => {
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
        </>
    )
}

export default Section1;