import { style } from '@vanilla-extract/css';
import { vars } from '../../app/theme.css';
import { getHslColor } from '../../../../shared/utils/colors';

export const authViewClass = style({
  display: 'grid',
  gridTemplateColumns: '500px auto',
  gridTemplateRows: 'auto 1fr',
  gridTemplateAreas: `
    "main nav"
    "main aside"
  `,
  columnGap: '20px',
  flex: 1,
});

export const navClass = style({
  gridArea: 'nav',
  justifySelf: 'self-end',
  paddingBlock: '30px',
  paddingInline: '20px',
});

export const mainClass = style({
  gridArea: 'main',
  justifySelf: 'center',
  alignSelf: 'center',
});

export const asideClass = style({
  gridArea: 'aside',
  alignSelf: 'center',
  textAlign: 'center',
});

export const authBoxClass = style({
  backgroundColor: getHslColor(vars.color.brand.surface.light[600]),
  minWidth: '350px',
  minHeight: '500px',
});
