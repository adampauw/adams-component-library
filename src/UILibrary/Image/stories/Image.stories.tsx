import { ComponentMeta, ComponentStory } from '@storybook/react';

import VoiceflowBanner from '../../../../public/voiceflowBanner.png';
import Image from '../Image';
import { ImageVariant } from '../Image.Enum';

export default {
  title: 'Components/Images',
  component: Image,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: [ImageVariant.ROUND, ImageVariant.SMALL, ImageVariant.HERO],
      },
    },
  },
  args: {
    imagePath: VoiceflowBanner,
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const ImageComponent = Template.bind({});
ImageComponent.args = {
  variant: ImageVariant.HERO,
  imagePath: VoiceflowBanner,
};
