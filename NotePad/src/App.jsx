import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  const [searchString, setSearchString] = useState("");

  const navigate = useNavigate();

  const addNote = async () => {
    let title = window.prompt("Enter note title");

    //let uniqueId = Date.now()
    let noteBody = {
      id: "",
      title: title,
      content: "",
    };
    const { data } = await axios.post("http://localhost:3000/notes/add", {
      noteData: noteBody,
    });
    console.log(data.data);
    setNotes([...notes, data.data]);

    //                                navigate("/preview/"+uniqueId)
  };

  const getNotes = async () => {
    let { data } = await axios.get("http://localhost:3000/notes/get");
    console.log("data :", data);
    setNotes(data.data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const deletenote = async (id) => {
    console.log(id);
    await axios.post("http://localhost:3000/notes/delete", {
      reqDelNoteId: id,
    });
    getNotes();
  };

  const handleSearch = (text) => {
    setSearchString(text);
    if (text.length <= 0) {
      setFilteredNotes(notes);
    } else {
      // text is variable input we get from input field

      // "notes" is a state that contains ARRAY of all notes, we placed data in it using geeNotes() function
      // Then we
      let newNotes = notes.filter((note) => String(note.title).includes(text));
      setFilteredNotes(newNotes);
    }
  };

  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <TextSnippetOutlinedIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Notes App
            </Typography>

            <Stack sx={{ p: 1 }} spacing={2} direction="row">
              <TextField
                placeholder="Search"
                value={searchString}
                onChange={(e) => handleSearch(e.target.value)}
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#1A1A1A",
                  borderRadius: 2,
                }}
              />

              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => addNote()}
                sx={{
                  color: "#0000ff",
                  backgroundColor: "#FFFFFF",
                  "&: hover": {
                    backgroundColor: "#FFFFFF",
                  },

                  p: 2,
                }}
                disableElevation={true}
              >
                Create
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          //maxWidth: 300,
          borderRadius: 1,
        }}
      >
        {filteredNotes.map((note) => (
          <Card
            key={note.id}
            onClick={() => navigate("/preview/" + note._id)}
            sx={{ minWidth: 260, p: 1, m: 1 }}
            style={{ backgroundColor: "#80B8B8" }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {note?.title || "untitled"}
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "#1A1A1A", padding: "5px" }}
              >
                {note?.content || "NO description"}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  deletenote(note._id);
                }}
                variant="contained"
                href="#contained-buttons"
              >
                Delete Note
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default App;
