import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Logo = ({ isBgWhite }: { isBgWhite: boolean }) => {
  return (
    <>
      {isBgWhite ? (
        <Typography
          color="#000"
          variant="h4"
          component={Link}
          href="/"
          fontWeight={600}
        >
          P
          <Box component="span" color="#000">
            H
          </Box>{" "}
          Health Care
        </Typography>
      ) : (
        <Typography
          variant="h4"
          component={Link}
          href="/"
          fontWeight={600}
          color="#000"
        >
          P
          <Box component="span" color="#000">
            H
          </Box>{" "}
          Health Care
        </Typography>
      )}
    </>
  );
};

export default Logo;
