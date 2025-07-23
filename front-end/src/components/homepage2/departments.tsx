import assets from "@/assets";
import { Box, Container } from "@mui/material";
import Image from "next/image";

const Departments = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ height: "700px " }}>
        <Box sx={{ zIndex: 0, width: "100%", height: `calc(100% - 122px)` }}>
          <Image
            src={assets?.layout.banner1}
            alt="banner image "
            style={{ objectFit: "cover" }}
          />
        </Box>
        Heelo this is DesktopDatePicker sectionn
      </Container>
    </>
  );
};

export default Departments;
