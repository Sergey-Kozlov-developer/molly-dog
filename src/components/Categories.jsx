import "./../scss/components/_categories.scss";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function Categories({ value, onChangeCategory }) {
  const categories = ["Все", "Молли", "Дрессировка", "Трюки", "Статьи"];
  // функция меняющая активное состояние
  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <motion.li
            whileTap={{ scale: 1.2 }}
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ""}
          >
            {categoryName}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
