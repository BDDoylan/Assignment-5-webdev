import React from "react";
import axios from "axios";

class AddingCampus extends React.Component {
  state = {
    input: [],
  };

  render() {
    const saveData = () => {
      console.log(this.state);
      axios
        .post("../api/campuses", {
          name: this.state.name,
          address: this.state.address,
          description: this.state.description,
          imgurl: this.state.imgurl,
        })
        .then(function (response) {
          //Successful callback
          console.log(response);
        })
        .then(function (error) {
          //Error callback
          console.log(error);
        })
        .then(function () {
          //Always callback
          console.log("Always running");
        });
    };

    const saveInput = (event) => {
      let key = event.target.name;
      this.setState({ [key]: event.target.value });
    };

    return (
      <div>
        <form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#11153e",
            height: "100px",
            marginTop: "-21px",
            whiteSpace: "nowrap",
            flexWrap: "wrap",
            overflow: "auto",
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={saveInput}
            style={{
              backgroundColor: "#AFC1D0",
              margin: "10px",
              height: "40px",
              width: "200px",
              color: "#1C3F60",
              border: "8px solid #1C3F60",
              outline: "none",
              fontSize: "20px",
              flex: 1,
            }}
          ></input>
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={saveInput}
            style={{
              backgroundColor: "#AFC1D0",
              margin: "10px",
              height: "40px",
              width: "200px",
              color: "#1C3F60",
              border: "8px solid #1C3F60",
              outline: "none",
              fontSize: "20px",
              flex: 1,
            }}
          ></input>
          <input
            name="description"
            type="text"
            placeholder="Description"
            onChange={saveInput}
            style={{
              backgroundColor: "#AFC1D0",
              margin: "10px",
              height: "40px",
              width: "200px",
              color: "#1C3F60",
              border: "8px solid #1C3F60",
              outline: "none",
              fontSize: "20px",
              flex: 1,
            }}
          ></input>
          <input
            name="imgurl"
            type="text"
            placeholder="Image URL"
            onChange={saveInput}
            style={{
              backgroundColor: "#AFC1D0",
              margin: "10px",
              height: "40px",
              width: "200px",
              color: "#1C3F60",
              border: "8px solid #1C3F60",
              outline: "none",
              fontSize: "20px",
              flex: 1,
            }}
          ></input>
          <button
            onClick={saveData}
            style={{
              backgroundColor: "#AFC1D0",
              margin: "10px",
              height: "40px",
              width: "200px",
              color: "#1C3F60",
              border: "8px solid #1C3F60",
              outline: "none",
              fontSize: "20px",
              flex: 1,
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddingCampus;
