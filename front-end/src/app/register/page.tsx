"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "@/components/shared/Logo/Logo";
import HButton from "@/components/shared/button/button";
export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid phone number!"),
  address: z.string().min(1, "Please enter your address!"),
});
const sx = {
  "& .MuiOutlinedInput-root": {
    height: 50,
    borderRadius: "15px",
  },
};
export const validationSchema = z.object({
  password: z.string().min(6, "Must be at least 6 characters"),
  patient: patientValidationSchema,
});

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    // console.log(data);
    try {
      const res = await registerPatient(data);
      // console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Grid container sx={{ width: "100%", height: "100vh" }}>
        <Grid item xs={6} md={6}>
          <Box style={{ position: "relative", width: "100%", height: "100vh" }}>
            <Image
              src={assets.images.registerImg}
              fill
              style={{ objectFit: "cover" }}
              alt="logo"
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
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
            <Stack width="70%" height="10%">
              <Logo isBgWhite={true} />
            </Stack>

            <Box height="90%" width="60%" sx={{ background: "white" }}>
              <Stack>
                <Box>
                  <Typography variant="h5">Create your account</Typography>

                  <PHForm
                    onSubmit={handleRegister}
                    resolver={zodResolver(validationSchema)}
                    defaultValues={defaultValues}
                  >
                    <Grid container spacing={2} my={1}>
                      <Grid item md={12}>
                        <PHInput
                          label="Name"
                          fullWidth={true}
                          name="patient.name"
                          sx={sx}
                        />
                      </Grid>
                      <Grid item md={12}>
                        <PHInput
                          label="Email"
                          type="email"
                          fullWidth={true}
                          name="patient.email"
                          sx={sx}
                        />
                      </Grid>
                      <Grid item md={12}>
                        <PHInput
                          label="Password"
                          type="password"
                          fullWidth={true}
                          name="password"
                          sx={sx}
                        />
                      </Grid>
                      <Grid item md={12}>
                        <PHInput
                          label="Contact Number"
                          type="tel"
                          fullWidth={true}
                          name="patient.contactNumber"
                          sx={sx}
                        />
                      </Grid>
                      <Grid item md={12}>
                        <PHInput
                          label="Address"
                          fullWidth={true}
                          name="patient.address"
                          sx={sx}
                        />
                      </Grid>
                    </Grid>
                    <HButton text="Register" />

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
                        Do you already have an account?{" "}
                      </Typography>
                      <Link href="/login">
                        {" "}
                        <Typography
                          component="p"
                          fontWeight={300}
                          sx={{
                            textDecoration: "underline",
                            color: "#007aff",
                          }}
                        >
                          Login
                        </Typography>{" "}
                      </Link>
                    </Stack>
                  </PHForm>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterPage;
