import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

//import Recent from "../MainSpaceLayout/Recent";

import { useNavigate } from "react-router-dom";

import { getLoggedInUserDetails } from "../../util/loginUtil";
import NavBar from "../common/NavBar";

function ResponsiveAppBar() {
  const navigate = useNavigate();

  useEffect(() => {
    getLoggedInUserDetails(navigate, "/mainspace");
  }, []);

  const settings = [
    {
      title: "Create Blog",
      action: () => {
        navigate("/blog");
      },
    },
    {
      title: "Profile",
      action: () => {
        navigate("/profile");
      },
    },
    {
      title: "Logout",
      action: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
      },
    },
  ];

  return (
    <Box>
      <NavBar />
      recent
    </Box>
  );
}
export default ResponsiveAppBar;

/*

<button> your button </button>
let ary = ["Open","Edit","Close"]
// Tujhe ye 3 buttons render krne hain

// Js mein map use hota hai
// [ARRAY].map(callback)
// callback is a function that runs when parent "map()" is executed
// So 3 elements in ary so map() will be called 3 times and callback will run 3 times
// Callback is just a function passed in another function in simple words
// For map function, it is (item,index) => { // your logic }

// So to map an array of 5 numbers,
[1,2,3,4,5].map((yourItem,yourIndex) => {
  console.log(yourItem*5); // 5,10,15,20,25 output
  console.log(yourIndex) // 1,2,3,4,5 output
})

here, (yourItem,yourIndex) => {
  console.log(yourItem*5); // 5,10,15,20,25 output
  console.log(yourIndex) // 1,2,3,4,5 output

  return (
    <button>{yourItem}</button>
  )

} IS THE CALLBACK
for ARRAY [1,2,3,4,5] .map()



*/
