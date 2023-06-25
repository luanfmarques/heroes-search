import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../../types/hero.type";
import { HeroCard, HeroListContainer } from "./styles";

interface HeroListProps {
  heroes: Hero[];
}

const HeroList: React.FC<HeroListProps> = ({ heroes }) => {
  return (
    <HeroListContainer>
      {heroes.map((hero) => (
        <Link key={hero.id} to={`/hero-details/${hero.id}`}>
          <HeroCard>
            <img
              src={`${hero.thumbnail.path}/portrait_xlarge.${hero.thumbnail.extension}`}
              alt={hero.name}
            />
            <p>{hero.name}</p>
          </HeroCard>
        </Link>
      ))}
    </HeroListContainer>
  );
};

export default HeroList;
