import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import VisualizeData from "./Components/VisualizeData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" autoClose={2500} role="alert" />
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
