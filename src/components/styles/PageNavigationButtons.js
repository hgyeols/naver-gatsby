import styled from '@emotion/styled';

export const StyledNextPrevious = styled('div')`
  margin: 0px;
  padding: 0px;
  width: auto;
  display: grid;
  grid-template-rows: auto;
  column-gap: 34px;
  grid-template-columns: calc(50% - 8px) calc(50% - 8px);

  .previousBtn {
    cursor: pointer;
    -moz-box-align: center;
    -moz-box-direction: normal;
    -moz-box-orient: horizontal;
    margin: 0px;
    padding: 0px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    place-self: stretch;
    text-decoration: none;
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
    flex-direction: row;
    align-items: center;
    place-self: stretch;
    text-decoration: none;
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
    margin: 0px;
    color: rgb(157, 170, 182);
    flex: 0 0 auto;
    font-size: 24px;
    transition: color 200ms ease 0s;
    padding: 16px;
    padding-right: 16px;
  }
  .rightArrow {
    display: flex;
    flex: 0 0 auto;
    font-size: 24px;
    transition: color 200ms ease 0s;
    padding: 16px;
    padding-left: 16px;
    margin: 0px;
    color: rgb(157, 170, 182);
  }
`;