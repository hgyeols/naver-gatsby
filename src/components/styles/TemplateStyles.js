import styled from '@emotion/styled';
import config from '../../../config.js';

export const StyledHeading = styled('h1')`
  font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
  font-weight: 600 !important;
  font-size: 58px;
  line-height: 130%;
  flex: 1;
  margin-top: 0;
  padding-top: 68px;
  padding-bottom: 32px;
  color: #131313 !important;

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    font-size: 46px;
    padding-top: 54px;
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    padding-top: 54px;
    font-size: 36px;
  }
`;

export const StyledHeadingTabMain = styled('h1')`
  font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
  font-weight: 600 !important;
  font-size: 66px;
  line-height: 1;
  flex: 1;
  padding-bottom: 78px;
  padding-top: 245px;
  text-decoration: solid underline #131313;
  -webkit-text-decoration: solid underline #131313;
  text-decoration: solid underline #131313 5px;
  -webkit-text-decoration: solid underline #131313 5px;

  text-underline-offset: 8px;
  color: #131313 !important;

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    font-size: 52px;
    text-decoration: solid underline #131313 4px;
    text-underline-offset: 6px;
    padding-bottom: 74px;
    padding-top: 184px;
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    padding-top: 112px;
    font-size: 41px;
    padding-bottom: 57px;
    text-decoration: solid underline #131313 3px;
  }
`;

export const StyledHeadingContactUs = styled('h1')`
  font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
  font-weight: 700 !important;
  font-size: 58px;
  line-height: 130%;
  flex: 1;
  margin-top: 68px;
  margin-bottom: 10px;
  height: 75px;
  color: #000 !important;

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    font-size: 46px;
    height: 60px;
    margin-top: 54px;
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    margin-top: 54px;
    font-size: 36px;
    height: 47px;
    color: #131313 !important;
  }
`;

export const Divider = styled((props) => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 10px 0 12px 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #e2e2e2;
  }
`;

export const StyledMainWrapperTabMain = styled.div`
  max-width: ${config.responsive.maxWidth}px;
  color: #424242;
  font-weight: 300;

  b {
    font-weight: 600;
  }

  ul,
  ol {
    align-items: center;
    li {
      letter-spacing: -0.017em;
      line-height: 160%;
      color: #636363;
    }
  }

  ul {
    padding: 0px 0px 0px 21px;

    li::marker {
      font-size: 14px;
    }
  }

  ol {
    padding: 0px 0px 0px 18px;
  }

  h1 {
    font-weight: 600;
    margin-bottom: 8px;
  }

  h2 {
    font-weight: 600;
    font-size: 23px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
  }

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    h1 {
      font-size: 29px;
    }

    h2 {
      font-size: 20px;
    }

    ul,
    ol {
      li {
        height: initial;
      }
    }
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    h1 {
      font-size: 29px;
    }

    h2 {
      font-size: 20px;
    }

    ul,
    ol {
      li {
        height: initial;
      }
    }
  }
`;

export const StyledMainWrapper = styled.div`
  max-width: ${config.responsive.maxWidth}px;
  color: #424242;

  h1 {
    font-weight: 600;
  }

  h2 {
    font-weight: 600;
  }

  h3 {
    font-weight: 600;
  }

  ul,
  ol {
    align-items: center;
    li {
      line-height: 160%;

      letter-spacing: -0.017em;
      color: #636363;
    }
  }

  ul {
    padding: 0px 0px 0px 21px;

    li::marker {
      font-size: 14px;
    }
  }

  ol {
    padding: 0px 0px 0px 18px;
  }

  code {
    border: 1px solid #ede7f3;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.9375em;

    background: ${(props) => props.theme.colors.background};
  }

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    h1 {
      font-size: 29px;
    }

    h2 {
      font-size: 20px;
    }

    ul,
    ol {
      li {
        height: initial;
      }
    }
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    h1 {
      font-size: 29px;
    }

    h2 {
      font-size: 20px;
    }

    ul,
    ol {
      li {
        height: initial;
      }
    }
  }
`;

export const StyledMainWrapperContactUs = styled.div`
  max-width: ${config.responsive.maxWidth}px;
  color: #474747;

  h1 {
    margin-top: 18px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  h2 {
    font-weight: 600;
  }

  h3 {
    font-weight: 600;
  }

  ul,
  ol {
    align-items: center;
    li {
      line-height: 160%;

      letter-spacing: -0.017em;
      color: #636363;
    }
  }

  ul {
    padding: 0px 0px 0px 21px;

    li::marker {
      font-size: 14px;
    }
  }

  ol {
    padding: 0px 0px 0px 18px;
  }

  code {
    border: 1px solid #ede7f3;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.9375em;

    background: ${(props) => props.theme.colors.background};
  }

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    h1 {
      font-size: 29px;
    }

    h2 {
      font-size: 20px;
    }

    ul,
    ol {
      li {
        height: initial;
      }
    }
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    h1 {
      font-size: 29px;
    }

    h2 {
      font-size: 20px;
    }

    ul,
    ol {
      li {
        height: initial;
      }
    }
  }
`;
