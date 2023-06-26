import React, { useEffect, useState } from "react";
import { useParams, Params, useNavigate } from "react-router-dom";
import { getHeroById } from "../../api/marvelApi";
import { Hero as HeroType } from "../../types/hero.type";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { HeroDatailsContainer } from "./styles";
import BackArrowIcon from "../../components/BackArrowIcon/BackArrowIcon";

interface HeroParams extends Params {
  id: string;
}

const HeroDetails: React.FC = () => {
  const { id } = useParams<HeroParams>();
  const [hero, setHero] = useState<HeroType | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchHero = async () => {
      const hero = await getHeroById(parseInt(id!!));
      setHero(hero);
    };

    fetchHero();
  }, [id]);

  if (!hero) {
    return <LoadingSpinner />;
  }

  return (
    <HeroDatailsContainer>
      <header>
        <button onClick={() => navigate(-1)}>
          <BackArrowIcon width={30} height={30} />
        </button>
        <h1>{hero.name}</h1>
      </header>
      <img
        src={`${hero.thumbnail.path}/portrait_fantastic.${hero.thumbnail.extension}`}
        alt={hero.name}
      />
      <p>
        {hero.description || "This character doesn't have description yet..."}
      </p>
    </HeroDatailsContainer>
  );
};

export default HeroDetails;
