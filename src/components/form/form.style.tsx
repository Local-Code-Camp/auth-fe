import styled from "styled-components";
import themeConfig from "../../config/theme.config";

export const FormContainer = styled.div`
  display: block;
  width: 100%;
  margin-bottom: ${themeConfig.gap.md}px;
  label {
    margin-bottom: ${themeConfig.gap.xs4}px;
    display: block;
  };
  input {
    width: 100%;
    display: block;
    margin-bottom: ${themeConfig.gap.xs4}px;
    padding: ${themeConfig.gap.xs2}px;
    border: 1px solid ${themeConfig.color.dark};
    border-radius: ${themeConfig.gap.xs4}px;
    outline: none;
    &:focus {
      border: 1px solid ${themeConfig.color.primary};
    }
  }
  small {
    font-size: ${themeConfig.gap.sm}px;
  }
`