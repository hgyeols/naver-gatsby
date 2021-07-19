import React from 'react';
import Link from './link';

import { StyledNextPrevious } from './styles/PageNavigationButtons';

const NextPrevious = ({ mdx, nav }) => {
  let currentIndex;

  const currentPaginationInfo = nav.map((el, index) => {
    if (el && el.url === mdx.fields.slug) {
      currentIndex = index;
    }
  });

  const nextInfo = {};

  const previousInfo = {};

  if (currentIndex === undefined) {
    // index
    if (nav[0]) {
      nextInfo.url = nav[0].url;
      nextInfo.title = nav[0].title;
    }
    previousInfo.url = null;
    previousInfo.title = null;
    currentIndex = -1;
  } else if (currentIndex === 0) {
    // first page
    nextInfo.url = nav[currentIndex + 1] ? nav[currentIndex + 1].url : null;
    nextInfo.title = nav[currentIndex + 1] ? nav[currentIndex + 1].title : null;
    previousInfo.url = null;
    previousInfo.title = null;
  } else if (currentIndex === nav.length - 1) {
    // last page
    nextInfo.url = null;
    nextInfo.title = null;
    previousInfo.url = nav[currentIndex - 1] ? nav[currentIndex - 1].url : null;
    previousInfo.title = nav[currentIndex - 1] ? nav[currentIndex - 1].title : null;
  } else if (currentIndex) {
    // any other page
    nextInfo.url = nav[currentIndex + 1].url;
    nextInfo.title = nav[currentIndex + 1].title;
    if (nav[currentIndex - 1]) {
      previousInfo.url = nav[currentIndex - 1].url;
      previousInfo.title = nav[currentIndex - 1].title;
    }
  }

  return (
    <StyledNextPrevious>
      {previousInfo.url && currentIndex >= 0 ? (
        <Link to={nav[currentIndex - 1].url} className="previousBtn">
          <div className="preRightWrapper">
            <div className="leftArrow">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.98817 14L2 8.01183L7.91619 2"
                  stroke="#131313"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className={'nextPreviousTitle'}>
              <div className="smallContent">
                <span>Previous</span>
              </div>
              <span>{nav[currentIndex - 1].title}</span>
            </div>
          </div>
        </Link>
      ) : null}
      {nextInfo.url && currentIndex >= 0 ? (
        <Link to={nav[currentIndex + 1].url} className={'nextBtn'}>
          <div className="nextRightWrapper">
            <div className={'nextPreviousTitle'}>
              <div className={'smallContent'}>
                <span>Next</span>
              </div>
              <span>{nav[currentIndex + 1] && nav[currentIndex + 1].title}</span>
            </div>

            <div className="rightArrow">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00011 14L13.9883 8.01183L8.07209 2"
                  stroke="#131313"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>
      ) : null}
    </StyledNextPrevious>
  );
};

export default NextPrevious;
