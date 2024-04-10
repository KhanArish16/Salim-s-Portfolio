import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./style/Global.css";
import bgImg from "./assets/bg-svg-lines.png";
import AboutMe from "./pages/AboutMe";
import Work from "./pages/Work";
import colour1 from "./assets/color.svg";
import colour2 from "./assets/color-2.svg";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Work",
      element: <Work />,
    },
    {
      path: "/about-me",
      element: <AboutMe />,
    },
  ]);
  return (
    <div className="App">
      <div className="main-component">
        <img src={colour1} className="BG-colour" />
        <img src={colour2} className="BG-colour-2" />
        <img src={bgImg} alt="bgimg" className="Bg-img" />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
