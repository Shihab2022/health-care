import { Button } from "@mui/material";
import React from "react";

const HButton = ({ text = "" }) => {
  return (
    <>
      <Button
        sx={{
          backgroundImage:
            "linear-gradient(to right, #43cea2 0%, #185a9d 51%, #43cea2 100%)",
          padding: "15px 45px",
          margin: "10px 0px",
          textAlign: "center",
          textTransform: "uppercase",
          transition: "0.5s",
          backgroundSize: "200% auto",
          color: "white",
          boxShadow: "0 0 20px #eee",
          borderRadius: "15px",
          display: "block",
          "&:hover": {
            backgroundPosition: "right center",
            color: "#fff",
            textDecoration: "none",
          },
        }}
        fullWidth={true}
        type="submit"
      >
        {text}
      </Button>
    </>
  );
};

export default HButton;
