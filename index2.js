const https = require("https");

const { SocksProxyAgent } = require("socks-proxy-agent");

const agent = new SocksProxyAgent("socks5h://localhost:9050");

https.get(
  "https://ifconfig.me",
  {
    agent
  },
  res => {
    res.on("data", data => console.log(data.toString()));
  }
);

// https.get("https://ifconfig.me", res => {
//   console.log(res);
//   res.pipe(process.stdout);
// });
