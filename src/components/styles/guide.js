import styled from '@emotion/styled';

export const StyledHeading = styled('h1')`
  font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
  font-weight: 700 !important;
  font-size: 60px;
  line-height: 1.5;
  font-weight: 500;
  padding: 9px 0 18px 0;
  flex: 1;
  margin-top: 0;
  padding-top: 68px;
  padding-bottom: 8px;
  color: #131313 !important;

  @media (min-width: 600px) and (max-width: 1151px) {
    font-size: 48px;
    padding: 0 0 8px 0;
  }

  @media (max-width: 599px) {
    font-size: 36px;
    padding: 0 0 8px 0;
  }
`;

export const StyledHeadingTabMain = styled('h1')`
  font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
  font-weight: 700 !important;
  font-size: 66px;
  line-height: 1;
  font-weight: 500;
  flex: 1;
  padding-bottom: 78px;
  padding-top: 245px;
  text-decoration: solid underline #131313 6px;
  text-underline-offset: 8px;
  color: #131313 !important;

  @media (min-width: 600px) and (max-width: 1151px) {
    font-size: 52px;
    text-decoration: solid underline #131313 4px;
    text-underline-offset: 6px;
    padding-bottom: 74px;
    padding-top: 265px;
  }

  @media (max-width: 599px) {
    padding-top: 108px;
    font-size: 41px;
    padding-bottom: 57px;
  }
`;

export const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 10px 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #e2e2e2;
  }
`;

export const StyledMainWrapperTabMain = styled.div`
  max-width: 828px;
  color: #424242;

  ul,
  ol {
    align-items: center;
    li {
      height: 26px;
      letter-spacing: -0.017em;
      color: #666
    }
  }

  ul {
    padding: 0px 0px 0px 20px;
  }

  ol {
    padding: 0px 0px 0px 18px;
  }

  h2 {
    font-size: 23px;
  }

  h3 {
    font-size: 16px;
  }

  @media (min-width: 600px) and (max-width: 1151px) {
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

  @media (max-width: 599px) {
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
  max-width: 828px;
  color: #424242;

  ul,
  ol {
    align-items: center;
    li {
      height: 26px;
      
      letter-spacing: -0.017em;
      color: #666
    }
  }

  ul {
    padding: 0px 0px 0px 20px;
  }

  ol {
    padding: 0px 0px 0px 18px;
  }

  code {
    border: 1px solid #ede7f3;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.9375em;

    background: ${props => props.theme.colors.background};
  }

  @media (min-width: 600px) and (max-width: 1151px) {

    ul,
    ol {
      li {
        height: initial;
      }
    }
  }

  @media (max-width: 599px) {
    
    ul,
    ol {
      li {
        height: initial;
      }
    }

  }
`;
