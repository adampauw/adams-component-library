import styled from 'styled-components';

import { VF_ACTIVE_BLUE, VF_BLACK, VF_BLUE, VF_DISABLED_BLUE, VF_GREY, VF_HOVER_BLUE, VF_WHITE } from '../../../constants/Colours.constants';
import { BOX_SHADOW } from '../../../constants/CSS.constants';
import { FONT_SIZE_SMALL } from '../../../constants/UI.constants';

export const buttonVariants = {
  PRIMARY: {
    backgroundColor: VF_BLUE,
    color: VF_WHITE,
    '&:hover': {
      backgroundColor: VF_HOVER_BLUE,
    },
    '&:active': {
      backgroundColor: VF_ACTIVE_BLUE,
    },
    '&:disabled': {
      backgroundColor: VF_DISABLED_BLUE,
    },
  },
  SECONDARY: {
    backgroundColor: VF_GREY,
    color: VF_BLACK,
  },
};

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
