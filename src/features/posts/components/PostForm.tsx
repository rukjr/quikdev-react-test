import { useState, useRef, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { usePost } from "../hooks/usePost";

const PostForm = () => {
  const navigate = useNavigate();
  const { post, loading, error, savePost } = usePost();
  const fileInputRef = useRef();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [errorPost, setErrorPost] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    if (fileInputRef.current && fileInputRef.current.files[0]) {
      formData.append("imagePath", fileInputRef.current.files[0]);
    }

    try {
      await savePost(formData);
      navigate('/dashboard');
    } catch (error) {
      console.error("Falha ao salvar o post:", error);
      setErrorPost("Erro ao salvar o post.");
    }
  };

  useEffect(() => {
    if (post) {
      setTitle(post.title || "");
      setDescription(post.description || "");
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
    <form className="container mt-5" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="titleInput" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="titleInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="imagePath" className="form-label">
          Post Image
        </label>
        <input
          type="file"
          className="form-control"
          id="imagePath"
          name="imagePath"
          required
          ref={fileInputRef}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="descriptionInput" className="form-label">
          Post Description
        </label>
        <textarea
          className="form-control"
          id="descriptionInput"
          onChange={(e) => setDescription(e.target.value)}
          required
          value={description}
        />
      </div>

      
      <Link
        to="/dashboard/"
        className="btn btn-primary me-2"
        style={{ color: "white", textDecoration: "none" }}
      >
        Voltar
      </Link>

      <button type="submit" className="btn btn-success me-2">
        Salvar
      </button>
      {errorPost && <p>{errorPost}</p>}
    </form>
  );
};

export default PostForm;
