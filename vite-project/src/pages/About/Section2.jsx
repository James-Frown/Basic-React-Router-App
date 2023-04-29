import { useAnimation } from "framer-motion";
import { useEffect } from "react";

import Intrests from "../../components/Intrests";

const Section2 = () => {
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
    )
}

export default Section2;
