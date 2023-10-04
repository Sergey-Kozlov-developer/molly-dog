import Card from '../components/Card/Card.jsx';
// import posts from './../assets/post.json';
import { useEffect, useState } from 'react';
import Categories from '../components/Categories.jsx';
import Skeleton from './Skeleton.jsx';

export const Blog = () => {
  // useState получение поста
  const [posts, setPosts] = useState([]);
  // useState подгрузка placeholder
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.npoint.io/8f2b45c494982151a094')
      .then((res) => res.json())
      .then((arrPosts) => {
        setPosts(arrPosts);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <Categories />
      {/*грузим  плайсхолдер*/}
      {isLoading ? (
        <Skeleton />
      ) : (
        posts.map((element, id) => <Card key={element.id} {...element} />)
      )}
    </div>
  );
};

export default Blog;
