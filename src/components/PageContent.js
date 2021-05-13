import React from "react";
import Header from "./Header";
import ShareButtons from "./ShareButtons";
import AboutMe from "./AboutMe";
import { Scrollbars } from 'react-custom-scrollbars';

function PageContent() {
  return (
    <div className="page-content">
      <Scrollbars>
        <Header />
        <ShareButtons />
        <AboutMe />
      </Scrollbars>
    </div >
  );
}

export default PageContent;
