import { render, screen } from '@testing-library/react';
import App from './App';
import Index from './index.js';

test('renders without crashing', () => {
  expect(JSON.stringify(
    Object.assign({}, Index, { _reactInternalInstance: 'censored' })
  )).toMatchSnapshot();
});

test('render h1 element', () => {
  render(<App />);


  expect(screen.getByText('New York Times News')).toBeInTheDocument();
});


test('app contains img ', () => {
  render(<App />);

  const imgelemnt = screen.getAllByRole('img');
  
 
});