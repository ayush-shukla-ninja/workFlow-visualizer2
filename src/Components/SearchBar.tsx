import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SearchBar = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    if (text.trim().length === 0) {
      toast.error("Text should not be empty");
      return;
    }
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    const res = await axios.get(
      `http://localhost:8080/service/sfind/${text}`,
      config
    );
    try {
      if (res.data.length > 0) {
        const fetchedData = res.data[0];
        navigate("/visualize", { state: JSON.stringify(fetchedData) });
        return;
      }
      toast.error("Incorrect name provided");
    } catch (error) {
      toast.error("Incorrect name provided");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          width: "70%",
          margin: "6rem auto auto auto",
        }}
      >
        <input
          type="text"
          name="search-bar"
          id="searchBar"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="visualize-button" onClick={handleClick}>
          Visualize
        </button>
      </div>
    </>
  );
};

export default SearchBar;
