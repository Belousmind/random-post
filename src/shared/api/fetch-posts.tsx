import { apiClient } from "@services/request";

export type Post = {
  id: number;
  title: string;
  body: string;
};

export const fetchRandomPost = async (postId: number): Promise<Post> => {
  try {
    const response = await apiClient.get<Post>(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при загрузке поста:", error);
    throw error;
  }
};
