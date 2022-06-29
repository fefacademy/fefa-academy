import React from "react";
import { Text } from "@mantine/core";

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
    <div className="rounded-md bg-yellow-400 text-white px-1 uppercase self-start mx-1">
      <Text
        className={`${
          props.size === "small" ? "text-xs" : "text-xs"
        } font-medium`}
      >
        Beta
      </Text>
    </div>
  );
};

export default BetaBadge;
