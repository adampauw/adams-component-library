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
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    isLoading: false,
    withGracefulDelay: false,
    disabled: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} disabled={args.disabled} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: ButtonVariant.PRIMARY,
  isLoading: false,
  children: 'Label',
};

Primary.parameters = { pseudo: { hover: false } };
