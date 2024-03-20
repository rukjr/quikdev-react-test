import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@shared/utils/api";
import { useUser } from '@context/UserContext';

export const useLogin = () => {
  const { setUser } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      setIsLoading(false);

      const userId = data.userId;
      const userName = data.username;

      setUser({ id: userId, name: userName });
      
      if (data.message) {
        setError(data.message);
        return false;
      }

      
      navigate("/dashboard");

    } catch (error: unknown) {
      setIsLoading(false);
      if (error instanceof Error) {
        console.error(error);
        setError(error.message);
      }
    }
  };

  return { login, isLoading, error };
};
