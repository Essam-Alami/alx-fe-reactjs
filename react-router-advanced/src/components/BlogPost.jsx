// BlogPost.jsx
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  let { postId } = useParams();

  return (
    <div>
      <h2>Blog Post {postId}</h2>
      {/* Fetch and display the blog post content based on postId */}
    </div>
  );
};

export default BlogPost;