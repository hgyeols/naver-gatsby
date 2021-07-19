import styled from '@emotion/styled';

export const StyledNextPrevious = styled('div')`
  margin: 0px;
  padding: 0px;
  width: auto;
  display: grid;
  grid-template-rows: auto;
  column-gap: 10px;
  grid-template-columns: 1fr 1fr;

  .nextPreviousTitle {
    display: block;
    margin: 0px;
    padding: 0px;
    transition: color 200ms ease 0s;
    position: relative;
  }

  .nextPreviousTitle span {
    font-family: 'SF Pro Display';
    font-weight: 700;
    font-size: 23px;
    line-height: 1.3;
    color: #131313;
  }

  .previousBtn {
    cursor: pointer;
    -moz-box-align: center;
    -moz-box-direction: normal;
    -moz-box-orient: horizontal;
    margin: 0px;
    padding: 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    place-self: stretch;
    text-decoration: none;
    justify-content: center;

    .preRightWrapper {
      display: flex;
      margin: 0;
      text-align: left;
      align-items: center;
    }

    .smallContent {
      position: absolute;
      top: -18px;

      span {
        font-family: 'SF Pro Text';
        font-weight: 400;
        font-size: 14px;
        line-height: 1.3;
        color: #919191;
      }
    }
  }

  .nextBtn {
    cursor: pointer;
    -moz-box-align: center;
    -moz-box-direction: normal;
    -moz-box-orient: horizontal;
    margin: 0px;
    padding: 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    place-self: stretch;
    text-decoration: none;
    justify-content: center;

    .nextRightWrapper {
      display: flex;
      margin: 0;
      align-items: center;
      justify-content: flex-end;
    }

    .smallContent {
      position: absolute;
      top: -18px;

      span {
        font-family: 'SF Pro Text';
        font-weight: 400;
        font-size: 14px;
        line-height: 1.3;
        color: #919191;
      }
    }
  }

  .nextBtn:hover,
  .previousBtn:hover {
    text-decoration: none;
  }
  .nextBtn:hover .rightArrow,
  .previousBtn:hover .leftArrow {
  }

  .leftArrow {
    display: flex;
    margin: 0 16px 0 0;
    transition: color 200ms ease 0s;
  }

  .rightArrow {
    display: flex;
    transition: color 200ms ease 0s;
    margin: 0 0 0 16px;
  }
`;
