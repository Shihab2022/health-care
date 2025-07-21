"use client";
import assets from "@/assets";
import { useRef } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import type { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ValuesCard = () => {
  return (
    <Box
      sx={{
        height: "500px",
        width: "400px",
        background: "#fff",
        boxShadow: 4,
        padding: "55px 50px",
        borderRadius: "20px",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image
          src={assets.svgs.compassion}
          alt="compassion"
          height={100}
          width={100}
        />
      </Stack>
      <Typography variant="h2" sx={{ fontSize: "50px ", fontWeight: 400 }}>
        Excellence
      </Typography>
      <Typography variant="subtitle1">
        We are committed to providing excellent medical care and services to our
        patients. We believe in continuously improving our skills, knowledge,
        and resources to ensure that we deliver the highest quality care
        possible.
      </Typography>
    </Box>
  );
};

const ValuesSection = () => {
  const swiperRef = useRef<SwiperClass>();
  return (
    <>
      <Container maxWidth="xl" sx={{ height: "500px " }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ height: "100%" }}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="h1" sx={{ fontSize: "70px", fontWeight: 650 }}>
              {" "}
              Our Values
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                height: "100%",
              }}
            >
              <ArrowCircleLeftOutlinedIcon
                sx={{
                  fontSize: "70px",
                  cursor: "pointer",
                  color: "#86bbf1",
                  fontWeight: 100,
                }}
                onClick={() => swiperRef.current?.slidePrev()}
              />
              <ArrowCircleRightOutlinedIcon
                onClick={() => swiperRef.current?.slideNext()}
                sx={{
                  fontSize: "70px",
                  cursor: "pointer",
                  color: "#86bbf1",
                  fontWeight: 100,
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={8} sx={{ position: "relative" }}>
            <Box
              sx={{
                background: "linear-gradient(154deg, #d2eaef, #86bbf1)",
                height: "80%",
                width: "100%",
                borderRadius: "25px",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                left: 25,
                top: "150px",
                width: "calc(100% - 10px)",
                overflow: "hidden",
              }}
            >
              <Swiper
                modules={[Autoplay, Navigation]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                spaceBetween={220}
                slidesPerView={3}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  600: { slidesPerView: 2 },
                  900: { slidesPerView: 3 },
                }}
                allowTouchMove={true}
                style={{ overflow: "hidden" }}
              >
                <SwiperSlide>
                  <ValuesCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ValuesCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ValuesCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ValuesCard />
                </SwiperSlide>
              </Swiper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ValuesSection;
