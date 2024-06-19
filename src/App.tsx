import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/Footer';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
