import React from "react";
import { Box, TextField, Button } from "@mui/material";

export default function ChatInput({ input, setInput, onAsk, onSave }) {
  return (
    <Box display="flex" gap={1}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Message Bot AI..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={onAsk} variant="contained" color="primary">Ask</Button>
      <Button onClick={onSave} variant="contained" color="primary">Save</Button>
    </Box>
  );
}