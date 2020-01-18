import React from "react";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { Container, Img, Box } from "./styles";

import { logout } from "../../services/auth";

export default function Headers() {
  function hendleLogout() {
    logout();
  }
  return (
    <Container>
      <Box className="container">
        <Link style={{ textDecoration: 'none' }} to="/feed">
          <Img
            alt=""
            src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-17.png"
          />
        </Link>
        <Link  to="/">
          <ExitToAppIcon
            onClick={hendleLogout}
            style={{
              fontSize: 30,
              float: "right",
              marginTop: 25,
              marginLeft: 10
            }}
          />
        </Link>

        <Link to="/profile">
          <PersonOutlineIcon
            style={{ fontSize: 30, float: "right", marginTop: 25 }}
          />
        </Link>
      </Box>
    </Container>
  );
}
