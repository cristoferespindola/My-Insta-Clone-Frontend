import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { token } from "../../utils/utils";
import { Container } from "./styles";

export default function Outline() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    async function loadUser() {
      const response = await api.get("userId", {
        headers: token()
      });
      const { name } = response.data;
      const { username } = response.data;
      const { bio } = response.data;
      const { avatar } = response.data;

      setName(name);
      setUserName(username);
      setBio(bio);
      setAvatar(avatar);
    }
    loadUser();
  }, []);

  return (
    <Container info>
      <div className="avatar">
        <img
          style={{
            width: "100%",
            height: 175,
            marginBottom: 15
          }}
          alt="avatar"
          src={avatar}
        />
      </div>
      <section>
        <div className="infoP">
          <h3>{username}</h3>
        </div>
        <div className="infoB">
          <h3>{name}</h3>
          <span>{bio}</span>
        </div>
      </section>
    </Container>
  );
}
