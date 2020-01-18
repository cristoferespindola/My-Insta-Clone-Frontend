import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";
import { Container, Box, Form, Input, Button, Span } from "./styles";

export default function SignUp({ history }) {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();

    const response = await api.post("/user", {
      name,
      email,
      username,
      password
    });
    login(response.data.token);
    history.push(`/feed`);
  }
  return (
    <Container>
      <Box>
        <Box textTop>
          <img
            alt=""
            src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-17.png"
          />
        </Box>
        <Form onSubmit={handleSignUp}>
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            type="name"
            placeholder="Full Name"
          />
          <Input
            value={username}
            onChange={e => setUserName(e.target.value)}
            type="name"
            placeholder="Username"
          />
          <Input
            value={password}
            onChange={e => setPassWord(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <Button>Register</Button>
        </Form>
        <Span>Have an account? </Span>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Span register>Log In</Span>
        </Link>
      </Box>
    </Container>
  );
}
