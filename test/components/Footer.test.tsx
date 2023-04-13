import { render, screen } from '@testing-library/react';

import Footer from '../../ui/footer';
import Wrapper from '../TestWrapper';

describe('Footer Test', () => {
  test('Footer Text', async () => {
    render(
      <Wrapper>
        <Footer />
      </Wrapper>,
    );

    await screen.findByText(/Footer/);
  });
});
