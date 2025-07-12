"use client";

import AccountMenu from "@/components/Dashboard/AccountMenu/AccountMenu";
import useUserInfo from "@/hooks/useUserInfo";
import { Button } from "@mui/material";
import Link from "next/link";

const AuthButton = () => {
  const userInfo = useUserInfo();
  return (
    <>
      {userInfo?.email ? (
        <AccountMenu />
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
