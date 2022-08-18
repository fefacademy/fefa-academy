import { Text } from "@mantine/core";

export default function GradientText(props: any) {
  const { from, to, text } = props;

  return (
    <Text component="span" variant="gradient" gradient={{ from, to }} inherit>
      {" "}
      {text}{" "}
    </Text>
  );
}
