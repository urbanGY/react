/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import RelatedArticlesBlock from "./RelatedArticlesBlock";
import "./RelatedArticles.css";

class RelatedArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyList: [1, 2, 3, 4, 5],
    };
  }

  render() {
    return (
      <div class="RelatedArticles">
        <h2 class="article_board_title no_tab">
          <span class="text">전체글</span>
        </h2>
        <div
          class="RelatedArticlesTabContainer"
          has-no-display-tab-title="true"
        >
          <div class="RelatedArticlesTabContainer__tab">
            <div class="tab_area"></div>
            <div class="tab_content">
              <div class="RelatedArticlesTab isActive">
                <ul class="RelatedArticlesList">
                  {this.state.companyList.map((elem, idx) => {
                    return <RelatedArticlesBlock key={idx} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="paginate_area">
          <div class="ArticlePaginate">
            <strong class="blind">페이징 이동</strong>
            <button type="button" aria-pressed="true" class="num">
              1
            </button>
            <button type="button" aria-pressed="false" class="num">
              2
            </button>
            <button type="button" aria-pressed="false" class="num">
              3
            </button>
          </div>
          <a
            href="https://cafe.naver.com/ArticleList.nhn?search.clubid=29871473&amp;search.boardtype=L&amp;search.page=1"
            class="more"
          >
            전체보기
          </a>
        </div>
      </div>
    );
  }
}

export default RelatedArticles;
