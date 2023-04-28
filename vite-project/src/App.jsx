import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact="true"
          path="/"
          element={<Landing />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/skills"
          element={<Skills />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
