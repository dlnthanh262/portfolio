fs = require("fs");
const https = require("https");
process = require("process");
require("dotenv").config();
const xml2js = require("xml2js");

process.env.HTTP_PROXY = '';
process.env.HTTPS_PROXY = '';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};
if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  var data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });
  const default_options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(default_options, res => {
    let data = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailed);
    }

    res.on("data", d => {
      data += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/profile.json", data, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/profile.json");
      });
    });
  });

  req.on("error", error => {
    throw error;
  });

  req.write(data);
  req.end();
}

if (MEDIUM_USERNAME !== undefined) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const url = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
  console.log("Fetching Medium blogs from:", url);
  https.get(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  }, res => {
    let xml = "";
    res.on("data", chunk => (xml += chunk));
    res.on("end", () => {
      xml2js.parseString(xml, (err, result) => {
        if (err) throw err;

        const channel = result.rss.channel[0];
        const feed = {
          url,
          title: channel.title[0],
          link: channel.link[0],
          author: channel["dc:creator"] ? channel["dc:creator"][0] : "",
          description: channel.description[0],
          image: channel["image"] ? channel["image"][0].url[0] : "",
        };

        const items = channel.item.map(it => ({
          title: it.title[0],
          pubDate: it.pubDate[0],
          link: it.link[0],
          guid: it.guid[0]._ || it.guid[0],
          author: it["dc:creator"] ? it["dc:creator"][0] : feed.author,
          thumbnail: "",
          description: it.description ? it.description[0] : "",
          content: it["content:encoded"] ? it["content:encoded"][0] : "",
          enclosure: {},
          categories: it.category || [],
        }));

        const finalJson = {
          status: "ok",
          feed,
          items,
        };

        fs.writeFileSync(
          "./public/blogs.json",
          JSON.stringify(finalJson, null, 2)
        );
        console.log("✅ Saved full blogs.json with all Medium posts");
      });
    });
  });
}
