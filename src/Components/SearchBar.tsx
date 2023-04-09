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
    console.log("resssss", res);
    // try {
      if (res.data.length > 0) {
        var fetchedData = res.data[0];


        //let index1 = 0;
        //for (const item of res.data[0].apiComponentList) {
        for(let index1 = 0; index1<res.data[0].apiComponentList.length; index1++){
          const item = res.data[0].apiComponentList[index1];
          console.log(index1);
          if (item.ruleConfigExecution) {
            let index2 = 0;
            for (const item1 of item.ruleConfigExecution) {
              const name = item1.name;
              var requestOptions = {
                method: "GET",
                //headers: myHeaders,
                redirect: "follow",
              };
              fetch(
                `http://localhost:8080/service/rfind/${name}`
              )
                .then((response) => response.text())
                .then((result) => {
                  console.log("lhs", index1, fetchedData.apiComponentList);
                  console.log("rhs", result[0]);
                  fetchedData.apiComponentList[index1].ruleConfigExecution[index2] = result[0]
                })
                .catch((error) => console.log("error", error));

              // axios.get(`http://localhost:8080/service/rfind/${name}`).then((res1: any)=>{
              //   //console.log("aaa",res1.data[0]);
              //   //console.log(index2);
              //   console.log("lhs", fetchedData.apiComponentList[0]);
              //   //fetchedData.apiComponentList.ruleConfigExecution[index] = res1.data[0];
              //   index2++;
              // })
            }
          }
          
          // index1++;
        }

        navigate("/visualize", { state: JSON.stringify(fetchedData) });
        return;
      }
    //   toast.error("Incorrect name provided");
    // } catch (error) {
    //   toast.error("Incorrect name1 provided");
    // }
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
