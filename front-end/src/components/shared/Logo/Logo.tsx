import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Logo = ({ isBgWhite }: { isBgWhite: boolean }) => {
  return (
    <>
      {isBgWhite ? (
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
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
          color="white"
        >
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>
      )}
    </>
  );
};

export default Logo;
