import React, { useState } from "react";
import { Box, Grid, Typography, Button, Paper, TextField } from "@mui/material";
import Sidebar from "../components/Sidebar";
import ChatPromptCards from "../components/ChatPromptCards";
import ChatMessages from "../components/ChatMessages";
import ChatInput from "../components/ChatInput";
import logo from "../asstes/Ai-Logo.png"; // placeholder

export default function Main() {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");

  const handleAsk = () => {
    if (!input.trim()) return;
    const newEntry = { user: "You", message: input };
    const aiResponse = { user: "Bot AI", message: `Response to: ${input}` };
    setChat([...chat, newEntry, aiResponse]);
    setInput("");
  };

  const handleSave = () => {
    localStorage.setItem("chatHistory", JSON.stringify(chat));
    alert("Chat saved!");
  };

  return (
    <Grid container>
      <Grid item xs={12} md={3} sx={{ backgroundColor: "#E5DAF8", minHeight: "100vh" }}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={9} p={3}>
        <Typography variant="h5" fontWeight="bold">How Can I Help You Today?</Typography>
        <Box my={2} display="flex" justifyContent="center">
          <img src={logo} alt="logo" style={{ borderRadius: "50%", width: 60 }} />
        </Box>
        {chat.length === 0 && <ChatPromptCards onSelect={setInput} />}
        <ChatMessages chat={chat} />
        <ChatInput
          input={input}
          setInput={setInput}
          onAsk={handleAsk}
          onSave={handleSave}
        />
      </Grid>
    </Grid>
  );
}