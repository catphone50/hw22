import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "../../redux/quot/quoteSlice";
import { Button, CircularProgress } from "@mui/material";
import styled from "@emotion/styled";
import styles from "./styles.module.css";

const Quote = () => {
  const dispatch = useDispatch();

  const { quote, author, isLoading, error } = useSelector(
    (state) => state.quote
  );

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, []);

  const handleNewQuote = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div>
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <CircularProgress color="primary" />
        </div>
      ) : (
        <div className={styles.quoteContainer}>
          <p className={styles.quote}>{quote}</p>
          <p className={styles.author}>— {author}</p>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <Button variant="contained" onClick={handleNewQuote}>
            Новая цитата
          </Button>
        </div>
      )}
    </div>
  );
};

export default Quote;
