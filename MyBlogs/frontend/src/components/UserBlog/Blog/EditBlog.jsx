// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import NavBar from "../../common/NavBar";
// import { getLoggedInUserDetails } from "../../../util/loginUtil";
// import { useNavigate } from "react-router-dom";
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   MenuItem,
//   Select,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import axios from "axios";

// const EditBlog = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDesctiption] = useState("");
//   const [tags, setTags] = useState([]);
//   const [selectedTags, setSelectedTags] = useState([]);
//   const [showTagDialog, setShowTagDialog] = useState(false);
//   const [tagTitle, setTagTitle] = useState("");

//   const navigate = useNavigate();
//   useEffect(() => {
//     getLoggedInUserDetails(navigate, "/blog");
//   }, []);

//   const handleTagChange = (newTags) => {
//     console.log("newTags: ", newTags);
//     if (newTags.find((tag) => tag === "default")) {
//       // Open new tag dialog
//       console.log("Hi");
//       setShowTagDialog(true);
//     }

//     setSelectedTags(newTags);
//   };

//   const saveTag = async () => {
//     try {
//       let userRaw = localStorage.getItem("user");
//       let user = JSON.parse(userRaw);

//       const res = await axios.post("http://localhost:5000/api/tags/create", {
//         title: tagTitle,
//         author: user?._id,
//       });

//       if (res) {
//         setShowTagDialog(false);
//         setTagTitle("");
//         setTags([...tags, res.data.data]);
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Error");
//     }
//   };

//   const getMyTags = async () => {
//     try {
//       let userRaw = localStorage.getItem("user");
//       let user = JSON.parse(userRaw);

//       const res = await axios.post("http://localhost:5000/api/tags/get", {
//         authorId: user?._id,
//       });

//       if (res) {
//         setTags(res.data.data || []);
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Error");
//     }
//   };

//   useEffect(() => {
//     getMyTags();
//   }, []);

//   return (
//     <Box>
//       <NavBar />
//       <Box sx={{ p: 2 }}>
//         <Stack direction="column" spacing={2}>
//           <Box>
//             <Typography variant="h6" gutterBottom>
//               Blog Title
//             </Typography>
//             <TextField
//               fullWidth
//               placeholder="Eg. Machine Learning"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </Box>
//           <Box>
//             <Typography variant="h6" gutterBottom>
//               Blog Description
//             </Typography>
//             <TextField
//               fullWidth
//               placeholder="Eg. Machine Learning is a subset of Artificial Intellegence"
//               value={description}
//               onChange={(e) => setDesctiption(e.target.value)}
//               rows={4}
//               multiline={true}
//             />
//           </Box>
//           <Box>
//             <Typography variant="h6" gutterBottom>
//               Blog Tags
//             </Typography>

//             <Select
//               value={selectedTags}
//               onChange={(e) => handleTagChange(e.target.value)}
//               fullWidth
//               displayEmpty
//               multiple={true}
//             >
//               <MenuItem value="default">Create New +</MenuItem>
//               {tags.map((tag, index) => (
//                 <MenuItem value={tags?._id} key={index}>
//                   {tag?.title}
//                 </MenuItem>
//               ))}
//             </Select>
//           </Box>
//         </Stack>
//       </Box>
//       <Dialog open={showTagDialog} onClose={() => setShowTagDialog(false)}>
//         <DialogTitle>Create Tag</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Enter the title of new tag</DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             fullWidth
//             variant="standard"
//             placeholder="Eg. Science"
//             value={tagTitle}
//             onChange={(e) => setTagTitle(e.target.value)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setShowTagDialog(false)}>Cancel</Button>
//           <Button onClick={() => saveTag()}>Create</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default EditBlog;
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import NavBar from "../../common/NavBar";
import { getLoggedInUserDetails } from "../../../util/loginUtil";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [showTagDialog, setShowTagDialog] = useState(false);
  const [tagTitle, setTagTitle] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getLoggedInUserDetails(navigate, "/blog");
    getMyTags();
  }, [navigate]);

  const handleTagChange = (newTags) => {
    if (newTags.includes("default")) {
      // Open new tag dialog
      setShowTagDialog(true);
    } else {
      setSelectedTags(newTags);
    }
  };

  const saveTag = async () => {
    try {
      let userRaw = localStorage.getItem("user");
      let user = JSON.parse(userRaw);

      const res = await axios.post("http://localhost:5000/api/tags/create", {
        title: tagTitle,
        author: user?._id,
      });

      if (res) {
        setShowTagDialog(false);
        setTagTitle("");
        setTags([...tags, res.data.data]);
      }
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

  const getMyTags = async () => {
    try {
      let userRaw = localStorage.getItem("user");
      let user = JSON.parse(userRaw);

      const res = await axios.post("http://localhost:5000/api/tags/get", {
        authorId: user?._id,
      });

      if (res) {
        setTags(res.data.data || []);
      }
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

  return (
    <Box>
      <NavBar />
      <Box sx={{ p: 2 }}>
        <Stack direction="column" spacing={2}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Blog Title
            </Typography>
            <TextField
              fullWidth
              placeholder="Eg. Machine Learning"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Blog Description
            </Typography>
            <TextField
              fullWidth
              placeholder="Eg. Machine Learning is a subset of Artificial Intelligence"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              multiline={true}
            />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Blog Tags
            </Typography>

            <Select
              value={selectedTags}
              onChange={(e) => handleTagChange(e.target.value)}
              fullWidth
              displayEmpty
              multiple={true}
            >
              <MenuItem disabled value="">
                Select Tags
              </MenuItem>
              {tags.map((tag) => (
                <MenuItem value={tag._id} key={tag._id}>
                  {tag.title}
                </MenuItem>
              ))}
              <MenuItem value="default">Create New +</MenuItem>
            </Select>
          </Box>
        </Stack>
      </Box>
      <Dialog open={showTagDialog} onClose={() => setShowTagDialog(false)}>
        <DialogTitle>Create Tag</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter the title of new tag</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            fullWidth
            variant="standard"
            placeholder="Eg. Science"
            value={tagTitle}
            onChange={(e) => setTagTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowTagDialog(false)}>Cancel</Button>
          <Button onClick={() => saveTag()}>Create</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditBlog;
