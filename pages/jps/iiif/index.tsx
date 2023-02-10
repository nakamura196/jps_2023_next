import type { NextPage } from "next";
import { Container, TextField } from "@mui/material";
import Layout from "../../../components/Layout"; // 追記
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export async function getServerSideProps(context) {
  try {
    const host = context.req.headers.host || "localhost:3000";
    const protocol = /^localhost/.test(host) ? "http" : "https";
    const url = `${protocol}://${host}/api/jps/iiif?keyword=${context.query.keyword}&size=${context.query.size}`;
    const collection = await fetch(url).then((data) => data.json());
    return {
      props: {
        collection,
      },
    };
  } catch (e) {
    return {
      props: {
        collection: {},
      },
    };
  }
}

const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};

const Home: NextPage = (props: any) => {
  const action = "/jps/iiif";
  const router = useRouter();

  const routerQuery = router.query;
  const { keyword, size } = routerQuery;

  const [query, setQuery] = useState(keyword);

  const handleParam = (setValue) => (e) => setValue(e.target.value);

  const handleSubmit = preventDefault(() => {
    router.push({
      pathname: action,
      query: {
        keyword: query,
        size: 20,
      },
    });
  });

  const collection = props.collection;

  const collection_url = `https://jps-2023-next.vercel.app/api/jps/iiif?keyword=${
    keyword || ""
  }&size=${size || 20}`;
  const sm_url = `https://self-museum.cultural.jp/?collection=${encodeURIComponent(
    collection_url
  )}`;

  return (
    <Layout>
      <Container
        sx={{
          my: 5,
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Search"
            value={query}
            onChange={handleParam(setQuery)}
          />
        </form>

        <p className="my-5">
          {(() => {
            if (collection.manifests) {
              return (
                <Link target="_blank" href={sm_url}>
                  {collection.manifests.length}件の
                  {keyword ? `「${keyword}」の` : ""}
                  結果をセルフミュージアムでみる
                </Link>
              );
            } else {
              return <span>結果がありません。</span>;
            }
          })()}
        </p>
      </Container>
    </Layout>
  );
};

export default Home;
