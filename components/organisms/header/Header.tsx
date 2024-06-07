import { AppBar, Toolbar, Container } from "@mui/material";
import Logo from "../../molecules/logo/Logo";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Container maxWidth="xl">
          <Logo />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
