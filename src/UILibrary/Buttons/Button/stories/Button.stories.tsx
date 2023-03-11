import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import IconPlay from '../../../../../public/play';
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
    icon: {
      control: {
        type: 'radio',
        options: [undefined, <IconPlay />],
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    isLoading: false,
    withGracefulDelay: false,
    disabled: false,
    icon: undefined,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} icon={args.icon ? <IconPlay key="play" /> : undefined} disabled={args.disabled} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: ButtonVariant.PRIMARY,
  isLoading: false,
  children: 'Label',
  icon: <IconPlay />,
};

Primary.parameters = { pseudo: { hover: false } };
