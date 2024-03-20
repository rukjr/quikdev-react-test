import { useEffect, useState } from "react";
import { fetchPosts, deletePost as deletePostService } from "../services/postsService";
import { IPosts } from "@shared/interfaces/IPosts";

export const usePosts = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getPosts = async () => {
    try {
      const data = await fetchPosts();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setError("Erro ao carregar posts.");
      setLoading(false);
    }
  };

  const deletePost = async (idPost: string) => {
    setLoading(true);
    try {
      await deletePostService(idPost);
      getPosts();
    } catch (error) {
      setError("Erro ao deletar o post.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { posts, loading, error, deletePost };
};
