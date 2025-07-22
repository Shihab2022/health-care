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
import { OurValuesConfig } from "@/config";

const ValuesCard = ({ value }: any) => {
  const { icon, title, description } = value;
  return (
    <Box
      sx={{
        height: "470px",
        width: "400px",
        background: "#fff",
        padding: "55px 50px",
        borderRadius: "20px",
        zIndex: 200,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-40px)",
          boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
        },
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
        <Image src={icon} alt="compassion" height={100} width={100} />
      </Stack>
      <Typography
        variant="h2"
        sx={{
          fontSize: "40px ",
          fontWeight: 700,
          textAlign: "center",
          marginY: "15px",
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ textAlign: "center" }} variant="subtitle1">
        {description}
      </Typography>
    </Box>
  );
};

const ValuesSection = () => {
  const swiperRef = useRef<SwiperClass>();
  return (
    <>
      <Container maxWidth="xl" sx={{ height: "700px " }}>
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
          <Grid
            item
            xs={12}
            md={8}
            sx={{ position: "relative", backgroundColor: "inherit" }}
          >
            <Box
              sx={{
                background: "linear-gradient(154deg, #d2eaef, #86bbf1)",
                height: "60%",
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
                overflowX: "hidden",
                overflowY: "auto",
                zIndex: 100,
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
                {OurValuesConfig.map((c) => (
                  <>
                    <SwiperSlide key={c?.id}>
                      <ValuesCard value={c} />
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ValuesSection;
