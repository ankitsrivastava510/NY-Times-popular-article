import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList/articleList';
import ArticleDetail from './components/ArticleDetail/articleDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  )
}

export default App
