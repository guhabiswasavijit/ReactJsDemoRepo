import logo from './logo.svg';
import './App.css';
import SolrComponent from './components/SolrComponent';
import SolrSearchForm from './components/SolrSearchForm';

var defaultArticle = "hotel_sample_article";



function App() {

  return (
    <span>
      <div className="App">
         <SolrSearchForm/>
      </div>
      <div className="App">
        <SolrComponent article={defaultArticle}/>
      </div>
    </span>
  );
}

export default App;
