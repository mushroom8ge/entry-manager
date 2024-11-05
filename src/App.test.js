import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';

test('renders Entry Manager header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Check if the "Entry Manager" header is present
  const headerElement = screen.getByText(/Entry Manager/i);
  expect(headerElement).toBeInTheDocument();

  // Check if the "Add New Entry" button is present
  const addButtonElement = screen.getByText(/Add New Entry/i);
  expect(addButtonElement).toBeInTheDocument();

  // Check if the "Search..." input placeholder is present
  const searchInputElement = screen.getByPlaceholderText(/Search.../i);
  expect(searchInputElement).toBeInTheDocument();
});
