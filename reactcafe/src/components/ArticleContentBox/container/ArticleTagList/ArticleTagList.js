/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "../ArticleContainer.css";

class ArticleTagList extends Component {
  render() {
    return (
      <div class="ArticleTagList">
        <strong class="blind">태그</strong>
        <ul class="tag_list">
          <li class="item">
            <a href="#" class="tag_link">
              #헤헤헤
            </a>
          </li>
          <li class="item">
            <a href="#" class="tag_link">
              #히히히
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ArticleTagList;
