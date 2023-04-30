import styled from 'styled-components'
import themeConfig from '../../config/theme.config'
import { COLOR, DISPLAY } from '../../interface'

export interface BTN {
  children: React.ReactNode
  color?: COLOR
  variant?: DISPLAY
  attr?: any
}

export const ButtonStyle = styled.button`
  min-width: 150px;
  padding: ${themeConfig.gap.sm}px;
  border: none;
  border-radius: ${themeConfig.gap.xs4}px;
  transition: all .3s ease;
  cursor: pointer;
  text-decoration: none;
  background: ${({ color }: BTN) => {
    return themeConfig.color[color || 'primary']
  }};
  color: ${({ color }: BTN) => {
    return ['secondary', 'light'].includes(color || 'primary') ? themeConfig.color.dark : themeConfig.color.light
  }};
  display: ${({ variant }: BTN) => {
    return variant || 'inline-block'
  }};
  width: ${({ variant }: BTN) => {
    return variant === 'block' ? '100%' : 'auto'
  }};
  &:hover {
    opacity: .5;
  };
`