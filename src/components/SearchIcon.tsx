import React from "react";
import { ReactComponent as Icon } from "../assets/icons/search.svg";

interface SVGIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const SearchIcon: React.FC<SVGIconProps> = ({
  width = 24,
  height = 24,
  className,
}) => {
  return <Icon width={width} height={height} className={className} />;
};

export default SearchIcon;
