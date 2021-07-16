import styled from '@emotion/styled';
import config from '../../../config.js';

export const FooterStylesWrapper = styled.div`
  .footerContainer {
    display: flex;
    justify-content: center;
    border-top: 1px solid #f2f2f3;
  }

  .footerWrapper {
    display: grid;
    grid-template-columns: 97px 1fr;
    align-items: center;
    height: 88px;
    width: ${config.responsive.maxWidth}px;

    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
      padding: 0 36px;
      width: 100%;
    }

    @media (max-width: ${config.responsive.mobileMax}px) {
      padding: 0 20px;
      width: 100%;
    }
  }

  .footerVoid {
    width: 228px;

    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
      display: none;
    }

    @media (max-width: ${config.responsive.mobileMax}px) {
      display: none;
    }
  }

  .footerLogo {
    display: flex;
    align-items: center;
  }

  .footerManual {
    padding-left: 12px;
    padding-right: 12px;
    color: #e2e2e2;
  }

  .footerLinks {
    display: flex;
    align-items: center;
    margin-left: 10px;

    ul,
    li {
      margin: 0;
      padding: 0;
    }

    li {
      display: inline-block;
      list-style: none;

      .footerSVG {
        display: inline-block;
      }

      svg {
        padding-left: 12px;
        padding-right: 12px;
        width: 100%;
        height: 12px;
      }

      a {
        font-family: 'SF Pro Text';
        font-weight: 300;
        font-size: 14px;
        line-height: 130%;
        letter-spacing: -0.017em;
        color: #636363;
        text-decoration: none !important;
        display: inline-block;
      }

      a:hover {
        color: #131313;
      }
    }
  }
`;
