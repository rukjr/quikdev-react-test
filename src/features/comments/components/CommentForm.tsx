import { useEffect, useState } from "react";
import { useComment } from "@features/comments/hooks/useComment";
import { IComment } from "@shared/interfaces/IComment";

import React from "react";

interface CommentFormProps {
  setComentarios: (comments: IComment[]) => void;
  commentId?: string;
  commentDescription?: string;
  comentarios: IComment[];
}

const CommentForm: React.FC<CommentFormProps> = ({
  setComentarios,
  commentId,
  commentDescription,
  comentarios,
}) => {
  const { saveComment, updateComment } = useComment();
  const [comentario, setComentario] = useState(commentDescription || "");

  const refreshComment = (id: string, newComment: string) => {
    updateComment(id, newComment);
    const updateCurrentComment = comentarios.map((comment) => {
      if (comment.id === id) {
        comment.description = newComment;
      }
      return comment;
    });
    setComentarios(updateCurrentComment);
    setComentario("");
  };

  const handleSaveComment = async () => {
    if (commentId) {
      refreshComment(commentId, comentario);
      return;
    }

    const comment = await saveComment(comentario);
    setComentario("");

    const newComment: IComment = {
      id: comment.id,
      description: comment.description,
      createdAt: comment.createdAt,
      user: {
        id: comment.user.id,
        name: comment.user.name,
        email: comment.user.email,
      },
    };

    setComentarios((comments) => [...comments, newComment]);
  };

  useEffect(() => {
    setComentario(commentDescription || "")
  }, [commentId]);

  return (
    <>
      <div className="mb-3">
        <label htmlFor="comment" className="form-label">
          Deixe o seu comentário
        </label>
        <textarea
          onChange={(e) => setComentario(e.target.value)}
          className="form-control"
          id="comment"
          rows={3}
          value={comentario}
        ></textarea>
      </div>
      <button onClick={handleSaveComment} type="button" className="btn btn-primary">
        Salvar
      </button>
    </>
  );
};

export default CommentForm;
