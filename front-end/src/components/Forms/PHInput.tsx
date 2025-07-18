import { Stack, SxProps, TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

const PHInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
  sx,
  required,
  disabled = false,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="body1">{label}</Typography>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            sx={{ ...sx }}
            type={type}
            variant="outlined"
            size={size}
            fullWidth={fullWidth}
            placeholder={label}
            required={required}
            error={!!error?.message}
            helperText={error?.message}
            disabled={disabled}
          />
        )}
      />
    </Stack>
  );
};

export default PHInput;
