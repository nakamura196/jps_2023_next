import type { NextPage } from "next";
import { Container, ListItemButton, ListItemText } from "@mui/material";
import Layout from "../components/Layout"; // 追記
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Container
        fixed
        sx={{
          my: 5,
        }}
      >
        <h1>Next.jsのテストサイトです。</h1>

        <ul>
          <li>
            <Link href="/jps">ジャパンサーチのウェブパーツ</Link>
          </li>
          <li>
            <Link href="/jps/iiif">ジャパンサーチの簡易Web API</Link>
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default Home;
