import { motion } from "framer-motion";

const Loading = () => {
    <div
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "20vw",
        }}
    >
        <motion.h1
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
        >
            .
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
            className="center"
        >
            .
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
            className="center"
        >
            .
        </motion.h1>
    </div>
}

export default Loading;
