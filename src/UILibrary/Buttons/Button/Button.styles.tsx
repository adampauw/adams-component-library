import {
  VF_ACTIVE_BLUE,
  VF_ACTIVE_GREY,
  VF_BLACK,
  VF_BLUE,
  VF_DISABLED_BLUE,
  VF_DISABLED_GREY,
  VF_GREY,
  VF_HOVER_BLUE,
  VF_HOVER_GREY,
  VF_WHITE,
} from '../../../constants/Colours.constants';
import { BOX_SHADOW, BOX_SHADOW_ACTIVE, BOX_SHADOW_DISABLED, BOX_SHADOW_HOVER } from '../../../constants/CSS.constants';
import { FONT_SIZE_SMALL } from '../../../constants/UI.constants';
import { makeStyles } from '../../../Helpers/makeStyles';

export const useStyles = () =>
  makeStyles({
    button: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '8px 20px 9px',
      fontSize: FONT_SIZE_SMALL,
      gap: '8px',
      borderRadius: '10px',
      height: '40px',
      border: 'none',
      fontFamily: 'system-ui',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '20px',
      flex: 'none',
      order: '0',
      flexGrow: '0',
    },
    primary: {
      backgroundColor: VF_BLUE,
      color: VF_WHITE,
      boxShadow: BOX_SHADOW,
      '&:hover': {
        backgroundColor: VF_HOVER_BLUE,
        boxShadow: BOX_SHADOW_HOVER,
      },
      '&:active': {
        backgroundColor: VF_ACTIVE_BLUE,
        boxShadow: BOX_SHADOW_ACTIVE,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: VF_DISABLED_BLUE,
        boxShadow: BOX_SHADOW_DISABLED,
      },
    },
    secondary: {
      backgroundColor: VF_GREY,
      color: VF_BLACK,
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: VF_HOVER_GREY,
      },
      '&:active': {
        backgroundColor: VF_ACTIVE_GREY,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: VF_DISABLED_GREY,
      },
    },
  });
