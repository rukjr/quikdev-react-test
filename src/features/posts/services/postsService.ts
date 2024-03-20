import api from "@shared/utils/api";
export const fetchPosts = async () => {
  try {
    const response = await api.get("/post/all");
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível buscar os posts.");
  }
};

export const findPost = async (id: number) => {
  try {
    const response = await api.get(`/post/find/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível recuperar o post.");
  }
};

export const savePost = async (post: FormData, id?: number) => {
  try {
    // Se o ID for fornecido, atualiza o post existente
    if (id) {
      const response = await api.patch(`/post/update/${id}`, post);
      return response.data;
    }
    // Caso contrário, cria um novo post
    const response = await api.post("/post/create", post);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível salvar o post.");
  }
};

export const deletePost = async (id: string) => {
  try {
    const response = await api.delete(`/post/delete/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível deletar o post.");
  }
};

export const likePost = async (id: string) => {
  try {
    const response = await api.patch(`/post/like/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível dar like ao post.");
  }
};

export const dislikePost = async (id: string) => {
  try {
    const response = await api.patch(`/post/dislike/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível dar dislike ao post.");
  }
};

export const viewPost = async (id: string) => {
  try {
    const response = await api.patch(`/post/view/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível dar dislike ao post.");
  }
};