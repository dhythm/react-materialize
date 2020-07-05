import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
