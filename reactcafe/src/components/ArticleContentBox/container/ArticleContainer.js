import React, { Component } from "react";
import ArticleViewer from "./ArticleViewer/ArticleViewer.js";
import ArticleTagList from "./ArticleTagList/ArticleTagList.js";
import ArticleWriter from "./ArticleWriter/ArticleWriter.js";
import ReplyBox from "./ReplyBox/ReplyBox.js";
import CommentBox from "./CommentBox/CommentBox.js";
import "./ArticleContainer.css";

class ArticleContainer extends Component {
  render() {
    return (
      <div class="article_container">
        <ArticleViewer />
        <ArticleTagList />
        <ArticleWriter />
        <ReplyBox />
        <CommentBox />
      </div>
    );
  }
}

export default ArticleContainer;
