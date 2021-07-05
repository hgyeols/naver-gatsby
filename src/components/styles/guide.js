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

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 48px;
    padding: 0 0 8px 0;
  }

  @media (max-width: 767px) {
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
  padding: 9px 0 18px 0;
  flex: 1;
  margin-top: 0;
  margin-bottom: 29px;
  padding-top: 68px;
  text-decoration: solid underline #131313;
  text-underline-offset: 5px;
  padding-bottom: 4px;
  color: #131313 !important;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 48px;
    padding: 0 0 8px 0;
  }

  @media (max-width: 767px) {
    font-size: 36px;
    padding: 0 0 8px 0;
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

  a {
    transition: color 0.15s;
    color: ${props => props.theme.colors.link};
  }

  code {
    border: 1px solid #ede7f3;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.9375em;

    background: ${props => props.theme.colors.background};
  }

  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;
