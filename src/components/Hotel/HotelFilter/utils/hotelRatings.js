import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    left: '5rem !important',
    '& .MuiPaper-root': {
      overflow: 'visible',
      '&::before': {
        position: 'absolute',
        top: '-4.4rem',
        fontSize: '5rem',
        fontFamily: 'Material Icons',
        content: '"arrow_drop_up"',
        color: 'white',
      },
    },
  },
}));

export const ratings = [
  {
    value: '5',
    label: ' Excellent',
  },
  {
    value: '4.5+',
    label: ' Very Good',
  },
  {
    value: '4+',
    label: ' Good',
  },
  {
    value: '3.5+',
    label: ' Fair',
  },
  {
    value: '3',
    label: ' Okay',
  },
];
