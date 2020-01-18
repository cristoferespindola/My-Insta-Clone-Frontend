import React from "react";

import Card from "./Cards";
import Icon from "./Icon";
import CardUser from "./CardUser";
import { Container } from "./styles";

export default function Content() {
  return (
    <Container className="container">
      <Icon />
      <div className="div1">
        <Card />
      </div>
      <div className="div2">
        <CardUser />
      </div>
    </Container>
  );
}
