import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="logo images"
          width={35}
          height={35}
          priority
        />
      </Link>
      <Typography variant="h1" fontSize={20}>
        Todo
      </Typography>
    </Stack>
  );
};

export default Logo;
