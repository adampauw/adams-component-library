import * as React from 'react';

import { VF_WHITE } from '../src/constants/Colours.constants';

const IconChevronDown = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill={VF_WHITE}
    stroke={VF_WHITE}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default IconChevronDown;
