/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./CommentBox.css";

class CommentBlock extends Component {
  render() {
    return (
      <li id="52465274" class="CommentItem">
        <div class="comment_area">
          <a
            href="https://cafe.naver.com/CafeMemberNetworkView.nhn?m=view&amp;clubid=12175294&amp;memberid=aqswde1215"
            class="comment_thumb"
          >
            <img alt="프로필 사진" width="36" height="36" />
          </a>
          <div class="comment_box">
            <div class="comment_nick_box">
              <div class="comment_nick_info">
                <a
                  id="cih52465274"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="comment_nickname"
                >
                  맥북프로 16
                </a>
              </div>
            </div>
            <div class="comment_text_box">
              <p class="comment_text_view">
                <span class="text_comment">
                  몸값 3배면 210? 저게요?
                  <br />
                  <a
                    href="http://www.schezade.co.kr/goods/g_detail.html?gid=2427"
                    target="_blank"
                  >
                    http://www.schezade.co.kr/goods/g_detail.html?gid=2427
                  </a>
                  <br />
                  얘랑 맞먹으려고 하네...
                </span>
              </p>
            </div>
            <div class="comment_info_box">
              <span class="comment_info_date">2020.12.11. 17:39</span>
            </div>
            <div class="comment_tool">
              <a
                id="commentItem57029110"
                href="#"
                role="button"
                title="더보기"
                class="comment_tool_button"
              >
                <svg aria-hidden="true" class="svg-icon ico-post-more-979797">
                  <use href="#ico-post-more-979797">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 3 15"
                      id="ico-post-more-979797"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M1.5 12a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 011.5 12zm0-6a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 011.5 6zm0-6a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 011.5 0z"
                      ></path>
                    </svg>
                  </use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default CommentBlock;
