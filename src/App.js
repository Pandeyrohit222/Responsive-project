// src/App.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import './App.css';

function App() {
  const [page, setPage] = useState('one');

  const renderPage = () => {
    switch (page) {
      case 'one':
        return <PageOne />;
      case 'two':
        return <PageTwo />;
      case 'three':
        return <PageThree />;
      default:
        return <PageOne />;
    }
  };

  return (
    <div className="App">
      <Header setPage={setPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
