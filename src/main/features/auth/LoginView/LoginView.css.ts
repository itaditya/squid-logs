import { style } from '@vanilla-extract/css';
import { vars } from '../../app/theme.css';
import { getHslColor } from '../../../../shared/utils/colors';

export const loginViewClass = style({
  color: getHslColor(vars.color.raw.black[700]),
});

export const tabsListClass = style({
  display: 'flex',
});

export const tabTriggerClass = style({
  flex: 1,
  textAlign: 'center',
  paddingBlock: '10px',
  fontSize: '24px',
  selectors: {
    '&[data-state="inactive"]': {
      backgroundColor: getHslColor(vars.color.raw.black[900]),
      color: getHslColor(vars.color.brand.white),
    },
  },
});
