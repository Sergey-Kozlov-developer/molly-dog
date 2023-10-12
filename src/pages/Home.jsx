import bgImage from "../assets/img/bg.jpg";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="bg__home">
          <motion.img
            className="bg__logo"
            src={bgImage}
            alt="BG"
            initial={{ x: 1300 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5 }}
          />
        </div>
        <motion.h1
          className="header__title"
          initial={{ x: -1300 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
        >
          Жизнь с собакой в квартире – это увлекательный,
          <br /> интересный и познавательный процесс.
          <br />
          <br />
          Блог о нашей собаке Молли.
        </motion.h1>
      </div>
    </header>
  );
};

export default Home;
