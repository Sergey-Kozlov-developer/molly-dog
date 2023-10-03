import Card from './Card/Card.jsx';
import posts from './../assets/post.json';
function Blog() {
  return (
    <div>
      {posts.map((post, id) => (
        <Card key={post.id} {...post} />
      ))}
    </div>
  );
}
export default Blog;
