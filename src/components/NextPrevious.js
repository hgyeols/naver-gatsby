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
        <Link to={nav[currentIndex - 1].url} className={'previousBtn'}>
          <div className={'leftArrow'}>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.98817 13L1 7.01183L6.91619 1" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={'preRightWrapper'}>
            <div className={'smallContent'}>
              <span>Previous</span>
            </div>
            <div className={'nextPreviousTitle'}>
              <span>{nav[currentIndex - 1].title}</span>
            </div>
          </div>
        </Link>
      ) : null}
      {nextInfo.url && currentIndex >= 0 ? (
        <Link to={nav[currentIndex + 1].url} className={'nextBtn'}>
          <div className={'nextRightWrapper'}>
            <div className={'smallContent'}>
              <span>Next</span>
            </div>
            <div className={'nextPreviousTitle'}>
              <span>{nav[currentIndex + 1] && nav[currentIndex + 1].title}</span>
            </div>
          </div>
          <div className={'rightArrow'}>
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.01281 12.936L7.00098 6.94787L1.08479 0.936035" stroke="#212121" strokeWidth="2"/>
            </svg>
          </div>
        </Link>
      ) : null}
    </StyledNextPrevious>
  );
};

export default NextPrevious;