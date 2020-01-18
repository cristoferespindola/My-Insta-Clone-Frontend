import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import api from "../../services/api";
import { token } from "../../utils/utils";
import { getToken } from "../../services/auth";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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

  cardHeader: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: 600
  },

  cardContent: {
    borderTop: "1px solid #ddd",
    borderBottom: "1px solid #ddd",
    marginBottom: 30,
    backgroundColor: "#fafafa"
  },

  divP: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    justifyContent: "center",
    alignItems: "center"
  },

  div: {
    display: "flex",
    flexDirection: "row"
  },

  button: {
    width: 50,
    marginLeft: 10,
    marginBottom: 10,
    flexShrink: 0,
    padding: 6,
    background: "#007bff",
    border: "0 solid rgba(0, 0, 0, 0.0975)",
    color: "#FFF",
    fontWeight: 600,
    fontSize: 13,
    borderRadius: 4
  },

  image: {
    height: 50
  },

  span: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 500
  },
  empty: {
      textAlign: 'center',
      fontSize: 16,
      color: '#ddd',
      fontWeight: 'bold',
      marginTop: 15
  }

}));

export default function CardsUser() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [foll, setFoll] = useState(false)

  useEffect(() => {
    async function loadUser() {
      const response = await api.get("/user", {
        headers: token()
      });
      setUsers(response.data);
    }
    loadUser();
  }, [foll]);

  async function Following(_id) {
    try {
      await api.post("/following", null, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          user: _id
        }
      });
      setFoll(true)
    } catch(err) {
      console.log(err)
    }
    setFoll(false)
  }
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.cardHeader} title="Encontre Usuários" />
      <CardContent className={classes.cardContent}>
        {users.length > 0 ? (
          <div className={classes.divP}>
          {users.map(u => (
            <div key={u._id}>
              <img className={classes.image} src={u.avatar} alt="avatar" />
              <span className={classes.span}>{u.username}</span>
              <button
                onClick={() => Following(u._id)}
                className={classes.button}
              >
                Follow
              </button>
            </div>
          ))}
        </div>
        ) : (
          <div className={classes.empty}>No Users :(</div>
        )}
      </CardContent>
    </Card>
  );
}
