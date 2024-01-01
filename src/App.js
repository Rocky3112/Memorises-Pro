import { AppBar, Container, Grid, Grow, Typography } from "@mui/material";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getPosts } from "./actions/posts";

const  App=()=> {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appbar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Memorises
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
