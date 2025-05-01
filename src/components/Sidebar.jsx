import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

export default function Sidebar() {
  return (
    <Box p={2}>
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <ChatIcon />
        <Typography variant="h6">New Chat</Typography>
      </Box>
      <Button fullWidth variant="contained" color="primary">Past Conversations</Button>
    </Box>
  );
}