import React from "react";
import axios from "axios";

class AddingStudent extends React.Component {
  state = {
    input: [],
  };

  render() {
    const saveData = () => {
      console.log(this.state);
      axios
        .post("../api/students", {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          gpa: this.state.gpa,
          imgurl: this.state.imgurl,
          campusId: this.state.campusId,
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
            name="firstname"
            type="text"
            placeholder="First Name"
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
            name="lastname"
            type="text"
            placeholder="Last Name"
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
            name="email"
            type="text"
            placeholder="Email"
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
            name="gpa"
            type="text"
            placeholder="GPA"
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
          <input
            name="campusId"
            type="text"
            placeholder="Campus ID"
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

export default AddingStudent;
