import { render } from '@testing-library/react';

import Image from '../Image';
import { ImageVariant } from '../Image.Enum';

const imagePath = 'https://example.com/image.png';
describe('Image component', () => {
  it('renders with Small variant and image path', () => {
    const variant = ImageVariant.SMALL;
    const { container } = render(<Image imagePath={imagePath} variant={variant} />);
    expect((container.firstChild as HTMLElement).className).toContain(`${variant}`);
  });
  it('renders with Round variant and image path', () => {
    const variant = ImageVariant.ROUND;
    const { container } = render(<Image imagePath={imagePath} variant={variant} />);
    expect((container.firstChild as HTMLElement).className).toContain(`${variant}`);
  });
  it('renders with Hero variant and image path', () => {
    const variant = ImageVariant.HERO;
    const { container } = render(<Image imagePath={imagePath} variant={variant} />);
    expect((container.firstChild as HTMLElement).className).toContain(`${variant}`);
  });
});
