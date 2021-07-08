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
    backgroundColor: "#0B1320",
    shadows: ["none"],
  },
  greeting: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#0B1320",
    borderRadius: "260px",
    width: "50%",
    height: "500px",
    marginTop: "350px",
    margin: "auto",
    minWidth: "700px",
  },
  links: {
    textDecoration: "none",
  },
}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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

      <div className={classes.greeting}>
        <h1 style={{fontSize: "90px", textAlign: "center", margin: "auto", color: "#B1D4E0"}}>WELCOME TO STUTE-AMPUS</h1>
      </div>
    </div>
  );
};

export default HomePageView;
