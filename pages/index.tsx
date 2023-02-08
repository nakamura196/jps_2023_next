import type { NextPage } from "next";
import { Container } from "@mui/material";
import Layout from "../components/Layout"; // 追記

const Home: NextPage = () => {
  return (
    <Layout>
      <Container
        fixed
        sx={{
          my: 5,
        }}
      >
        <p>Next.jsのテストサイトです。</p>
      </Container>
    </Layout>
  );
};

export default Home;
