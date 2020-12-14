import React, { Component } from "react";
import ArticleHeader from "./header/ArticleHeader.js";
import ArticleContainer from "./container/ArticleContainer.js";
import "./ArticleContentBox.css";

class ArticleContentBox extends Component {
  render() {
    return (
      <div class="ArticleContentBox">
        <ArticleHeader />
        <ArticleContainer />
      </div>
    );
  }
}

export default ArticleContentBox;
