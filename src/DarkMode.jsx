import { useState } from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "./DarkMode.css";

export default function DarkMode({ mode, setMode }) {
  return (
    <div className="darkMode">
      <IconButton
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className="darkModeBtn"
      >
        {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </div>
  );
}
