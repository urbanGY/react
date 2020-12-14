/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "../ArticleContainer.css";

class ArticleWriter extends Component {
  render() {
    return (
      <div class="article_writer">
        <div class="ArticleWriterProfile">
          <a
            href="https://cafe.naver.com/CafeMemberNetworkView.nhn?m=view&amp;clubid=29871473&amp;memberid=sfsfkj"
            class="more_area"
          >
            <span class="thumb">
              <img
                src="https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png?type=c77_77"
                alt="프로필 사진"
                width="36"
                height="36"
                // onError="this.onerror='';this.src='https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png';"
              />
            </span>
            <span class="box">
              <strong class="user">20150228김현석</strong>님의 게시글 더보기
              <svg aria-hidden="true" class="svg-icon ico-post-arrow-323232">
                <use href="#ico-post-arrow-323232">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 5 10"
                    id="ico-post-arrow-323232"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3.446 4.996L.19 8.106a.604.604 0 000 .875c.25.243.657.243.908 0l3.715-3.546a.605.605 0 000-.876L1.097 1.01a.662.662 0 00-.908.001A.61.61 0 000 1.45c0 .158.064.318.189.438l3.257 3.11z"
                    ></path>
                  </svg>
                </use>
              </svg>
            </span>
          </a>
        </div>
        <div class="Ccl">
          <a
            href="http://creativecommons.org/licenses/by-nc-nd/2.0/kr/"
            target="_blank"
            class="ccl_link"
          >
            <span class="icon"></span>
            {/* icon에 내용 채워주는 링크랑 크기 지정해줘야됨 */}
          </a>
        </div>
      </div>
    );
  }
}

export default ArticleWriter;
