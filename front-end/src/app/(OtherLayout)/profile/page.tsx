import { Button, Typography } from "@mui/material";
import Link from "next/link";

const Profile = () => {
  return (
    <>
      <Typography variant="h4"> Hello this is profile section</Typography>
      <Link href="/">
        <Button variant="contained">Go to home page</Button>{" "}
      </Link>
    </>
  );
};
export default Profile;
