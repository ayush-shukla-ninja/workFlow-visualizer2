import { useState } from "react";
import { useNavigate } from "react-router-dom";

const isValidJSON = (payload: string) => {
  try {
    JSON.parse(payload);
    return true;
  } catch (error) {
    return false;
  }
};

const Landing = () => {
  const navigate = useNavigate();
  const [fileData, setFileData] = useState(null);
  let fileReader: any;

  const handleFileRead = () => {
    const uploadedFileData = fileReader.result;
    setFileData(uploadedFileData);
  };

  const handleFileChosen = (file: any) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const handleVisualizeClick = () => {
    if (!fileData || !isValidJSON(fileData)) {
      alert("Data not valid!!");
      return;
    }
    navigate("/visualize", { state: fileData });
    return;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* <input type="file" name="" id="" 
        accept=".json"
        onChange={e=>handleFileChosen(e.target.files[0])}
        /> */}

        <label htmlFor="images" className="drop-container">
          <span className="drop-title">Drop files here</span>
          or
          <input
            type="file"
            id="images"
            accept=".json"
            required
            onChange={(e) =>
              handleFileChosen(e.target.files?.length && e.target.files[0])
            }
          />
        </label>

        <button className="visualize-button" onClick={handleVisualizeClick}>
          Visualize
        </button>
      </div>
    </>
  );
};

export default Landing;
