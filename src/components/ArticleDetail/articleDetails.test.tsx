import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import ArticleDetail from '../ArticleDetail/articleDetails';

jest.mock('../../hooks/usefetch', () => ({
  __esModule: true,
  default: () => ({
    data: { title: 'Test Article', abstract: 'Test Abstract' },
    loading: false,
    error: null,
  }),
}));

test('renders article detail', () => {
  render(
    <Router>
      <Routes>
      <ArticleDetail />
      </Routes>
    </Router>
  );
  const titleElement = screen.getByText(/Test Article/i);
  const abstractElement = screen.getByText(/Test Abstract/i);
  expect(titleElement).toBeDefined();
  expect(abstractElement).toBeDefined();
});
