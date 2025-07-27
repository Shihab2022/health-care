import assets from "@/assets";
import { OurValuesConfig } from "@/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const ValuesCard = ({ value }: any) => {
  const { icon, title } = value;
  return (
    <Box
      sx={{
        height: "350px",
        width: "300px",
        background: "#fff",
        padding: "25px 20px",
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
    </Box>
  );
};
const Departments = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ height: "400px " }}>
        <Box
          sx={{
            zIndex: 0,
            width: "100%",
            height: "400px ",
            // height: `calc(100% - 122px)`
          }}
        >
          <Image
            src={assets?.layout.banner1}
            alt="banner image "
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "inherit",
            width: "100%",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              position: "absolute",
              left: 25,
              top: "150px",
              width: "100%",
              overflowX: "hidden",
              overflowY: "auto",
              zIndex: 100,
            }}
          >
            {OurValuesConfig.map((c) => (
              <>
                <ValuesCard value={c} />
              </>
            ))}
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Departments;
