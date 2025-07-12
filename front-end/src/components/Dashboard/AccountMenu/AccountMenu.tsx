"use client";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/services/auth.services";
import { logoutUser } from "@/services/actions/logoutUser";
import { usePathname } from "next/navigation";
const profileMenuStyle = {
  color: "#A1B0CC",
  fontSize: "30px",
  marginRight: 1,
};

const ProfileMenuItem = ({ onClick, label, icon }: any) => {
  return (
    <MenuItem
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      onClick={() => onClick()}
    >
      {icon}
      <Typography variant="h5" sx={{ fontSize: "15px" }}>
        {label}
      </Typography>
    </MenuItem>
  );
};
export default function AccountMenu(props: any) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userRole, setUserRole] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const { role, email } = getUserInfo() as any;
    setUserRole(role);
    setUserEmail(email);
  }, []);
  const router = useRouter();
  const pathname = usePathname();
  const handleLogout = () => {
    setAnchorElUser(null);
    logoutUser(router);
  };
  const isDashboard = pathname.includes("/dashboard");
  const handleOpenUserMenu = async (event: any) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleMenu = (value: string) => {
    handleCloseUserMenu();
    switch (value) {
      case "dashboard":
        router.push(`/dashboard/${userRole}`);
        break;
      case "profile":
        router.push(`/dashboard/${userRole}/profile`);
        break;
      case "changePassword":
        router.push(`/dashboard/${userRole}/profile`);
        break;
      case "home":
        router.push("/");
        break;
      case "logout":
        handleLogout();
        break;
      default:
        setAnchorElUser(null);
    }
  };
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 0 }}>
        <Stack
          direction="row-reverse"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Tooltip title="Profile Menu">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {/* {userInfo.profileImage ? (
                <Avatar
                  src={userInfo.profileImage ? userImage : userInfo.image}
                />
              ) : ( */}
              <Avatar sx={{ background: "#7c4dff", color: "white" }}>
                {/* {userInfo?.firstname?.slice(0, 1).toUpperCase()} */}
                {"Shihab"?.slice(0, 1).toUpperCase()}
              </Avatar>
              {/* )} */}
            </IconButton>
          </Tooltip>
          {/* {!HeaderComp && ( */}
          <Box sx={{ color: "black" }}>
            <Typography sx={{ textAlign: "right" }}>
              {/* {userInfo?.email} */}
              {userEmail}
            </Typography>
            <Typography sx={{ textAlign: "right" }}>{userRole}</Typography>
          </Box>
          {/* )} */}
        </Stack>

        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          PaperProps={{
            sx: {
              minWidth: "250px",
              borderRadius: "5px",
              zIndex: 20,
              backgroundColor: "white",
              paddingY: "10px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ cursor: "context-menu" }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                marginBottom: "5px",
              }}
            >
              <Avatar sx={{ background: "#7c4dff", color: "white" }}>
                {"userInfo?.firstname"?.slice(0, 1).toUpperCase()}
              </Avatar>
            </Box>
          </Stack>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: ".9rem",
              color: "black",
              textAlign: "center",
              lineHeight: ".4rem",
              marginTop: "10px",
            }}
          >
            {userEmail}
          </Typography>
          <Typography
            sx={{
              color: "black",
              textAlign: "center",
              lineHeight: ".4rem",
              marginTop: "13px",
            }}
          >
            {userRole}
          </Typography>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "10px" }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{ boxShadow: "none", background: "#7c4dff" }}
              onClick={() => handleMenu(!isDashboard ? "dashboard" : "home")}
            >
              {!isDashboard ? "Dashboard" : "Home"}
            </Button>
          </Stack>
          <ProfileMenuItem
            onClick={() => handleMenu("profile")}
            label="Profile"
            icon={<AccountCircleOutlinedIcon sx={profileMenuStyle} />}
          />
          <ProfileMenuItem
            onClick={() => handleMenu("changePassword")}
            label="Change Password"
            icon={<LockResetOutlinedIcon sx={profileMenuStyle} />}
          />
          <ProfileMenuItem
            onClick={handleLogout}
            label="Log Out"
            icon={<LogoutIcon sx={profileMenuStyle} />}
          />
        </Menu>
      </Box>
    </React.Fragment>
  );
}
