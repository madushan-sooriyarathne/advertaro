// import and config contentful client
const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_SECRET,
});

const fetchCaseStudies = async () => {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.error("error fetching case studies from contentful");
  return [];
};

export { fetchCaseStudies };
