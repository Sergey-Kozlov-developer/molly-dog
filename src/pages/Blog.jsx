import Index from '../components/Card/index.jsx';
// import posts from './../assets/post.json';
import { useEffect, useState } from 'react';
import Categories from '../components/Categories.jsx';
import Skeleton from './Skeleton.jsx';
import Card from '../components/Card/index.jsx';

export const Blog = () => {
  // useState получение поста
  const [items, setPosts] = useState([]);
  // useState подгрузка placeholder
  const [isLoading, setIsLoading] = useState(true);
  // state асктивной категории
  const [categoryId, setCategoryId] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    fetch(`https://65226adaf43b179384147b19.mockapi.io/items?${category}`)
      .then((res) => res.json())
      .then((arrPosts) => {
        setPosts(arrPosts);
        setIsLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="container">
      <Categories
        value={categoryId}
        onChangeCategory={(index) => setCategoryId(index)}
      />
      {/*грузим  плайсхолдер*/}
      {isLoading ? (
        <Skeleton />
      ) : (
        items.map((element, id) => <Card key={element.id} {...element} />)
      )}
    </div>
  );
};

export default Blog;
