/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./RelatedArticles.css";

class RelatedArticlesBlock extends Component {
  render() {
    return (
      <li class="list_item selected">
        <div class="tit_area">
          <a
            href="https://cafe.naver.com/ArticleRead.nhn?referrerAllArticles=true&amp;clubid=29871473&amp;articleid=43"
            target="_self"
            class="tit"
          >
            <span>asdfasdf</span>
          </a>
          <span class="num">
            <span class="blind">댓글</span>[1]
          </span>
        </div>
        <div class="member_area">
          <a id="#" href="#" role="button" class="member">
            20150228김현석
          </a>
        </div>
        <div class="date_area">2020.07.09.</div>
      </li>
    );
  }
}

export default RelatedArticlesBlock;
