/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { Component } from "react";
import CommentWriter from "./CommentWriter.js";
import CommentBlock from "./CommentBlock.js";
import "./CommentBox.css";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentArray: [1, 2, 3],
    };
  }
  render() {
    return (
      <div class="CommentBox">
        <div class="comment_option">
          <h3 class="comment_title">댓글</h3>
          <div class="comment_tab">
            <ul class="comment_tab_list">
              <li class="comment_tab_item">
                <a
                  href="#"
                  role="button"
                  aria-selected="true"
                  class="comment_tab_button"
                >
                  등록순
                </a>
              </li>
              <li class="comment_tab_item">
                <a
                  href="#"
                  role="button"
                  aria-selected="false"
                  class="comment_tab_button"
                >
                  최신순
                </a>
              </li>
            </ul>
            <button type="button" class="comment_refresh_button">
              <span class="blind">새로고침</span>
            </button>
          </div>
          <div class="comment_alarm">
            <div class="SubscribeButton">
              <em class="subscribe_text">댓글알림</em>
              <div class="ToggleSwitch">
                <input id="2" type="checkbox" class="switch_input blind" />
                <label htmlFor="2" class="switch_slider">
                  <span class="blind">등록</span>
                </label>
              </div>
            </div>
            <div class="ToggleSwitchTooltip">
              <div class="tooltip">
                이 글에 새 댓글이 등록되면 내소식에서 알림을 받을 수 있습니다.
              </div>
            </div>
          </div>
        </div>
        <ul class="comment_list">
          {this.state.commentArray.map((elem, idx) => {
            return <CommentBlock key={idx} />;
          })}
        </ul>
        <CommentWriter />
      </div>
    );
  }
}

export default CommentBox;
