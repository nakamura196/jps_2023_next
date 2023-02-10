import Head from "next/head";
import styles from "../styles/Home.module.css";

import Footer from "./Footer";
import Container from "@mui/material/Container";

export const appName = "Sample App";

import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";

const navItems = [
  {
    href: "/",
    label: "Home",
  }
];

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Next.jsのテスト
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button href={item.href} key={item.href} sx={{ color: '#fff' }}>
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
