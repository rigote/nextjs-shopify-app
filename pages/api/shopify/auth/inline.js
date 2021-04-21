import shopify from "../../../../lib/shopify";

export default async function shopifyAuthInline(req, res) {
  const { oAuthStart } = shopify;
  console.log(oAuthStart)

  await oAuthStart(req, res);
}
