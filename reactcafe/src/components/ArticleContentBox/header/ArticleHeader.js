/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./ArticleHeader.css";

class ArticleHeader extends Component {
  render() {
    return (
      <div class="article_header">
        <div class="ArticleTitle">
          <a
            href="https://cafe.naver.com/ArticleList.nhn?search.clubid=12175294&amp;search.menuid=1&amp;search.boardtype=L"
            class="link_board"
          >
            [정보] 애플뉴스&amp;칼럼
            <svg aria-hidden="true" class="svg-icon ico-post-arrow-03-c-75-a">
              <use href="#ico-post-arrow-03-c-75-a">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 5 10"
                  id="ico-post-arrow-03-c-75-a"
                >
                  <path
                    fill="#03C75A"
                    fillRule="evenodd"
                    d="M3.446 4.996L.19 8.106a.604.604 0 000 .875c.25.243.657.243.908 0l3.715-3.546a.605.605 0 000-.876L1.097 1.01a.662.662 0 00-.908.001A.61.61 0 000 1.45c0 .158.064.318.189.438l3.257 3.11z"
                  ></path>
                </svg>
              </use>
            </svg>
          </a>
          <div class="title_area">
            <h3 class="title_text">
              '에어팟 맥스' 배송 12주 지연에…몸값 3배 뜀
            </h3>
          </div>
        </div>
        <div class="WriterInfo">
          <a
            href="https://cafe.naver.com/CafeMemberNetworkView.nhn?m=view&amp;clubid=12175294&amp;memberid=psj3373"
            class="thumb"
          >
            <img
              src="https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png?type=c77_77"
              alt="프로필 사진"
              width="36"
              height="36"
            />
          </a>
          <div class="profile_area">
            <div class="profile_info">
              <div class="nick_box">
                <a
                  id="writerInfopsj3373"
                  href="#"
                  role="button"
                  class="nickname"
                >
                  인천llDOG
                </a>
              </div>
              <em class="nick_level">
                준회원
                <img
                  src="https://cafe.pstatic.net/levelicon/1/1_1.gif"
                  class="icon_level"
                />
              </em>
              <a href="#" class="link_talk">
                1:1 채팅
              </a>
            </div>
            <div class="article_info">
              <span class="date">2020.12.11. 17:35</span>
              <span class="count">조회 1,382</span>
            </div>
          </div>
        </div>
        <div class="ArticleTool">
          <a href="#" role="button" class="button_comment">
            <svg aria-hidden="true" class="svg-icon ico-post-comment-323232">
              <use href="#ico-post-comment-323232">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17 17"
                  id="ico-post-comment-323232"
                >
                  <g fill="none" fillRule="evenodd" stroke="currentColor">
                    <path
                      strokeWidth="1.6"
                      d="M7.225.8h2.55c1.774 0 3.38.72 4.543 1.882A6.403 6.403 0 0116.2 7.225a6.402 6.402 0 01-1.547 4.182 6.413 6.413 0 01-4.206 2.208L8.18 15.68l-1.625-2.065a6.405 6.405 0 01-4.208-2.209A6.393 6.393 0 01.8 7.225c0-1.774.72-3.38 1.882-4.543A6.403 6.403 0 017.225.8z"
                    ></path>
                    <path
                      fill="currentColor"
                      strokeWidth=".6"
                      d="M12.253 6.892a.555.555 0 01-.394.951.559.559 0 01-.557-.557c0-.154.063-.293.163-.394.101-.101.24-.163.788 0zm-3.428 0a.557.557 0 11-.788 0c.1-.101.24-.163.788 0zm-3.429 0a.557.557 0 11-.788 0c.101-.101.24-.163.788 0z"
                    ></path>
                  </g>
                </svg>
              </use>
            </svg>
            댓글
            <strong class="num">8</strong>
          </a>
          <a href="#" role="button" class="button_url">
            URL 복사
          </a>
          <div class="more_area">
            <a
              id="articleTool"
              href="#"
              role="button"
              title="더보기"
              class="button_more"
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
    );
  }
}

export default ArticleHeader;
