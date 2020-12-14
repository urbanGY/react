/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "../ArticleContainer.css";

class ReplyBox extends Component {
  render() {
    return (
      <div class="ReplyBox">
        <div class="box_left">
          <div class="like_article">
            <div class="ReactionLikeIt u_likeit_list_module _reactionModule">
              <a
                href="#"
                data-ishiddenlabel="false"
                role="button"
                data-type="like"
                title="이 글 좋아요 클릭"
                class="like_no u_likeit_list_btn _button on"
                aria-pressed="true"
              >
                <span class="u_ico _icon"></span>
                <em class="u_txt _label">좋아요</em>
                <em class="u_cnt _count">1</em>
              </a>
            </div>
            <a
              href="#"
              role="button"
              title="좋아요한 멤버 리스트"
              class="button_like_list"
            >
              <span class="blind">이 글을 '좋아요'한 멤버 리스트</span>
            </a>
          </div>
          <a href="#" role="button" aria-pressed="true" class="button_comment">
            <span class="icon_area">
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
            </span>
            댓글<strong class="num">69</strong>
          </a>
        </div>
        <div class="box_right">
          <div class="count_article">
            <span class="count_text">블로그/카페 공유수</span>
            <a href="#" class="num">
              0
            </a>
          </div>
          <div class="social_article">
            <div class="text_area">
              <a id="spiButton" href="#" class="naver-splugin">
                <span class="naver-splugin-c social_text">
                  <svg
                    aria-hidden="true"
                    class="svg-icon ico-post-share-323232"
                  >
                    <use href="#ico-post-share-323232">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17 17"
                        id="ico-post-share-323232"
                      >
                        <path
                          fill="currentColor"
                          d="M4.045 2.32a.804.804 0 01.459 1.465l-.098.058-.11.046-.109.028-.074.01-.07.003H1.818l-.046.005-.044.015-.039.022-.037.037-.029.054-.008.027-.005.044v10.129l.005.046.014.043.023.04.036.036.055.03.026.008.045.004h11.749l.045-.005.044-.014.04-.022.036-.037.03-.054.008-.027.004-.044V13.25l.006-.1a.806.806 0 01.8-.705c.265 0 .509.131.659.347l.058.097.046.11.028.109.01.075.003.07v1.01l-.006.152c-.059.7-.52 1.305-1.177 1.55l-.144.048-.15.035-.15.023-.099.007-.093.002H1.818l-.152-.006a1.82 1.82 0 01-1.551-1.177l-.047-.144-.036-.15-.022-.15-.008-.099L0 14.262V4.138l.006-.152a1.821 1.821 0 011.177-1.551l.144-.047.151-.036.15-.022.098-.007.093-.003h2.226zM10.788.828c.24-.131.527-.164.794-.087l.131.048.12.063.108.074.067.058 4.668 4.395.081.086c.051.06.094.125.13.195l.048.109.036.118.025.145.004.094-.005.086-.018.11a1.015 1.015 0 01-.074.213l-.055.1-.07.1-.094.103-.047.042-4.633 4.428-.1.081a1.04 1.04 0 01-1.555-.401l-.045-.114-.03-.112-.018-.121-.004-.08-.001-1.65-.168-.042-.231.03c-.842.136-1.624.544-2.324 1.212l-.19.189-.183.2-.18.214-.179.23-.174.242-.104.155-.378.595-.074.107c-.081.102-.18.187-.294.253l-.117.058-.129.045-.126.027-.092.008-.21-.003-.173-.04a1.034 1.034 0 01-.524-.374l-.072-.112-.053-.11-.043-.123-.017-.078-.099-.541-.033-.278c-.204-2.04.526-4.066 1.996-5.55l.205-.198.206-.185.325-.27c.26-.2.647-.421 1.061-.6.398-.172.823-.31 1.273-.412l.342-.07.353-.057.361-.045.046-1.678.01-.127.026-.124.042-.122.055-.113.069-.105.055-.068.056-.06.107-.09.116-.073zm.924 1.884v2.03l-.047.048-.597.01c-.999.018-1.875.195-2.612.513-.187.08-.356.167-.505.256l-.108.068-.105.071-.061.046-.042.037C6.32 6.835 5.552 8.36 5.51 9.954v.273l.025-.034C7.01 8.149 8.944 7.226 10.983 7.41l.687.077.043.048v2.03l3.611-3.452-3.612-3.401z"
                        ></path>
                      </svg>
                    </use>
                  </svg>
                  공유
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReplyBox;
