import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleList from '../../components/ArticleList/articleList';
import '@testing-library/jest-dom';

jest.mock('../../hooks/usefetch', () => ({
    __esModule: true,
    default: () => ({
        data: [{ id: '1', title: 'Test Article' }],
        loading: false,
        error: null,
    }),
}));

test('renders article list', () => {
    render(
        <Router>
            <ArticleList />
        </Router>
    );
    const linkElement = screen.getByText(/Test Article/i);
    expect(linkElement).toBeDefined();
});
