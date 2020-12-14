import React, { Component } from "react";
import PopularArticlesBlock from "./PopularArticlesBlock.js";
import "./PopularArticles.css";

class PopularArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  }
  render() {
    return (
      <div class="PopularArticles">
        <div class="PopularCafeList">
          <h4 class="box_tit">이 카페 인기글</h4>
          <ul class="popular_list">
            {this.state.popularList.map((elem, idx) => {
              return <PopularArticlesBlock key={idx} />;
            })}
          </ul>
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
            <button type="button" aria-pressed="false" class="num">
              4
            </button>
            <button type="button" aria-pressed="false" class="num">
              5
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularArticles;
