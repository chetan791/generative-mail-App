import { useContext } from "react";

import "./App.css";
import { Navbar } from "./Components/Navbar";
import { MainRoutes } from "./pages/MainRoutes";
import MyContext from "./Context/MyContext";

function App() {
  const { value } = useContext(MyContext);
  console.log(value);
  return (
    <>
      {value.isAuth && <Navbar />}
      <MainRoutes />
    </>
  );
}

export default App;
