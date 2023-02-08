import Head from "next/head";
import styles from "../styles/Home.module.css";

import Footer from "./Footer"
import Container from "@mui/material/Container";

export const appName = "Sample App";

import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

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
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ジャパンサーチのウェブパーツの使用例
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
