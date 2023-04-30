import themeConfig from "../config/theme.config";

export type COLOR = keyof typeof themeConfig.color

export type DISPLAY = 'block' | 'inline' | 'inline-bock' | 'flex' | 'inline-flex'