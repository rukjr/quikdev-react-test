import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  findPost,
  savePost as savePostService,
  likePost as likePostService,
  dislikePost as dislikePostService,
  viewPost as viewPostService,
} from "../services/postsService";
import { IPost } from "@shared/interfaces/IPost";

export const usePost = () => {
  const { id } = useParams();
  const idPost = parseInt(id || "0");
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPost = async () => {
      if (idPost > 0) {
        try {
          const data = await findPost(idPost);
          setPost(data);
        } catch (error) {
          setError("Erro ao carregar o post.");
        }
      }
      setLoading(false);
    };

    getPost();
  }, [idPost]);

  const savePost = async (postData: FormData) => {
    setLoading(true);
    try {
      const data = await savePostService(postData, idPost > 0 ? idPost : undefined);
      setPost(data);
      return data;
    } catch (error) {
      setError("Erro ao salvar o post.");
    } finally {
      setLoading(false);
    }
  };

  const updateViewPost = async (idPost: string) => {
    setLoading(true);

    const postData = new FormData();
    postData.append("views", String(idPost));

    try {
      await viewPostService(idPost);
      return true;
    } catch (error) {
      setError("Erro ao salvar o post.");
    } finally {
      setLoading(false);
    }
  };

  const dislikePost = async (idPost: string) => {
    setLoading(true);
    try {
      await dislikePostService(idPost);
      return true;
    } catch (error) {
      setError("Erro ao dar like no post.");
    } finally {
      setLoading(false);
    }
  };

  const likePost = async (idPost: string) => {
    setLoading(true);
    try {
      await likePostService(idPost);
      return true;
    } catch (error) {
      setError("Erro ao dar dislike no post.");
    } finally {
      setLoading(false);
    }
  };

  return { post, loading, error, setPost, savePost, updateViewPost, dislikePost, likePost };
};
