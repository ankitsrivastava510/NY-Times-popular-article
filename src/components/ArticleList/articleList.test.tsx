/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleList from '../../components/ArticleList/articleList';
import '@testing-library/jest-dom';
import { ChakraProvider } from '@chakra-ui/react';
process.env.VITE_APP_API_KEY = 'yourapikey';

jest.mock('../../hooks/usefetch', () => ({
    __esModule: true,
    default: () => ({
        data: { results: [{ media: [{ "media-metadata": [{ url: 'sample' }] }], id: '1', title: 'Test Article' }] },
        loading: false,
        error: null,
    }),
}));

test('renders article list', () => {
    render(
        <ChakraProvider>
        <Router>
            <ArticleList />
        </Router>
        </ChakraProvider>
    );
    const linkElement = screen.getByText(/Test Article/i);
    expect(linkElement).toBeDefined();
});
