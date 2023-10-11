import "./../scss/components/_categories.scss";

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
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
