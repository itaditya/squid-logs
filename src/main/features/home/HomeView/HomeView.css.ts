import { style } from '@vanilla-extract/css';
import { vars } from '../../app/theme.css';
import { getHslColor } from '../../../../shared/utils/colors';

export const homeViewClass = style({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateAreas: `
    "nav"
    "main"
    "footer"
  `,
  columnGap: '20px',
  flex: 1,
});
