import React, { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"

export const DarkToggle = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <Toggle
      className="dark-mode-toggle"
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
    />
  );
};