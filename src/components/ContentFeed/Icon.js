import React from "react";
import { Link } from "react-router-dom";

import AddPost from "@material-ui/icons/AddPhotoAlternateRounded";

import { Div } from "./styles";

export default function Icon() {
  return (
    <Div>
      <Link className="link" to="/posts">
        <AddPost className="icon" />
      </Link>
    </Div>
  );
}
