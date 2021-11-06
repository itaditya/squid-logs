import { style } from '@vanilla-extract/css';

export const adminViewClass = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '50px',
  paddingBlock: '60px',
});

export const sectionClass = style({
  display: 'contents',
});

export const gridClass = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '40px 10px',
});

export const rowClass = style({
  display: 'contents',
});
