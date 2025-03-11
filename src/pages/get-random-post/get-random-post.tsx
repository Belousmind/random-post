import { useState } from "react";
import { fetchRandomPost, Post } from "../../shared/api/fetch-posts";
import { getRandomNumber } from "../../shared/helpers/get-random-number";

const GetRandomPostPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetPost = async () => {
    setLoading(true);
    try {
      const postId = getRandomNumber(100);
      const data = await fetchRandomPost(postId);
      setPost(data);
    } catch (error) {
      console.error("Ошибка при загрузке поста:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Случайный пост</h1>
      <button onClick={handleGetPost} disabled={loading}>
        {loading ? "Загрузка..." : "Получить"}
      </button>

      {post && (
        <div>
          <h2>{post.title}</h2>
        </div>
      )}
    </div>
  );
};

export default GetRandomPostPage;
