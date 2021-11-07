import { style } from '@vanilla-extract/css';
import { vars } from '../../app/theme.css';
import { getHslColor } from '../../../../shared/utils/colors';

export const navbarClass = style({
  display: 'flex',
  justifyContent: 'space-between',
  paddingInline: '40px',
  paddingBlock: '20px',
});
