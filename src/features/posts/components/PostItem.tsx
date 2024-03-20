import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePost } from "../hooks/usePost";
import CommentList from "@features/comments/components/CommentList";

const PostItem = () => {
  const { post, loading, error, updateViewPost, likePost, dislikePost } = usePost();

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = (id: string) => {
    likePost(id);
    setLikes(likes + 1);
  };

  const handleDislike = (id: string) => {
    dislikePost(id);
    setDislikes(dislikes + 1);
  };

  useEffect(() => {
    if (post) {
      updateViewPost(post.id);
      setLikes(post.likes);
      setDislikes(post.dislikes);
    }
  }, [post]);

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
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 mb-3 d-flex justify-content-between">
          <h2>Posts</h2>
          <button className="btn btn-info me-2">
            <Link to={`/dashboard/`} style={{ color: "white", textDecoration: "none" }}>
              Voltar
            </Link>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {post && (
            <>
              <h2>{post.title}</h2>
              {post.description}
              <hr />

              <button className="btn btn-primary me-2" disabled>
                Comentários <strong>{`${post.comments.length}`}</strong>
              </button>
              <button className="btn btn-warning me-2" disabled>
                Visualizações <strong>{post.views}</strong>
              </button>
              <button onClick={() => handleLike(post.id)} className="btn btn-success me-2">
                Likes <strong>{likes}</strong>
              </button>
              <button onClick={() => handleDislike(post.id)} className="btn btn-danger">
                DisLikes <strong>{dislikes}</strong>
              </button>
              <CommentList postUserId={post.user_id} comments={post.comments} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
