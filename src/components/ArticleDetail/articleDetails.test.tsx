/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleDetail from '../ArticleDetail/articleDetails';
import { ChakraProvider } from '@chakra-ui/react';
process.env.VITE_APP_API_KEY = 'yourapikey';

jest.mock('../../hooks/usefetch', () => ({
    __esModule: true,
    default: () => ({
        data: { results: [{ media: [{ "media-metadata": [{ url: 'sample' }] }], id: '1', title: 'Test Article' }]  },
        loading: false,
        error: null,
    }),
}));

test('renders article detail', () => {
    render(
        <ChakraProvider>
            <Router>
                    <ArticleDetail />
            </Router>
        </ChakraProvider>
    );
    const titleElement = screen.getByText(/Test Article/i);
    expect(titleElement).toBeDefined();
});
