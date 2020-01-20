import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import FlatList from '../FlatList/FlatList';
import FlatItem from '../FlatItem/FlatItem';
import './App.css';

const App = () => {
  
  return (
    <Router>
      <div className="App">
        <header className="App__header">
            <h1>Объявления</h1>
        </header>
        <Route path="/" component={FlatList} exact />
        <Route
          path="/:id"
          render={({ match }) => {
            return <FlatItem id={match.params.id} />;
          }}
        />
      </div>
    </Router>
  );
};

export default App;
