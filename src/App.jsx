import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import "./App.css";
import Header from "./Component/Header";
import Movie from "./Component/Movie";
import { Typography, CircularProgress, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions/movie";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return {
      isLoading: state.movie.isLoading,
      data: state.movie.data,
    };
  });

  useEffect(() => {
    dispatch(fetchData("marvel"));
  }, []);

  const [form, setForm] = useState({
    title: "",
  });

  const onChange = (e) => {
    setForm({
      ...form,
      title: e.target.value,
    });
  };

  const onClear = () => {
    setForm({
      title: "",
    });
  };

  const onSubmit = () => {
    const title = form.title ? form.title : "marvel";
    dispatch(fetchData(title));
    onClear();
  };

  const onSubmitEnter = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <div className="App">
      <Header
        Value={form.title}
        onSubmit={onSubmit}
        onChange={onChange}
        onClear={onClear}
        onSubmitEnter={onSubmitEnter}
      />
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "left",
            marginBottom: 6,
          }}
        >
          Show your favorite movies
        </Typography>
        {selector.isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : selector.data ? (
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
        ) : (
          <Typography
            variant="body1"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              marginBottom: 6,
            }}
          >
            Data yang dicari tidak ada
          </Typography>
        )}
      </Container>
    </div>
  );
}

export default App;
