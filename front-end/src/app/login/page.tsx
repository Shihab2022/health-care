"use client";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { toast } from "sonner";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Logo from "@/components/shared/Logo/Logo";
import HButton from "@/components/shared/button/button";
const sx = {
  "& .MuiOutlinedInput-root": {
    height: 50,
    borderRadius: "15px",
  },
};

export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(4, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const [error, setError] = useState("");
  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Grid container sx={{ width: "100%", height: "100vh" }}>
        <Grid item xs={12} md={6}>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
              paddingY: "25px",
              height: "100%",
            }}
          >
            <Stack width="70%" height="20%">
              <Logo isBgWhite={true} />
            </Stack>

            <Box height="80%" width="60%" sx={{ background: "white" }}>
              <Stack>
                <Box>
                  <Typography variant="h5">Login your account</Typography>

                  <Box>
                    <PHForm
                      onSubmit={handleLogin}
                      resolver={zodResolver(validationSchema)}
                      defaultValues={{
                        email: "",
                        password: "",
                      }}
                    >
                      <Grid container spacing={2} my={3}>
                        <Grid item md={12}>
                          <PHInput
                            name="email"
                            label="Email"
                            type="email"
                            fullWidth={true}
                            sx={sx}
                          />
                        </Grid>
                        <Grid item md={12}>
                          <PHInput
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth={true}
                            sx={sx}
                          />
                        </Grid>
                      </Grid>

                      <Link href={"/forgot-password"}>
                        <Typography
                          mb={1}
                          textAlign="end"
                          component="p"
                          fontWeight={300}
                          sx={{
                            textDecoration: "underline",
                            color: "#007aff",
                          }}
                        >
                          Forgot Password?
                        </Typography>
                      </Link>

                      <HButton text="Login" />
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography
                          sx={{ marginTop: "15px" }}
                          component="p"
                          fontWeight={350}
                        >
                          Don&apos;t have an account?{" "}
                        </Typography>
                        <Link href="/register">
                          {" "}
                          <Typography
                            component="p"
                            fontWeight={300}
                            sx={{
                              textDecoration: "underline",
                              color: "#007aff",
                            }}
                          >
                            Create an account
                          </Typography>{" "}
                        </Link>
                      </Stack>
                    </PHForm>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box style={{ position: "relative", width: "100%", height: "100vh" }}>
            <Image
              src={assets.images.LoginImg}
              fill
              style={{ objectFit: "cover" }}
              alt="logo"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
