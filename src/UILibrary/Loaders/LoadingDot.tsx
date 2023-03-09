import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { VF_WHITE } from '../../constants/Colours.constants';

interface DotProps {
  delay: number;
  color: string;
}

const useStyles = makeStyles({
  dotContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: (props: DotProps) => ({
    animation: `$dotAnimation 0.5s ease-in-out ${props.delay}s infinite alternate`,
    width: 7,
    height: 7,
    borderRadius: '50%',
    backgroundColor: props.color,
  }),
  '@keyframes dotAnimation': {
    '0%': {
      transform: 'scale(1)',
    },
    '100%': {
      transform: 'scale(1.5)',
    },
  },
});

export const Dot = ({ delay, color = VF_WHITE }: DotProps) => {
  const classes = useStyles({ delay, color });
  return (
    <span className={classes.dotContainer}>
      <span className={classes.dot} />
    </span>
  );
};
