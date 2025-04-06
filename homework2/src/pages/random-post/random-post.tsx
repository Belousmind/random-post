import styles from './random-post.module.scss'
import { useState } from "react";
import { fetchRandomPost, Post } from "@api/fetch-posts";
import { getRandomNumber } from "@helpers/get-random-number";

const RandomPostPage = () => {
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
    <div className={styles.container}>
      <h1>Случайный пост</h1>
      <button onClick={handleGetPost} disabled={loading}>
        {loading ? "Загрузка..." : "Получить"}
      </button>

      {post && (
        <div className={styles.post}>
          <h2>{post.title}</h2>
        </div>
      )}
    </div>
  );
};

export default RandomPostPage;
