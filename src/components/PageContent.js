import React from "react";
import Header from "./Header";
import ShareButtons from "./ShareButtons";
import AboutMe from "./AboutMe";

function PageContent() {
  return (
    <div className="page-content">
      <Header />
      <ShareButtons/>
      <AboutMe/>
    </div>
  );
}

export default PageContent;
