import Home from './home';
import ArticleDetails from './ArticleDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/articles/:id">
            <ArticleDetails />
          </Route>
          <Route path="*">
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
