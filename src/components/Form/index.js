import React, { useMemo, useState } from "react";
import PhotoCameraSharpIcon from "@material-ui/icons/PhotoCameraSharp";
import { Container } from "./styles";

import api from "../../services/api";
import { token } from "../../utils/utils";

export default function Form(props) {
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");

  const preview = useMemo(() => {
    return photo ? URL.createObjectURL(photo) : null;
  }, [photo]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!description) return setError("Fill in the description...");
    if (!photo) return setError("Put a picture...");
    try {
      const data = new FormData();

      data.append("description", description);
      data.append("photo", photo);

      await api.post("/posts", data, {
        headers: token()
      });
      window.history.back();
    } catch (err) {
      setError("Unsupported photo or short description...");
    }
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h3>Upload Photo</h3>
        <div className="error">{error}</div>
        <label id="photo" style={{ backgroundImage: `url(${preview})` }}>
          <input type="file" onChange={e => setPhoto(e.target.files[0])} />
          <PhotoCameraSharpIcon style={{ color: "#ddd" }} id="icon" />
        </label>
        <label id="desc">
          Description * <span>(Type 20 Characters)</span>
        </label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          cols="15"
          rows="5"
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </Container>
  );
}
