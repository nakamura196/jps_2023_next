export default async function handler(req, res) {
  const query = req.query;
  const { keyword, size } = query;
  const keyword_ = keyword || "";
  const size_ = size || 20;
  const url = `https://jpsearch.go.jp/api/item/search/jps-cross?f-contents=iiif&keyword=${keyword_}&size=${size_}`;

  const base_url = "https://jps-2023-next.vercel.app";

  const response = await fetch(url);
  const json = await response.json();

  const manifests = [];

  for (const item of json.list) {
    const common = item.common;
    const label = common.title;
    const manfiest_uri = common.iiifUrl;
    const thumbnail = common.thumbnailUrl[0];
    const related = common.related;
    const attribution = common.provider;

    const manifest = {
      "@type": "sc:Manifest",
      "@id": manfiest_uri,
      label,
      thumbnail,
      related,
      attribution,
    };
    manifests.push(manifest);
  }

  const collection = {
    "@context": "http://iiif.io/api/presentation/2/context.json",
    "@id": `${base_url}/api/jps/iiif?keyword=${keyword_}&size=${size_}`,
    "@type": "sc:Collection",
    label: "Top Collection",
    manifests: manifests,
  };

  res.status(200).json(collection);
}
