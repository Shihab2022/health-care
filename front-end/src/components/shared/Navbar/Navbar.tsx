"use client";
import { Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";
import Logo from "../Logo/Logo";
import useUserInfo from "@/hooks/useUserInfo";

const Navbar = () => {
  const userInfo = useUserInfo();
  const AuthButton = dynamic(
    () => import("@/components/ui/AuthButton/AuthButton"),
    { ssr: false }
  );
  console.log({ userInfo });
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo isBgWhite={true} />

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/consultation" color="#000">
            Consultation
          </Typography>

          <Typography color="#000">Diagnostics</Typography>
          <Typography component={Link} href="/doctors" color="#000">
            Doctors
          </Typography>

          {userInfo?.email ? (
            <Typography component={Link} href="/dashboard" color="#000">
              Dashboard
            </Typography>
          ) : null}
        </Stack>

        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
