import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/newsAction";

function News() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return <div>fsdgs</div>;
}

export default News;
