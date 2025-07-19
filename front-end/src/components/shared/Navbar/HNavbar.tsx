"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import Logo from "../Logo/Logo";
import Link from "next/link";
import useUserInfo from "@/hooks/useUserInfo";
import dynamic from "next/dynamic";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const navBarItems = [
  {
    title: "Consultation",
    path: "/consultation",
    id: 1,
  },
  {
    title: "Diagnostics",
    path: "/diagnostics",
    id: 3,
  },
  {
    title: "Doctors",
    path: "/doctors",
    id: 33,
  },
];
const drawerWidth = 240;

export default function HNavbar(props: Props) {
  const userInfo = useUserInfo();
  const AuthButton = dynamic(
    () => import("@/components/ui/AuthButton/AuthButton"),
    { ssr: false }
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY >= 80) {
        setScrollNavbar(true);
      } else {
        setScrollNavbar(false);
      }
    };

    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "20px",
          marginLeft: "15px",
        }}
      >
        {navBarItems.map((item) => (
          <>
            <Typography
              key={item?.id}
              component={Link}
              href={item?.path}
              color="#000"
            >
              {item?.title}
            </Typography>
          </>
        ))}
        {userInfo?.email ? (
          <Typography component={Link} href="/dashboard" color="#000">
            Dashboard
          </Typography>
        ) : null}
      </Stack>
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          transition: "0.3s",
          backgroundColor: scrollNavbar ? "#fff" : "transparent",
          boxShadow: scrollNavbar ? 1 : "none",
          color: scrollNavbar ? "#000" : "#fff",
        }}
        elevation={0}
        color="inherit"
        component="nav"
      >
        <Toolbar>
          <Stack
            direction="row"
            spacing={4}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              mr: 2,
              display: { sm: "none" },
              width: "100%",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{}}
            >
              <MenuIcon sx={{ color: "red" }} />
            </IconButton>
            <AuthButton />
          </Stack>

          <Box sx={{ display: { xs: "none", sm: "block" }, width: "100%" }}>
            <Stack
              py={2}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Logo isBgWhite={true} />

              <Stack direction="row" justifyContent="space-between" gap={4}>
                {navBarItems?.map((item) => (
                  <>
                    <Typography
                      key={item?.id}
                      component={Link}
                      href={item?.path}
                      color="#000"
                    >
                      {item?.title}
                    </Typography>
                  </>
                ))}
                {userInfo?.email ? (
                  <Typography component={Link} href="/dashboard" color="#000">
                    Dashboard
                  </Typography>
                ) : null}
              </Stack>

              <AuthButton />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
