import { render, screen } from '@testing-library/react';

import NavBar from '../../src/components/ui/global-nav';
import Wrapper from '../TestWrapper';

describe('Navbar Test', () => {
  test('NavBar Text', async () => {
    render(
      <Wrapper>
        <NavBar />
      </Wrapper>,
    );

    expect(await screen.findByText(/Next 14/)).toBeInTheDocument();
    expect(await screen.findByText(/Example/)).toBeInTheDocument();
  });
});
