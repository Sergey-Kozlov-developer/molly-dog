import Card from './Card/Card.jsx';
// import posts from './../assets/post.json';
import { useEffect, useState } from 'react';
import Categories from './Categories.jsx';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/8f2b45c494982151a094')
      .then((res) => res.json())
      .then((arrPosts) => setPosts(arrPosts));
  }, []);

  return (
    <div className="container">
      <Categories />
      {posts.map((post, id) => (
        <Card key={post.id} {...post} />
      ))}
    </div>
  );
}

export default Blog;
