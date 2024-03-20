import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  saveComment as saveCommentService,
  removeComment as removeCommentService,
  updateComment as updateCommentService,
} from "../services/commentService";

export const useComment = () => {
  const { id } = useParams();
  const idPost = parseInt(id || "0");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const saveComment = async (comment: string) => {
    setLoading(true);
    try {
      const data = await saveCommentService(comment, idPost > 0 ? idPost : undefined);
      return data;
    } catch (error) {
      setError("Erro ao salvar o comentário.");
    } finally {
      setLoading(false);
    }
  };

  const removeComment = async (commentId: string) => {
    setLoading(true);
    try {
      const data = await removeCommentService(commentId);
      return data;
    } catch (error) {
      setError("Erro ao deletar o comentário.");
    } finally {
      setLoading(false);
    }
  };

  const updateComment = async (commentId: string, comment: string) => {
    setLoading(true);
    try {
      const data = await updateCommentService(commentId, comment);
      return data;
    } catch (error) {
      setError("Erro ao atualizar o comentário.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, saveComment, removeComment, updateComment };
};
