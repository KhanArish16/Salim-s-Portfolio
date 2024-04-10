import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./style/Global.css";
import bgImg from "./assets/bg-svg-lines.png";
import AboutMe from "./pages/AboutMe";
import Work from "./pages/Work";

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
        <img src={bgImg} alt="bgimg" className="Bg-img" />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
