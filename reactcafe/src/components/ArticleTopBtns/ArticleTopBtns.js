/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./ArticleTopBtns.css";

import { addValue } from "../../action/add.js";
import { connect } from "react-redux";

class ArticleTopBtns extends Component {
  render() {
    console.log(this.props);
    const { onClickVal } = this.props;
    console.log(onClickVal);
    return (
      <div class="ArticleTopBtns">
        <div class="left_area">
          <a
            href="#1"
            role="button"
            class="BaseButton BaseButton--skinGray size_default"
            onClick={() => onClickVal(10)}
          >
            <span class="BaseButton__txt">수정</span>
          </a>
          <a
            href="#"
            role="button"
            class="BaseButton BaseButton--skinGray size_default"
          >
            <span class="BaseButton__txt">삭제</span>
          </a>
        </div>
        <div class="right_area">
          <a
            href="#"
            role="button"
            class="BaseButton btn_prev BaseButton--skinGray size_default"
          >
            <svg
              aria-hidden="true"
              class="svg-icon ico-post-btn-arrow-up-323232"
            >
              <use href="#ico-post-btn-arrow-up-323232">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 6"
                  id="ico-post-btn-arrow-up-323232"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5 1.864l-3.73 3.91c-.29.3-.762.3-1.051 0a.788.788 0 010-1.09L4.474.226a.725.725 0 011.051 0l4.258 4.458c.29.3.29.79 0 1.09-.146.149-.335.226-.525.226s-.382-.077-.527-.227l-3.73-3.909z"
                  ></path>
                </svg>
              </use>
            </svg>
            <span class="BaseButton__txt"> 이전글</span>
          </a>
          <a
            href="#"
            role="button"
            class="BaseButton btn_next BaseButton--skinGray size_default"
          >
            <svg
              aria-hidden="true"
              class="svg-icon ico-post-btn-arrow-up-323232"
            >
              <use href="#ico-post-btn-arrow-up-323232">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 6"
                  id="ico-post-btn-arrow-up-323232"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5 1.864l-3.73 3.91c-.29.3-.762.3-1.051 0a.788.788 0 010-1.09L4.474.226a.725.725 0 011.051 0l4.258 4.458c.29.3.29.79 0 1.09-.146.149-.335.226-.525.226s-.382-.077-.527-.227l-3.73-3.909z"
                  ></path>
                </svg>
              </use>
            </svg>
            <span class="BaseButton__txt"> 다음글</span>
          </a>
          <a
            href="#"
            role="button"
            class="BaseButton BaseButton--skinGray size_default"
          >
            <span class="BaseButton__txt">목록</span>
          </a>
        </div>
      </div>
    );
  }
}

// const mapToDispatch = (dispatch) => ({
//   onClickVal: (data) => {
//     console.log("click!");
//     dispatch(addValue(data));
//   },
// });

const mapToDispatch = (dispatch) => {
  return {
    onClickVal(data) {
      dispatch(addValue(data));
    },
  };
};

export default connect(null, mapToDispatch)(ArticleTopBtns);
