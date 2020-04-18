import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Home",
    content: pageLoader(() => import("./HOME.md")),
  },
];

ReactDOM.render(
  <Catalog title="Catalog" useBrowserHistory={false} pages={pages} />,
  document.getElementById("catalog")
);
