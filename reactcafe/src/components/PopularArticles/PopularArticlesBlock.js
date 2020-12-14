import React, { Component } from "react";
import "./PopularArticles.css";

class PopularArticlesBlock extends Component {
  render() {
    return (
      <li class="list_item">
        <a
          href="https://cafe.naver.com/ArticleRead.nhn?fromPopular=true&amp;clubid=12175294&amp;articleid=2369103"
          class="link"
        >
          <div class="thumb">
            <img
              src="https://mcafethumb-phinf.pstatic.net/MjAyMDEyMTJfMTkg/MDAxNjA3NzA2MjI5NjMz.bt2I9-MmD6P7wF0Zb1_zY8YzT9NDhEoxDJ3wTT7FUWIg.NgOpQvrzYwwgvgXFEKBJYFRRNLztVsXSdd_oDQaO4rIg.JPEG/IMG_3405.JPEG?type=f100_100"
              width="74"
              alt=""
            />
          </div>
          <div class="post_box">
            <strong class="title">
              [체험단리뷰] 맥북 선 정리 도구 - 모스카토
            </strong>
            <div class="post_info">
              <span class="cafe_member">천사친구의 이야기</span>
              <span class="no_like">
                <svg
                  aria-hidden="true"
                  class="svg-icon ico-post-like-676767-blackskin"
                >
                  <use href="#ico-post-like-676767-blackskin">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12 12"
                      id="ico-post-like-676767-blackskin"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        d="M8.743 1c-.975 0-1.83.513-2.32 1.285A2.79 2.79 0 006 3.515a2.777 2.777 0 00-.422-1.23A2.747 2.747 0 003.258 1a2.73 2.73 0 00-1.948.816C.81 2.323.5 3.022.5 3.794c0 3.24 4.381 6.213 5.5 6.92 1.119-.707 5.5-3.68 5.5-6.92 0-.772-.31-1.471-.81-1.978A2.728 2.728 0 008.743 1z"
                      ></path>
                    </svg>
                  </use>
                </svg>
                0
              </span>
              <span class="no_comment">
                <svg
                  aria-hidden="true"
                  class="svg-icon ico-post-comment-blackskin"
                >
                  <use href="#ico-post-comment-blackskin">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12 12"
                      id="ico-post-comment-blackskin"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          stroke="currentColor"
                          d="M6.9.5H5.1a4.59 4.59 0 00-3.253 1.347A4.59 4.59 0 00.5 5.1c0 1.144.417 2.19 1.108 2.994a4.589 4.589 0 002.986 1.579l1.685 1.433 1.128-1.434a4.59 4.59 0 002.986-1.578A4.583 4.583 0 0011.5 5.1a4.59 4.59 0 00-1.347-3.253A4.59 4.59 0 006.9.5z"
                        ></path>
                        <path
                          fill="currentColor"
                          fillRule="nonzero"
                          d="M3.6 4.5a.6.6 0 11-.001 1.201A.6.6 0 013.6 4.5zm2.4 0a.6.6 0 11-.001 1.201A.6.6 0 016 4.5zm2.4 0a.6.6 0 11-.001 1.201A.6.6 0 018.4 4.5z"
                        ></path>
                      </g>
                    </svg>
                  </use>
                </svg>
                9
              </span>
            </div>
          </div>
        </a>
      </li>
    );
  }
}

export default PopularArticlesBlock;
