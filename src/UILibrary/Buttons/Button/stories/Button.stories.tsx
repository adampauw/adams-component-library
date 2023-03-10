import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from '../Button';
import { ButtonVariant } from '../Button.Enum';

export default {
  title: 'Components/Buttons',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: [ButtonVariant.PRIMARY, ButtonVariant.SECONDARY],
      },
    },
    isLoading: {
      control: 'boolean',
    },
    withGracefulDelay: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
  args: {
    isLoading: false,
    withGracefulDelay: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: ButtonVariant.PRIMARY,
  isLoading: false,
  children: 'Label',
};
export const Hover = Template.bind({});
Hover.args = {
  variant: ButtonVariant.PRIMARY,
  isLoading: false,
  children: 'Label',
};

Hover.parameters = { pseudo: { hover: true } };
