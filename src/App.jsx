import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/home.jsx";
import { NotFound } from "./pages/NotFound/notFound.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
