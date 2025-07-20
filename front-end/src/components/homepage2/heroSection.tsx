import assets from "@/assets";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HeroSection2 = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 1, md: 4 },
        }}
      >
        <Box sx={{ zIndex: 0 }}>
          <Image
            src={assets?.layout.banner1}
            alt="banner image "
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="flex-end"
          justifyContent="space-between"
          spacing={4}
          sx={{
            width: "100%",
            px: { xs: 6, md: 10 },
            height: "100vh",
            zIndex: 100,
          }}
        >
          <Stack
            direction="column"
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "flex-start",
              maxWidth: { xs: "100%", md: "50%" },
              height: "100vh",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2rem", md: "3.5rem" },
                }}
              >
                Your Partner in <br /> Health and Wellness
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 3,
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                }}
              >
                We are committed to providing you with the best medical and
                healthcare services to help you live healthier and happier.
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  mt: 4,
                  borderRadius: 10,
                  px: 3,
                  py: 1.5,
                  textTransform: "none",
                }}
              >
                See how we work
              </Button>
            </Box>
          </Stack>

          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "80%" },
              height: { xs: "auto", md: "100vh" },
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Image
              src={assets?.layout.home1}
              alt="Doctors"
              //   fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default HeroSection2;
