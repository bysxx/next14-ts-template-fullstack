import { render, screen } from '@testing-library/react';

import NavBar from '../../components/Layout/NavBar';
import Wrapper from '../TestWrapper';

describe('Navbar Test', () => {
  test('NavBar Text', async () => {
    render(
      <Wrapper>
        <NavBar />
      </Wrapper>,
    );

    await screen.findByText(/NavBar/);
  });
});
