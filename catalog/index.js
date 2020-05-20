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
    path: "/charts",
    title: "Charts",
    pages: [
      {
        path: "/emoji",
        title: "Emoji",
        content: pageLoader(() => import("./EMOJI.md")),
      },
    ],
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
      {
        path: "/size",
        title: "Size",
        content: pageLoader(() => import("./SIZE.md")),
      },
    ],
  },
];

const theme = {
  pageHeadingBackground: "#4A5568",
  sidebarColorHeading: "#4A5568",
  sidebarColorText: "#4A5568",
  navBarTextColor: "#4A5568",
  sidebarColorTextActive: "#3F88C5",
  brandColor: "#4A5568",
  linkColor: "#3F88C5",
};

ReactDOM.render(
  <Catalog
    title="Data Visualization Assets"
    useBrowserHistory={false}
    pages={pages}
    theme={theme}
  />,
  document.getElementById("catalog")
);
