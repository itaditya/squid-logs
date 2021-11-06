import { style } from '@vanilla-extract/css';

export const adminViewClass = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '50px',
  paddingBlock: '60px',
});

export const actionsGridClass = style({
  display: 'grid',
  gridTemplateColumns: '250px 1fr 1fr',
  gap: '40px 10px',
});

export const actionRowClass = style({
  display: 'contents',
});
