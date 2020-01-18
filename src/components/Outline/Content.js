import React, { useEffect, useState } from "react";

import api from "../../services/api";
import { token } from "../../utils/utils";

import { Container } from "./styles";

export default function Outline() {
  const [publi, setPubli] = useState([]);

  useEffect(() => {
    async function loadPlubli() {
      const response = await api.get("/profile", {
        headers: token()
      });
      setPubli(response.data);
    }
    loadPlubli();
  }, []);

  return (
    <Container content>
      <hr />
      <div style={{ margin: 0 }}>
        <article>
          {publi.length > 0 ? (
            <div>
            {publi.map(p => (
                <img alt="alt" src={p.url} />
                ))}                    
            </div>
          ):(
            <div className="empty">Post a Photo :)</div>
          )}
        </article>
      </div>
    </Container>
  );
}
