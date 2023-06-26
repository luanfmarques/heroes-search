import axios from "axios";
import md5 from "md5";

const API_PUBLIC_KEY = "7219a1c1526be706bd3dbce4553bfbbd";
const API_PRIVATE_KEY = "9f6691ff9536315840d2839ac6db2a03a037870c";
const API_BASE_URL = "http://gateway.marvel.com/v1/public";

const marvelApi = axios.create({
  baseURL: API_BASE_URL,
});

// Função para gerar o hash necessário para autenticar as requisições
const generateHash = (timestamp: string) => {
  const hash = md5(`${timestamp}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`);
  return hash;
};

// Função para buscar heróis por nome
export const searchHeroesByName = async (name: string) => {
  const timestamp = Date.now().toString();
  const hash = generateHash(timestamp);

  try {
    const response = await marvelApi.get("/characters", {
      params: {
        apikey: API_PUBLIC_KEY,
        ts: timestamp,
        hash: hash,
        nameStartsWith: name,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Error searching heroes:", error);
    throw error;
  }
};

// Função para obter detalhes de um herói específico
export const getHeroById = async (heroId: number) => {
  const timestamp = Date.now().toString();
  const hash = generateHash(timestamp);

  try {
    const response = await marvelApi.get(`/characters/${heroId}`, {
      params: {
        apikey: API_PUBLIC_KEY,
        ts: timestamp,
        hash: hash,
      },
    });
    return response.data.data.results[0];
  } catch (error) {
    console.error("Error getting hero details:", error);
    throw error;
  }
};
