import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

describe('Unit Test', () => {
  describe('App Component Test', () => {
    test('App 컴포넌트의 h1.textContent가 ㅁㅁ다', () => {
      render(<App />)
      const h2 = screen.queryByText('My Agora States');
      expect(h2.textContent).toBe('My Agora States')
    })
  })
});
