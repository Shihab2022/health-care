"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Item,
} from "@mui/material";
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
        <Grid item xs={6} md={6}>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
              paddingY: "25px",
              background: "red",
              height: "100%",
            }}
          >
            <Logo isBgWhite={true} />

            <Stack sx={{ background: "white" }}>
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
                    <Grid container spacing={2} my={1}>
                      <Grid item md={12}>
                        <PHInput
                          name="email"
                          label="Email"
                          type="email"
                          fullWidth={true}
                        />
                      </Grid>
                      <Grid item md={12}>
                        <PHInput
                          name="password"
                          label="Password"
                          type="password"
                          fullWidth={true}
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
                        }}
                      >
                        Forgot Password?
                      </Typography>
                    </Link>

                    <Button
                      sx={{
                        margin: "10px 0px",
                      }}
                      fullWidth={true}
                      type="submit"
                    >
                      Login
                    </Button>
                    <Typography component="p" fontWeight={300}>
                      Don&apos;t have an account?{" "}
                      <Link href="/register">Create an account</Link>
                    </Typography>
                  </PHForm>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6} md={6}>
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
    // <Container>
    //   <Stack
    //     sx={{
    //       height: "100vh",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         maxWidth: 600,
    //         width: "100%",
    //         boxShadow: 1,
    //         borderRadius: 1,
    //         p: 4,
    //         textAlign: "center",
    //       }}
    //     >
    //       <Stack
    //         sx={{
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Box>
    //           <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
    //         </Box>
    //         <Box>
    //           <Typography variant="h6" fontWeight={600}>
    //             Login PH HealthCare
    //           </Typography>
    //         </Box>
    //       </Stack>

    //       {error && (
    //         <Box>
    //           <Typography
    //             sx={{
    //               backgroundColor: "red",
    //               padding: "1px",
    //               borderRadius: "2px",
    //               color: "white",
    //               marginTop: "5px",
    //             }}
    //           >
    //             {error}
    //           </Typography>
    //         </Box>
    //       )}

    //       <Box>
    //         <PHForm
    //           onSubmit={handleLogin}
    //           resolver={zodResolver(validationSchema)}
    //           defaultValues={{
    //             email: "",
    //             password: "",
    //           }}
    //         >
    //           <Grid container spacing={2} my={1}>
    //             <Grid item md={6}>
    //               <PHInput
    //                 name="email"
    //                 label="Email"
    //                 type="email"
    //                 fullWidth={true}
    //               />
    //             </Grid>
    //             <Grid item md={6}>
    //               <PHInput
    //                 name="password"
    //                 label="Password"
    //                 type="password"
    //                 fullWidth={true}
    //               />
    //             </Grid>
    //           </Grid>

    //           <Link href={"/forgot-password"}>
    //             <Typography
    //               mb={1}
    //               textAlign="end"
    //               component="p"
    //               fontWeight={300}
    //               sx={{
    //                 textDecoration: "underline",
    //               }}
    //             >
    //               Forgot Password?
    //             </Typography>
    //           </Link>

    //           <Button
    //             sx={{
    //               margin: "10px 0px",
    //             }}
    //             fullWidth={true}
    //             type="submit"
    //           >
    //             Login
    //           </Button>
    //           <Typography component="p" fontWeight={300}>
    //             Don&apos;t have an account?{" "}
    //             <Link href="/register">Create an account</Link>
    //           </Typography>
    //         </PHForm>
    //       </Box>
    //     </Box>
    //   </Stack>
    // </Container>
  );
};

export default LoginPage;
