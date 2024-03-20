import api from "@shared/utils/api";

export const saveComment = async (comment: string, id?: number) => {
  try {
    const commentData = {
      description: comment,
      post_id: id,
    };

    const response = await api.post("/comment/create", commentData);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível salvar o comentário.");
  }
};

export const removeComment = async (id: string) => {
  try {
    const response = await api.delete(`/comment/delete/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível deletar o comentário.");
  }
};

export const updateComment = async (id: string, comment: string) => {
  try {
    const commentData = {
      description: comment,
    };

    const response = await api.patch(`/comment/update/${id}`, commentData);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível atualizar o comentário.");
  }
};
