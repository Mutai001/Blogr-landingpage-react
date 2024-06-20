// import React from 'react';
// import Header from './components/Header';
// import Body from './components/Body';
// import Footer from './components/Footer';
// import './index.scss';
// import './components/Header.scss';
// import './components/Body.scss';
// import './components/Section.scss';
// import '.scss';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <Header />
//       <Body />
//       <Footer />
//     </div>
//   );
// };

// export default App;


import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './styles/main.scss';
import './components/Header.scss';
import './components/Body.scss';
import './components/Section.scss';
import './components/Footer.scss';

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
