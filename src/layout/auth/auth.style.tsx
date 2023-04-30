import styled from "styled-components";
import themeConfig from "../../config/theme.config";

export const AuthStyle = styled.main`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${themeConfig.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 420px;
    margin: 0 auto;
    padding: 12px;
    background: ${themeConfig.color.light};
    border-radius: ${themeConfig.gap.md}px;
  }
`