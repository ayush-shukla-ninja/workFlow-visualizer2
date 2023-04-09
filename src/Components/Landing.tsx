import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { toast } from "react-toastify";

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
      toast.error("Data is not valid");
      return;
    }

    let fileData1 = JSON.parse(fileData);
    fileData1 = fileData1;
    var fetchedData = fileData1;
    console.log("fetchedData", fetchedData);

    for ( let index1 = 0; index1 < fileData1.apiComponentList.length;
      index1++
    ) {
      const item = fileData1.apiComponentList[index1];
      console.log(index1);
      if (item.ruleConfigExecution) {
        //let index2 = 0;
        // for (const item1 of item.ruleConfigExecution) {
        for (
          let index2 = 0;
          index2 < item.ruleConfigExecution.length;
          index2++
        ) {
          const item1 = item.ruleConfigExecution[index2];
          const name = item1.name;

          fetch(`http://localhost:8080/service/rfind/${name}`)
            .then((response) => response.json())
            .then((result: any) => {
              // console.log("lhs", index1, fetchedData.apiComponentList);
              //console.log("rhs", result);
              fetchedData.apiComponentList[index1].ruleConfigExecution[index2] =
                result[0];
            })
            .catch((error) => console.log("error", error));
        }
      } else if (item.ruleConfigIdentifier) {
        const name = item.ruleConfigIdentifier.name;
        fetch(`http://localhost:8080/service/rfind/${name}`)
          .then((response) => response.json())
          .then((result: any) => {
            // console.log("lhs", index1, fetchedData.apiComponentList);
            //console.log("rhs", result);
            fetchedData.apiComponentList[index1].ruleConfigIdentifier =
              result[0];
          })
          .catch((error) => console.log("error", error));
      }
    }
    //console.log("data1", fetchedData);
    setTimeout(function () {
      navigate("/visualize", { state: JSON.stringify(fetchedData) });
    }, 1500);









    //navigate("/visualize", { state: fileData });
    return;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2rem",
          marginTop: "4rem",
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
      <hr className="hr" />
      <SearchBar />
    </>
  );
};

export default Landing;
