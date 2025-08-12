import React from "react";

function ThemeBox({ theme }) {
  // console.log(theme);
  const styles = {
    light: {
      backgroundColor: "#f0f0f0",
      color: "#333",
      border: "1px solid #ccc",
    },
    dark: {
      backgroundColor: "#333",
      color: "f0f0f0",
      border: "1px solid #555",
    },
  };
  return (
    <div
      style={{
        ...styles[theme],
        padding: "20px",
        width: "150px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    ></div>
  );
}

export default ThemeBox;
