/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./CommentBox.css";

class CommentWriter extends Component {
  render() {
    return (
      <div class="CommentWriter">
        <div class="comment_inbox">
          <strong class="blind">댓글을 입력하세요</strong>
          <em class="comment_inbox_name">20150228김현석</em>
          <textarea
            placeholder="댓글을 남겨보세요"
            rows="1"
            class="comment_inbox_text"
          ></textarea>
        </div>
        <div class="comment_attach">
          <div class="attach_box">
            <label htmlFor="attach3" class="button_file">
              <svg aria-hidden="true" class="svg-icon ico-post-photo-323232">
                <use href="#ico-post-photo-323232">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 17"
                    id="ico-post-photo-323232"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M11.521 1.3l-5.562.48-.55 1.706H2.966c-.405 0-.773.16-1.039.421-.26.256-.423.61-.423 1v8.671c0 .391.162.745.423 1 .266.262.634.422 1.04.422h12.224c.405 0 .773-.16 1.039-.421.26-.256.423-.61.423-1V4.906c0-.39-.163-.744-.423-1a1.48 1.48 0 00-1.04-.421h-2.443L11.521 1.3z"></path>
                      <path d="M9.078 6.4c-.702 0-1.338.29-1.798.757A2.615 2.615 0 006.529 9c0 .72.286 1.371.75 1.843a2.517 2.517 0 003.598 0A2.618 2.618 0 0011.628 9a2.62 2.62 0 00-.75-1.843 2.522 2.522 0 00-1.8-.757z"></path>
                    </g>
                  </svg>
                </use>
              </svg>
              <input
                id="attach3"
                type="file"
                title="사진첨부"
                accept="image/*, image/heic"
                class="blind"
              />
            </label>
            <a href="#" role="button" class="button_sticker">
              <svg aria-hidden="true" class="svg-icon ico-post-sticker-323232">
                <use href="#ico-post-sticker-323232">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17 17"
                    id="ico-post-sticker-323232"
                  >
                    <g fill="none" fillRule="evenodd">
                      <circle
                        cx="5.862"
                        cy="6.8"
                        r="1"
                        fill="currentColor"
                      ></circle>
                      <circle
                        cx="10.887"
                        cy="6.8"
                        r="1"
                        fill="currentColor"
                      ></circle>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.6"
                        d="M10.887 11.08c-.66 1.067-1.563 1.67-2.503 1.67-.95 0-1.86-.614-2.522-1.7"
                      ></path>
                      <ellipse
                        cx="8.374"
                        cy="8.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        rx="7.574"
                        ry="7.7"
                      ></ellipse>
                    </g>
                  </svg>
                </use>
              </svg>
            </a>
          </div>
          <div class="register_box">
            <a href="#" role="button" class="button btn_register">
              등록
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentWriter;
