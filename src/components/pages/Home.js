import React, { useEffect } from "react";

// React-redux
import { useDispatch, useSelector } from "react-redux";

// React router dom
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dummyState = useSelector((state) => state.dummyState);

  useEffect(() => {
    dispatch({
      type: "SET_DUMMY_STATE",
      dummyState: "new value of dummy state",
    });
  }, []);

  return (
    <div>
      <div>Home page</div>
      <button onClick={() => navigate("/about")}>Go to About page</button>
      <div>{dummyState}</div>
    </div>
  );
};

export default Home;
