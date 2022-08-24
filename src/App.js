import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./componentes/header/header";
import Home from "./rutas/home/home";
import About from "./rutas/about/about";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
