import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';
import { getHslColor } from '../../../shared/utils/colors';

export const appClass = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: getHslColor(vars.color.brand.surface.dark[500]),
  fontFamily: vars.font.body,
  color: 'white',
});
