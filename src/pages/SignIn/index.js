import React, { useState } from "react"
import { Link } from "react-router-dom";

import api from "../../services/api";

import { login } from "../../services/auth";

import { Container, Box, Form, Input, Button, Span } from "./styles";
const logo = require('../../assets/img/logo.png')
const loginImage = require('../../assets/img/home.png')

export default function SignIn({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSingIn(e) {
    e.preventDefault();

    if (!username || !password) {
      setError("Fill in Username and Password to continue!");
    } else {
      try {
        const response = await api.post("/auth", {
          username,
          password
        });
        login(response.data.token);
        history.push(`/feed`);
      } catch (err) {
        setError(
          "There was a problem with login, please check your credentials. T.T"
        );
      }
    }
  }
  return (
    <Container>
    <div>
    <img src={loginImage}/>
    </div>
      <Box>
        <Box textTop>
          <img
            alt=""
            src={logo}
          />
        </Box>
        <Form onSubmit={handleSingIn}>
          {error}
          <Input
            value={username}
            onChange={e => setUsername(e.target.value)}
            type="name"
            placeholder="username"
          />
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <Button>Access</Button>
        </Form>

        <Span>Don't have an account? </Span>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Span register>Register</Span>
        </Link>
      </Box>
    </Container>
  );
}
