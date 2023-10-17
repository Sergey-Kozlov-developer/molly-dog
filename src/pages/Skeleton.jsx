// import styles from '../components/Card/Card.module.scss';
// const Skeleton = () => {
//   return (
//     <div className="container__skeleton">
//       <h1>🐕</h1>
//       <p>Загружаем данные...</p>
//     </div>
//   );
// };

// export default Skeleton;
import { motion } from "framer-motion";

const loadingContainer = {
  width: "10rem",
  height: "5rem",
  display: "flex",
  justifyContent: "space-around",
};
const loadingCircle = {
  display: "block",
  width: "2rem",
  height: "2rem",
  backgroundColor: "#d4c17f",
  borderRadius: "50%",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};
const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const Skeleton = () => {
  return (
    <div className="container__skeleton">
      <div className="fixed  w-full min-h-screen z-50 bg-black opacity-30" />
      <div className="flex fixed w-full justify-center items-center h-screen">
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Skeleton;
