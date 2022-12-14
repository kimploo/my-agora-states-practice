import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

describe('Bare minimum requirement', () => {
  describe('App.js 컴포넌트 유닛 테스트', () => {
    test('H1 엘리먼트에 "My Agora States" 텍스트 노드가 있어야 합니다.', () => {
      const { container } = render(<App />)
      const h1 = container.querySelector('h1');
      expect(h1.textContent).toBe('My Agora States');
    });
  });
});