import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { VF_WHITE } from '../../constants/Colours.constants';
import { Dot } from './LoadingDot';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px 2px',
  },
});

export interface DotsProps {
  color?: string;
}

export const LoadingDots = ({ color = VF_WHITE }: DotsProps) => {
  const classes = useStyles();

  return (
    <div data-testid="loading" className={classes.container}>
      <Dot color={color} delay={0} />
      <Dot color={color} delay={0.2} />
      <Dot color={color} delay={0.4} />
    </div>
  );
};
