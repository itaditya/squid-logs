import { style } from '@vanilla-extract/css';
import { vars } from '../../../app/theme.css';
import { getHslColor } from '../../../../../shared/utils/colors';

export const formClass = style({
  display: 'flex',
  flexDirection: 'column',
  paddingInline: '25px',
  paddingTop: '30px',
  paddingBottom: '10px',
  gap: '10px',
});

export const formDescriptionClass = style({
  margin: '0',
  marginBlockEnd: '20px',
  color: getHslColor(vars.color.raw.gray[200]),
});

export const fieldClass = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  minHeight: '85px',
});

export const labelClass = style({
  fontSize: '20px',
  selectors: {
    '&[data-status="submitting"]': {
      pointerEvents: 'none',
    },
  },
});

export const inputClass = style({
  fontSize: '16px',
  backgroundColor: 'transparent',
  color: getHslColor(vars.color.raw.pink[600]),
  paddingBlock: '15px 5px',
  paddingInline: '2px',
  border: 'none',
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
  borderBottomColor: getHslColor(vars.color.raw.black[900]),
  transition: '0.2s ease-in-out',
  selectors: {
    '&[data-status="submitting"]': {
      opacity: 0.7,
      pointerEvents: 'none',
    },
    '&::placeholder': {
      color: getHslColor(vars.color.raw.gray[200]),
    },
    '&:focus': {
      outline: 'none',
      backgroundColor: getHslColor(vars.color.brand.highlight[500]),
      color: getHslColor(vars.color.raw.black[900]),
      borderBottomWidth: '0',
      borderBottomColor: 'transparent',
      borderRadius: '5px',
      paddingInline: '10px',
      paddingBlock: '15px',
    },
    '&:focus::placeholder': {
      color: getHslColor(vars.color.brand.white),
    },
  },
});

export const actionsClass = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const submitActionClass = style({
  fontSize: '20px',
  backgroundColor: getHslColor(vars.color.brand.highlight[600]),
  border: 'none',
  borderRadius: '4px',
  paddingInline: '25px',
  paddingBlock: '10px',
});
