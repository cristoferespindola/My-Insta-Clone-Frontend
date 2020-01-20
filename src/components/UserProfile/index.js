import React from "react";

import { Container } from "./styles";

import Info from "./Info";
import Content from "./Content";

export default function UserProfile() {
  return (
    <Container className="container">
      <Info />
      <Content />
    </Container>
  );
}
