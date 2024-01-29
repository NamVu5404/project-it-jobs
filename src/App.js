import { useDispatch } from "react-redux";
import "./App.css";
import AllRoute from "./components/AllRoute";
import { getCookie } from "./helpers/cookies";
import { isLogin } from "./actions";

function App() {
  const dispatch = useDispatch();
  const token = getCookie("token");

  if (token) {
    dispatch(isLogin(true));
  } else {
    dispatch(isLogin(false));
  }

  return (
    <>
      <AllRoute />
    </>
  );
}

export default App;
