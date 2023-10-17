// import posts from './../assets/post.json';
import { useEffect, useState } from "react";
import Categories from "../components/Categories.jsx";
import Skeleton from "./Skeleton.jsx";
import Card from "../components/Card/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice.js";
import axios from "axios";

export const Blog = () => {
  // useState получение поста
  const [items, setItems] = useState([]);
  // useState подгрузка placeholder
  const [isLoading, setIsLoading] = useState(true);
  // hook redux вытаскиваем определенное из state фильтра
  const categoryId = useSelector((state) => state.filter.categoryId);
  // dispatch(redux) передает действие(например передает id выбора категории)
  const dispatch = useDispatch();
  // функция выбора категории
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    axios
      .get(`https://65226adaf43b179384147b19.mockapi.io/items?${category}`)
      .then(
        (res) => {
          setItems(res.data);
          setIsLoading(false);
        },
        [categoryId]
      );
  }, [categoryId]);

  return (
    <>
      <div className="container">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        {/*грузим  плайсхолдер*/}
        {isLoading ? (
          <Skeleton />
        ) : (
          items.map((element) => <Card key={element.id} {...element} />)
        )}
      </div>
    </>
  );
};

export default Blog;
