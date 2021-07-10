import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontType: "bold",
    fontFamily: "Courier, sans-serif",
    fontSize: "35px",
    color: "#B1D4E0",
  },
  appBar: {
    backgroundColor: "#11153e",
    shadows: ["none"],
  },
  data: {
    marginTop: "50px",
    textAlign: "center",
    margin: "auto",
    height: "auto",
    width: "800px",
    backgroundColor: "#1C3F60",
    borderRadius: "50px",
  },
  imgs: {
    maxHeight: "100%",
    maxWidth: "100%",
    marginBottom: "-4px",
    borderRadius: "40px",
  },
  links: {
    textDecoration: "none",
  },
}));

const StudentView = (props) => {
  const classes = useStyles();
  const { student } = props;
  return (
    <div>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            STUTE-AMPUS
          </Typography>

          <Link className={classes.links} to={"/"}>
            <Button
              variant="contained"
              style={{
                marginRight: "10px",
                color: "#0B1320",
                backgroundColor: "#AFC1D0",
              }}
            >
              Main Menu
            </Button>
          </Link>

          <Link className={classes.links} to={"/campuses"}>
            <Button
              variant="contained"
              color="primary"
              style={{
                marginRight: "10px",
                color: "#0B1320",
                backgroundColor: "#AFC1D0",
              }}
            >
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={"/students"}>
            <Button
              variant="contained"
              style={{ color: "#0B1320", backgroundColor: "#AFC1D0" }}
            >
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.data} style={{ padding: "20px" }}>
        <h1 style={{ color: "#AFC1D0", fontSize: "80px" }}>
          {student.firstname + " " + student.lastname}
        </h1>
        <p style={{ color: "#AFC1D0", fontSize: "30px" }}>
          {"Email: " + student.email}
        </p>
        <p style={{ color: "#AFC1D0", fontSize: "30px" }}>
          {"GPA: " + student.gpa}
        </p>

        <div
          style={{
            width: "80%",
            margin: "30px auto",
            backgroundColor: "#11153e",
            borderRadius: "100px",
          }}
        >
          <p
            style={{
              color: "#AFC1D0",
              fontSize: "40px",
              marginTop: "45px",
              marginBottom: "20px",
            }}
          >
            {student.campus
              ? `Student is currently enrolled at ${student.campus.name}`
              : "Student is not enrolled at a university"}
          </p>
        </div>

        <img
          src={student.imgurl}
          className={classes.imgs}
          alt={student.name + " campus"}
          style={
            student.imgurl !==
            "https://img.icons8.com/material-rounded/48/000000/nothing-found.png"
              ? { height: "100%", width: "100%" }
              : null
          }
        ></img>
      </div>
      <div style={{height: "50px"}}>
      </div>
    </div>
  );
};

export default StudentView;
