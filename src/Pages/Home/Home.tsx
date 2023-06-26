import React, { useState } from "react";
import { searchHeroesByName } from "../../api/marvelApi";
import HeroList from "../../components/HeroList/HeroList";
import { Hero } from "../../types/hero.type";
import { HomeContainer, SearchContainer } from "./styles";
import SearchIcon from "../../components/SearchIcon/SearchIcon";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState("");

  const handleSearch = async () => {
    if (searchTerm) {
      setIsLoading(true);
      const heroes = await searchHeroesByName(searchTerm);
      setIsLoading(false);
      setHeroes(heroes);
      heroes.length === 0
        ? setNotFound("Character not found...")
        : setNotFound("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <HomeContainer>
      Luan's minimalist heroes-search
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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        notFound || <HeroList heroes={heroes} />
      )}
    </HomeContainer>
  );
};

export default Home;
