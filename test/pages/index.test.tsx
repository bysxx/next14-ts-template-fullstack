import { render, screen } from '@testing-library/react';

import Index from '../../pages/index';
import Wrapper from '../TestWrapper';

describe('Index page', () => {
  test('should have h1 tag', () => {
    render(
      <Wrapper>
        <Index />
      </Wrapper>,
    );

    const heading = screen.getByRole('heading', {
      name: /main/,
    });

    expect(heading).toBeInTheDocument();
  });
});
