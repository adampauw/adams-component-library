/* eslint-disable no-console */
import { Meta, Story } from '@storybook/react';
import React from 'react';

import SplitButton, { SplitButtonProps } from '../SplitButton';

export default {
  title: 'Components/Buttons',
  component: SplitButton,
} as Meta;

const items = [
  { label: 'Item 1', action: () => console.log('Item 1 clicked') },
  { label: 'Item 2', action: () => console.log('Item 2 clicked') },
  { label: 'Item 3', action: () => console.log('Item 3 clicked') },
];

const Template: Story<SplitButtonProps> = (args) => <SplitButton {...args} />;

export const Split = Template.bind({});
Split.args = {
  items,
};
Split.parameters = { pseudo: { hover: false } };
