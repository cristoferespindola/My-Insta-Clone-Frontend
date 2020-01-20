import React, { useEffect, useState } from "react";

import api from "../../services/api";
import { token } from "../../utils/utils";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

const localsStyle = makeStyles(theme => ({
  card: {
    width: 600,
    maxWidth: 600
  },
  media: {
    width: 600,
    height: 400,
    paddingTop: "55%" 
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },

  content: {
    fontSize: 16,
    fontWeight: 500,
    marginLeft: 30
  }
}));

export default function CardUser() {
  const classes = localsStyle();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get("/posts", {
        headers: token()
      });
      setPosts(response.data);
    }
    loadPosts();
  }, []);

  return (
    <>
      {posts.length > 0 ? (
        <>
          {posts.map(pu => (
            <Card
              key={pu._id}
              className={classes.card}
              style={{ marginBottom: 50 }}
            >
              {pu.author.map(au => (
                <CardHeader
                  key={au._id}
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      <img
                        style={{ height: 50 }}
                        src={au.avatar}
                        alt="avatar"
                      />
                    </Avatar>
                  }
                  title={au.username}
                />
              ))}
              <CardMedia
                className={classes.media}
                image={pu.url}
                title="public"
              />
              <CardContent className={classes.content}>
                {pu.description}
              </CardContent>
            </Card>
          ))}
        </>
      ) : (
        <div className="empty">No publications</div>
      )}
    </>
  );
}
