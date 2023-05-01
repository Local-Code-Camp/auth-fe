import styled from "styled-components";
import { AuthLayout } from "../../layout";
import themeConfig from "../../config/theme.config";

export const RegisterContainer = styled(AuthLayout)`
  h2 {
    margin-bottom: ${themeConfig.gap.md}px;
    font-size: ${themeConfig.gap.xl}px;
    border-bottom: 1px solid ${themeConfig.color.secondary};
    padding-bottom: ${themeConfig.gap.md}px;
  }
  button:last-child {
    margin-top: ${themeConfig.gap.md}px;
  }
`