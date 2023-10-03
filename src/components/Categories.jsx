import './../scss/components/_categories.scss';
import { useState } from 'react';

function Categories() {
  // state асктивной категории
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['Все', 'Дрессировка', 'Трюки', 'Статьи'];
  // функция меняющая активное состояние
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
