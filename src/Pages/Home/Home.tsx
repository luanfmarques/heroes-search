import React, { useState } from "react";
import { searchHeroesByName } from "../../api/marvelApi";
import HeroList from "../../components/HeroList/HeroList";
import { Hero } from "../../types/hero.type";
import { HomeContainer, SearchContainer } from "./styles";
import SearchIcon from "../../components/SearchIcon";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (searchTerm) {
      setIsLoading(true);
      const heroes = await searchHeroesByName(searchTerm);
      setIsLoading(false);
      setHeroes(heroes);
    } else {
      setHeroes([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <HomeContainer>
      Luan's heroes-search
      <SearchContainer>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for a hero..."
        />
        <button onClick={handleSearch}>
          <SearchIcon width={25} height={25} className="icon" />
        </button>
      </SearchContainer>
      {!isLoading ? <HeroList heroes={heroes} /> : <LoadingSpinner />}
    </HomeContainer>
  );
};

export default Home;
