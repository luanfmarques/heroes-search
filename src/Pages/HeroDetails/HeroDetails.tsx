import React, { useEffect, useState } from "react";
import { useParams, Params } from "react-router-dom";
import { getHeroById } from "../../api/marvelApi";
import { Hero as HeroType } from "../../types/hero.type";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

interface HeroParams extends Params {
  id: string;
}

const HeroDetails: React.FC = () => {
  const { id } = useParams<HeroParams>();
  const [hero, setHero] = useState<HeroType | null>(null);

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
    <div>
      <h1>{hero.name}</h1>
      <img
        src={`${hero.thumbnail.path}/portrait_fantastic.${hero.thumbnail.extension}`}
        alt={hero.name}
      />
      <p>{hero.description}</p>
    </div>
  );
};

export default HeroDetails;
