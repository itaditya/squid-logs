import { style } from '@vanilla-extract/css';
import { vars } from '../../app/theme.css';
import { getHslColor } from '../../../../shared/utils/colors';

export const loginViewClass = style({
  fontSize: '24px',
  color: getHslColor(vars.color.raw.black[700]),
  paddingInline: '30px',
});

export const inputClass = style({
  fontSize: '20px',
  backgroundColor: getHslColor(vars.color.raw.pink[300]),
});
