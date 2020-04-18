import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Home",
    content: pageLoader(() => import("./HOME.md")),
  },
  {
    path: "/encodings",
    title: "Encodings",
    pages: [
      {
        path: "/color",
        title: "Color",
        content: pageLoader(() => import("./COLOR.md")),
      },
    ],
  },
];

ReactDOM.render(
  <Catalog
    title="Data Visualization Assets"
    useBrowserHistory={false}
    pages={pages}
  />,
  document.getElementById("catalog")
);
