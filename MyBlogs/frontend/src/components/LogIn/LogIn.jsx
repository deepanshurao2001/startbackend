import React, { useEffect, useState } from "react";
import "./LogIn.css";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
//import Link from '@mui/material/Link'
import ModalUnstyled from "../CreateAccount/CreateAccount";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getLoggedInUserDetails } from "../../util/loginUtil";

// In case of Box.js error, delete folder in node_modules => .vite => deps and restart
export default function LogIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const logIn = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        logDetails: { username, password },
      });
      const token = response.data.token;
      // Store token in local storage
      localStorage.setItem("token", token);
      console.log("Login successful");
      navigate("/mainspace");
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
    }
  };

  useEffect(() => {
    getLoggedInUserDetails(navigate, "/mainspace");
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2016/04/06/10/08/background-1311251_1280.jpg)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // Fixed background
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: "white",
          borderRadius: "10px",
          opacity: "0.7",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "500px",
            width: "380px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ color: "Pink", marginBottom: "-10px" }}
            >
              Welcome
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                marginTop: "0px",
                marginBottom: "50px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              New User ? <ModalUnstyled />
            </Typography>
          </Box>

          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              "& > :not(style)": { m: 1, width: "25ch" },
              marginBottom: "20px",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Username"
              variant="filled"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              sx={{
                backgroundColor: "#FBBCE9",
                "&:hover": { backgroundColor: "LightPink" },
                borderRadius: "20px",
                color: "black",
              }}
              onClick={() => logIn()}
            >
              LogIn
            </Button>
          </Box>

          <Divider sx={{ width: "300px" }}>
            <Chip label="OR" size="small" sx={{ width: "200px" }} />
          </Divider>

          <Button
            sx={{
              backgroundColor: "#FBBCE9",
              "&:hover": { backgroundColor: "LightPink" },
              borderRadius: "20px",
              margin: "20px",
              color: "black",
            }}
          >
            Continue with Google
          </Button>
        </Box>
        <Box
          sx={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2020/05/05/16/01/background-bokeh-5133696_1280.jpg')",
            backgroundSize: "cover",
            height: "500px",
            width: "380px",
            margin: "10px",
            borderRadius: "10px",
          }}
        ></Box>
      </Box>
    </div>
  );
}
