import { VF_BLACK, VF_GREEN, VF_PINK, VF_PURPLE } from '../../constants/Colours.constants';
import { makeStyles } from '../../Helpers/makeStyles';

export const useStyles = (isOpen: boolean) =>
  makeStyles({
    container: {
      display: 'flex',
      backgroundColor: VF_PURPLE,
      justifyContent: 'space-between',
    },
    itemContainer: {
      display: 'grid',
      gridTemplateColumns: isOpen ? 'repeat(3, minmax(calc(100%/3), 1fr))' : 'repeat(4, minmax(calc(100%/4), 1fr))',
      width: isOpen ? 'calc(100vw - 225px)' : '100%',
      maxHeight: '0vh',
    },
    item: {
      margin: '20px auto',
      minWidth: '80%',
    },
    activeItem: {
      outline: `2px solid ${VF_BLACK}`,
      backgroundColor: VF_GREEN,
    },
    sidebar: {
      width: '150px',
      height: '100vh',
      backgroundColor: VF_PINK,
      padding: '0 20px',
    },
    collapseList: {
      minWidth: 'unset!important',
    },
  });
