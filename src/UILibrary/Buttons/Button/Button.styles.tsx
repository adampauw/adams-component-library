import styled from 'styled-components';

import {
  VF_ACTIVE_BLUE,
  VF_BLACK,
  VF_BLUE,
  VF_DISABLED_BLUE,
  VF_DISABLED_GREY,
  VF_GREY,
  VF_HOVER_BLUE,
  VF_WHITE,
} from '../../../constants/Colours.constants';
import { BOX_SHADOW } from '../../../constants/CSS.constants';
import { FONT_SIZE_SMALL } from '../../../constants/UI.constants';
import { makeStyles } from '../../../Helpers/makeStyles';
import { ButtonVariant } from './Button.Enum';

export const useStyles = () =>
  makeStyles({
    button: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: '8px 20px 9px',
      fontSize: FONT_SIZE_SMALL,
      gap: '8px',
      boxShadow: BOX_SHADOW,
      borderRadius: '10px',
      border: 'none',
      fontFamily: 'system-ui',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHight: '20px',
    },
    primary: {
      backgroundColor: VF_BLUE,
      color: VF_WHITE,
      '&:hover': {
        backgroundColor: VF_HOVER_BLUE,
      },
      '&:active': {
        backgroundColor: VF_ACTIVE_BLUE,
      },
    },
  });

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 20px 9px;
  font-size: ${FONT_SIZE_SMALL};
  gap: 8px;
  box-shadow: ${BOX_SHADOW};
  border-radius: 10px;
  border: none;
  font-family: system-ui;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;
