import React, { useState } from "react";
import { CommentListProps, IComment } from "@shared/interfaces/IComment";
import CommentForm from "./CommentForm";
import { usePost } from "@features/posts/hooks/usePost";
import { useComment } from "@features/comments/hooks/useComment";
import { useUser } from "@context/UserContext";

const CommentList: React.FC<CommentListProps> = ({ comments, postUserId }) => {
  const { user } = useUser();

  const { post, loading, error } = usePost();
  const { removeComment } = useComment();
  const [comentarios, setComentarios] = useState<IComment[]>(comments);

  const [commentId, setCommentId] = useState("");
  const [commentDescription, setCommentDescription] = useState("");

  const deleteComment = (id: string) => {
    removeComment(id);
    const newComments = comentarios.map((comment) => {
      if (comment.id === id) {
        comment.isRemoved = true;
      }
      return comment;
    });
    setComentarios(newComments);
  };

  const handleChangeComment = (id: string, description: string) => {
    console.log('oi?');
    setCommentId(id);
    setCommentDescription(description);
  };

  if (loading)
    return (
      <div className="container">
        <p>Carregando...</p>
      </div>
    );

  if (error)
    return (
      <div className="container">
        <p>Erro: {error}</p>
      </div>
    );

  return (
    <>
      <hr />
      <legend>Comentários</legend>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Por</th>
            <th>Comentário</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {comentarios &&
            comentarios.map((comment) => (
              <tr key={comment.id}>
                {comment.isRemoved ? (
                  <>
                    {comment.user.id === post?.user?.id ? (
                      <>
                        <td colSpan={2}>Comentário deletado pelo usuário do comentário</td>
                        <td>{comment.createdAt}</td>
                      </>
                    ) : (
                      <>
                        <td colSpan={2}>Comentário deletado pelo autor da postagem</td>
                        <td>{comment.createdAt}</td>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <td>{comment.user.name}</td>
                    <td>{comment.description}</td>
                    <td>{comment.createdAt}</td>
                    <td>
                      {comment.user.id === user.id && (
                        <button
                          onClick={() => handleChangeComment(comment.id, comment.description)}
                          className="btn btn-info btn-sm me-2"
                        >
                          Editar
                        </button>
                      )}
                      {(comment.user.id === user.id || postUserId === user.id) && (
                        <button
                          onClick={() => deleteComment(comment.id)}
                          className="btn btn-danger btn-sm me-2"
                        >
                          Deletar
                        </button>
                      )}
                    </td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      <CommentForm
        commentId={commentId}
        comentarios={comentarios}
        commentDescription={commentDescription}
        setComentarios={setComentarios}
      />
    </>
  );
};

export default CommentList;
