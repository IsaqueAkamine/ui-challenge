import apiMovies from "../services/apiMovies";

const useMovies = () => {
  
  // Função para fazer uma requisição com o Axios
  const fetchData = async (url: string, config?: {}) => {
    let data = null;
    try {
      const response = await apiMovies.get(url, {
        ...config,
      });
      const { results } = response.data;
      data = results;
    } catch (err: any) {
      throw new Error(err);
    }
    return { data };
  };

  return { fetchData };
};

export default useMovies;
