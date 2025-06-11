require("ignore-styles");
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import fs from "fs";
import path from "path";
import { StaticRouter } from "react-router";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const appHtml = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const htmlTemplate = fs.readFileSync(
    path.resolve("public/index.html"),
    "utf8"
  );
  const finalHtml = htmlTemplate.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  res.send(finalHtml);
});

app.listen(PORT, () => {
  console.log(`SSR server running at http://localhost:${PORT}`);
});
