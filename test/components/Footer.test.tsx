import { render, screen } from '@testing-library/react';

import Footer from '../../components/Layout/Footer';
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
