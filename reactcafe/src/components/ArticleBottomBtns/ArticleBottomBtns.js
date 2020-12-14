/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./ArticleBottomBtns.css";

class ArticleBottomBtns extends Component {
  render() {
    return (
      <div class="ArticleBottomBtns">
        <div class="left_area">
          <a
            href="/ca-fe/cafes/29871473/menus/2/articles/write"
            target="_blank"
            role="button"
            class="BaseButton BaseButton--skinGreen size_default"
          >
            <svg aria-hidden="true" class="svg-icon icon-solid-writing">
              <use href="#icon-solid-writing">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 13 14"
                  id="icon-solid-writing"
                >
                  <path
                    fill="currentColor"
                    d="M5.986 2.712l3.2 3.2L4.2 10.899c-.635.635-1.5.984-2.398.968l-1.33-.024a.414.414 0 01-.406-.406l-.024-1.333a3.307 3.307 0 01.964-2.394l4.981-4.998zM10.35.677l.008.008.86.869c.64.646.637 1.688-.006 2.331l-1.11 1.112L6.9 1.796 8.013.68A1.652 1.652 0 0110.35.677zm-4.043 10.91h5.535a.755.755 0 010 1.509H6.307a.755.755 0 010-1.509z"
                  ></path>
                </svg>
              </use>
            </svg>
            <span class="BaseButton__txt"> 글쓰기</span>
          </a>
          <a
            href="/ca-fe/cafes/29871473/articles/42/reply"
            target="_blank"
            role="button"
            class="BaseButton BaseButton--skinGray size_default"
          >
            <span class="BaseButton__txt">답글</span>
          </a>
          <a
            href="#"
            role="button"
            class="BaseButton BaseButton--skinGray size_default"
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
            class="BaseButton BaseButton--skinGray size_default"
          >
            <span class="BaseButton__txt">목록</span>
          </a>
          <a
            href="#"
            role="button"
            class="BaseButton BaseButton--skinGray size_default"
          >
            <svg aria-hidden="true" class="svg-icon ico-post-top-323232">
              <use href="#ico-post-top-323232">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 5 5"
                  id="ico-post-top-323232"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3.01.315l1.93 3.86A.572.572 0 014.429 5H.571a.57.57 0 01-.511-.826L1.99.315a.57.57 0 011.02 0z"
                  ></path>
                </svg>
              </use>
            </svg>
            <span class="BaseButton__txt">TOP</span>
          </a>
        </div>
      </div>
    );
  }
}

export default ArticleBottomBtns;
