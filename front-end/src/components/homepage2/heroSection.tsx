"use client";
import { useState } from "react";
import assets from "@/assets";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const config = [
  {
    id: 1,
    title: "Hotline",
    text: "123-456-7890",
    icon: <LocalPhoneIcon sx={{ color: "white", fontSize: "40px" }} />,
  },
  {
    id: 155,
    title: "Ambulance",
    text: "876-256-876",
    icon: (
      <DirectionsCarFilledRoundedIcon
        sx={{ color: "white", fontSize: "40px" }}
      />
    ),
  },
  {
    id: 15,
    title: "Location",
    text: "New York, US",
    icon: <LocationOnOutlinedIcon sx={{ color: "white", fontSize: "40px" }} />,
  },
];
const HeroSection2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "110vh",
          position: "relative",
          //   overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 1, md: 4 },
          marginBottom: "200px",
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
                  fontSize: { xs: "2rem", md: "72px" },
                }}
              >
                Your Partner in <br /> Health and Wellness
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  my: 3,
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                }}
              >
                We are committed to providing you with the best medical and
                healthcare services to help you live healthier and happier.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  marginTop: "40px",

                  "&:hover .hover-text::after": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                <PlayCircleOutlineIcon
                  onClick={() => setOpen(true)}
                  sx={{ fontSize: "60px" }}
                />

                <Typography
                  className="hover-text"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    fontSize: "20px",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      height: "2px",
                      width: "100%",
                      backgroundColor: "#000",
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.8s ease",
                    },
                  }}
                >
                  See how we work
                </Typography>
              </Box>
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
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Stack>

        <Box
          sx={{
            background: "#fff",
            boxShadow: 4,
            height: "150px",
            width: "85%",
            position: "absolute",
            left: 150,
            bottom: -75,
            zIndex: 1100,
            borderRadius: "15px",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
              height: "100%",
            }}
          >
            {config?.map((c) => (
              <>
                <Stack
                  key={c?.id}
                  direction="row"
                  spacing={2}
                  sx={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "65px",
                      width: "65px",
                      borderRadius: "100%",
                      background: "#307bc4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {c?.icon}
                  </Box>

                  <Box>
                    <Typography color="#307bc4" variant="h6">
                      {c?.title}
                    </Typography>
                    <Typography>{c?.text}</Typography>
                  </Box>
                </Stack>
              </>
            ))}

            <Button
              variant="contained"
              endIcon={
                <ArrowRightAltIcon
                  className="arrow-icon"
                  sx={{ fontSize: "60px", fontWeight: 700 }}
                />
              }
              sx={{
                padding: "15px 45px",
                borderRadius: "30px",
                backgroundImage:
                  "linear-gradient(to right, #aaafda 0%, #0365c8 51%, #939bde 100%)",
                textTransform: "none",
                transition: "all 0.5s ease",
                "& .arrow-icon": {
                  transition: "transform 0.8s ease",
                },
                "&:hover .arrow-icon": {
                  transform: "translateX(10px)", // 👈 slide right on hover
                },
              }}
            >
              Book Now
            </Button>
          </Stack>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: "1450px" },
            height: { xs: "50vh", md: "750px" },
            bgcolor: "background.paper",
            boxShadow: 24,
            outline: "none",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VcaAVWtP48A?autoplay=1"
            title="YouTube video player"
            style={{ border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </>
  );
};

export default HeroSection2;
