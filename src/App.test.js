import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders title', () => {
  render(<App />);
  const title = screen.getByText(/Ravenous/i);
  expect(title).toBeInTheDocument();
});
