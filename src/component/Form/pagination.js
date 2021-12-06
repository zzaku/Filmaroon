import { Pagination } from "@mui/material";
import { useEffect } from "react";

export const Paginations = ({
  paginate,
  setPaginate,
  setLocate,
  ready,
  setReady,
}) => {
  useEffect(() => {
    if (ready) {
      let newUrl = `http://localhost:4000/Paris/tournage?page=${paginate}`;
      fetch(newUrl)
        .then((res) => res.json())
        .then((data) => setLocate(data));
    }
  }, [paginate]);

  return (
    <Pagination
      count={892}
      variant="outlined"
      color="primary"
      onChange={(e, value) => setPaginate(value) + setReady(true)}
    />
  );
};
