import { VF_BLACK } from '../../constants/Colours.constants';
import { makeStyles } from '../../Helpers/makeStyles';

export const useStyles = (isOpen: boolean) =>
  makeStyles({
    container: {
      display: 'flex',
      backgroundColor: '#bfabf0',
      justifyContent: 'space-between',
    },
    itemContainer: {
      display: 'grid',
      gridTemplateColumns: isOpen ? 'repeat(3, minmax(250px, 1fr))' : 'repeat(4, minmax(calc(100vw/4), 1fr))',
    },
    item: {
      margin: 20,
      width: 250,
    },
    activeItem: {
      outline: `2px solid ${VF_BLACK}`,
    },
    sidebar: {
      width: 300,
      height: '100%',
      backgroundColor: '#f6c3cc',
    },
    collapseList: {
      minWidth: 'unset!important',
    },
  });
