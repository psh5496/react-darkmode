import { css, Global } from "@emotion/react";

const style = (theme: any) => css`
  * {
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
  }

  body {
    background-color: ${theme.bgColor};
    color: ${theme.textColor};
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
