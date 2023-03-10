import { makeStyles } from '../../Helpers/makeStyles';

export const useStyles = (imagePath: string) =>
  makeStyles({
    container: {
      background: `url(${imagePath})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      margin: 'auto',
    },
    small: {
      width: '50px',
      height: '50px',
    },
    round: {
      width: '80px',
      height: '80px',
      borderRadius: '25px',
    },
    hero: {
      width: '100%',
      height: '120px',
    },
  });
