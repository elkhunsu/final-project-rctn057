import React, { useEffect } from "react";
import { Container } from "@mui/system";
import "./App.css";
import Header from "./Component/Header";
import Movie from "./Component/Movie";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions/movie";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    console.log(state, "state");
    return {
      isLoading: state.movie.isLoading,
      data: state.movie.data,
    };
  });

  useEffect(() => {
    dispatch(fetchData("marvel"));
  }, []);

  console.log("selector.data", selector.data);
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "left",
            fontSize: 26,
            marginBottom: 6,
          }}
        >
          Show your favorite movies
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            textAlign: "left",
            gridGap: 20,
          }}
        >
          {selector.data.map((val) => (
            <Movie Title={val.Title} Poster={val.Poster} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
