const fs = require("fs");
const axios = require("axios");

const BACKEND_URL = "https://portfolio-backend-ggz1.onrender.com";

const GITHUB_USERNAME = "dlnthanh262";
const USE_GITHUB_DATA = true;
const MEDIUM_USERNAME = "selenabright";

async function fetchGitHub() {
  if (USE_GITHUB_DATA !== true || !GITHUB_USERNAME) return;

  console.log(`Fetching profile data for ${GITHUB_USERNAME} via backend...`);

  try {
    const res = await axios.get(`${BACKEND_URL}/api/github/${GITHUB_USERNAME}`);
    fs.writeFileSync("./public/profile.json", JSON.stringify(res.data, null, 2));
    console.log("✅ Saved profile.json");
  } catch (err) {
    console.error("GitHub fetch failed:", err.message);
  }
}

async function fetchMedium() {
  if (!MEDIUM_USERNAME) return;

  console.log(`Fetching Medium blogs for ${MEDIUM_USERNAME} via backend...`);

  try {
    const res = await axios.get(`${BACKEND_URL}/api/medium/${MEDIUM_USERNAME}`);
    fs.writeFileSync("./public/blogs.json", JSON.stringify(res.data, null, 2));
    console.log("✅ Saved blogs.json");
  } catch (err) {
    console.error("Medium fetch failed:", err.message);
  }
}

async function main() {
  await fetchGitHub();
  await fetchMedium();
}

main();