import React, { useEffect, useState } from "react";

import api from "../../services/api";
import { token } from "../../utils/utils";

import { Container } from "./styles";
import Delete from "@material-ui/icons/Delete";

export default function UserProfile() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPost() {
      const response = await api.get("/profile", {
        headers: token()
      });
      setPost(response.data);      
    }
    loadPost();
  }, []);

  async function handleDelete(id) {
    await api.post(`/deletepost/${id}`, {
        headers: token()
      });
      window.location.reload(false);
    } 

  return (
    <Container content>
      <hr />
      <div style={{ margin: 0 }}>
        <article>
          {post.length > 0 ? (
            <div className="card">
            {post.map(item => (
              <div>
              <span>
                <a onClick={() => handleDelete(item._id)}>
                  <Delete className="icon" />
                </a>
              </span>
              <img 
                  className="postImg"
                  alt={item.img} 
                  src={item.url} 
                  key={item._id}/>
              </div>                
                ))}                    
            </div>
          ):(
            <div className="empty">Nothing here</div>
          )}
        </article>
      </div>
    </Container>
  );
}
