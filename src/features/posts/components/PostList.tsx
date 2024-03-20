import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

const PostList = () => {
  const { posts, loading, error, deletePost } = usePosts();

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
          <button className="btn btn-success">
            <Link to={`/dashboard/post/create`} style={{ color: "white", textDecoration: "none" }}>
              Criar novo
            </Link>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Visualizações</th>
                <th>Likes</th>
                <th>Dislikes</th>
                <th>Comentários</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.views}</td>
                  <td>{post.likes}</td>
                  <td>{post.dislikes}</td>
                  <td>{post.commentCount}</td>
                  <td>
                    <button className="btn btn-primary btn-sm me-2">
                      <Link
                        to={`/dashboard/post/${post.id}`}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Visualizar
                      </Link>
                    </button>
                    <button className="btn btn-secondary btn-sm me-2">
                      <Link
                        to={`/dashboard/post/update/${post.id}`}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Editar
                      </Link>
                    </button>
                    <button onClick={() => deletePost(post.id)} className="btn btn-danger btn-sm">Deletar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PostList;
