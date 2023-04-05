import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import VisualizeData from "./Components/VisualizeData";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/visualize" element={<VisualizeData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
