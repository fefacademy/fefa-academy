import React from "react";

interface BadgeProps {
  size?: Size;
  className?: string;
  children?: React.ReactNode;
}

const enum Size {
  Small = "small",
  Large = "large",
}

const BetaBadge: React.FC<BadgeProps> = (props) => {
  return (
    <div
      className={`rounded-md bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-1 uppercase self-start mx-1 ${props.className}`}
    >
      <span className={`text-xs font-medium`}>Beta</span>
    </div>
  );
};

export default BetaBadge;
