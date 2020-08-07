import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="home container" 
    initial={{
      opacity: 0
    }} animate={{
      // opacity: 0.5, marginTop: '1.5rem'
      opacity: 1
    }}>
      <motion.h2
        animate={{
          // fontSize: 50,
          // color: "red",
          // x: 100,
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          animate={{
            // scale: 1.5,
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
