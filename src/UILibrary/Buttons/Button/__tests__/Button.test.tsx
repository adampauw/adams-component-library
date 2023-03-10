import { render } from '@testing-library/react';
import React from 'react';

import Button from '../Button';
import { ButtonVariant } from '../Button.Enum';

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
}));
describe('Button', () => {
  it('should render the children and icon when not loading', () => {
    const { getByText } = render(
      <Button variant={ButtonVariant.PRIMARY} isLoading={false} icon={<span>icon</span>}>
        Click me!
      </Button>
    );

    expect(getByText('Click me!')).toBeInTheDocument();
    expect(getByText('icon')).toBeInTheDocument();
  });

  it('should render the loading dots when loading', () => {
    const { getByTestId } = render(
      <Button variant={ButtonVariant.PRIMARY} isLoading={true} icon={<span>icon</span>}>
        Click me!
      </Button>
    );

    expect(getByTestId('loading')).toBeInTheDocument();
  });

  it('should not render loading dots when loading is false', async () => {
    const { queryByTestId } = render(
      <Button variant={ButtonVariant.PRIMARY} isLoading={false} icon={<span>icon</span>} withGracefulDelay={true}>
        Click me!
      </Button>
    );

    const loadingDots = queryByTestId('loading');
    expect(loadingDots).not.toBeInTheDocument();
  });
});
