import React, { Component } from "react";
import ArticleTopBtns from "./components/ArticleTopBtns/ArticleTopBtns";
import ArticleContentBox from "./components/ArticleContentBox/ArticleContentBox";
import ArticleBottomBtns from "./components/ArticleBottomBtns/ArticleBottomBtns";
import RelatedArticles from "./components/RelatedArticles/RelatedArticles";
import PopularArticles from "./components/PopularArticles/PopularArticles";
import CafeJoinInducement from "./components/CafeJoinInducement/CafeJoinInducement";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="Article">
        <div class="article_wrap">
          <ArticleTopBtns />
          <ArticleContentBox />
          <ArticleBottomBtns />
          <RelatedArticles />
          <PopularArticles />
          <CafeJoinInducement />
        </div>
      </div>
    );
  }
}

export default App;
