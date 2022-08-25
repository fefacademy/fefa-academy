import { Container } from "@mantine/core";
import Page from "components/Page";
import PrismDemo from "components/Prism";
import RichText from "components/RichText";
import { useState } from "react";

export default function Blog() {
  const [value, onChange] = useState(``);
  return (
    <Page>
      <h1>Blog</h1>
      <Container>
        <PrismDemo />
        <RichText value={value} onChange={onChange} />
      </Container>
    </Page>
  );
}
