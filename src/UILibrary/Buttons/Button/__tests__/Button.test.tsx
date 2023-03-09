import { fireEvent, render, waitFor } from '@testing-library/react';

import Button from '../Button';
import { ButtonVariant } from '../Button.Enum';

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

    expect(getByTestId('loading-dots')).toBeInTheDocument();
  });

  it('should toggle the loading state on click', async () => {
    const { getByText, getByTestId } = render(
      <Button variant={ButtonVariant.PRIMARY} isLoading={false} icon={<span>icon</span>}>
        Click me!
      </Button>
    );

    fireEvent.click(getByText('Click me!'));
    expect(getByTestId('loading-dots')).toBeInTheDocument();

    await waitFor(() => {
      expect(getByTestId('loading-dots')).not.toBeInTheDocument();
    });
  });

  it('should have a graceful delay when withGracefulDelay is true', async () => {
    jest.useFakeTimers();

    const { getByText, getByTestId } = render(
      <Button variant={ButtonVariant.PRIMARY} isLoading={false} icon={<span>icon</span>} withGracefulDelay={true}>
        Click me!
      </Button>
    );

    fireEvent.click(getByText('Click me!'));
    expect(getByTestId('loading-dots')).not.toBeInTheDocument();

    jest.runAllTimers();
    expect(getByTestId('loading-dots')).toBeInTheDocument();

    await waitFor(() => {
      expect(getByTestId('loading-dots')).not.toBeInTheDocument();
    });
  });
});
