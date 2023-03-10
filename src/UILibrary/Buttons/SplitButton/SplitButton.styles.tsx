import { VF_BLUE, VF_GREY, VF_HOVER_GREY, VF_WHITE } from '../../../constants/Colours.constants';
import { FONT_SIZE_MEDIUM } from '../../../constants/UI.constants';
import { makeStyles } from '../../../Helpers/makeStyles';

export const useStyles = makeStyles({
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    marginTop: '5px',
    padding: '8px 20px 9px',
    backgroundColor: VF_BLUE,
    color: VF_WHITE,
    fontWeight: 'bold',
    borderRadius: '10px 0 0 10px',
    border: '0px',
    boxShadow: '#13214414 0px -1px 0px 1px inset, #13214429 0px 1px 3px 0px, #13214414 0px 0px 1px 0px, #1321441a 0px 1px 1px 0px',
    transition: '0.2s',
    fontFamily: 'Ttinterfaces, sans-serif',
    fontSize: FONT_SIZE_MEDIUM,
    lineHeight: '24px',
    textAlign: 'center',
    letterSpacing: '0.02rem',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: `#${VF_BLUE}`,
    },
  },
  actionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  buttonWrapper: {
    width: 'max-content',
  },
  menuButton: {
    backgroundColor: VF_BLUE,
    color: VF_WHITE,
    border: 'none',
    marginTop: '5px',
    borderRadius: '0 10px 10px 0',
    borderLeft: `1px solid ${VF_WHITE}`,
    width: '40px',
    '&:hover': {
      backgroundColor: VF_BLUE,
    },
  },
  unorderedList: {
    top: '40px',
    right: '0',
    padding: '8px 0',
    marginTop: '0',
    backgroundColor: VF_GREY,
    border: `1px solid ${VF_GREY}`,
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    listStyle: 'none',
  },
  listItem: {
    padding: '8px 16px',
    cursor: 'pointer',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: VF_HOVER_GREY,
    },
  },
});
