import React from 'react';
import SolrComponent from './SolrComponent';
class SolrSearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {article: 'hotel_sample_article'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({article: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      alert('the article you selected: ' + this.state.article);
      new SolrComponent().setStateArticle(this.state.article);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.article} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      );
    }
  }
  export default SolrSearchForm