import { usePost } from "../hooks/usePost";
import PostForm from "./PostForm";

const PostEdit = () => {

    const { post } = usePost();

  return (
    <>
      <PostForm />

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <legend>History Changes</legend>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título antigo</th>
                  <th>Criado em</th>
                </tr>
              </thead>
              <tbody>
                {post && post?.history.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostEdit;
