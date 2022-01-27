import React, { Component } from 'react';
import axios from "axios";
import ReactDOM from 'react-dom';


const SOLR_SERVICE_URL = 'http://localhost:9090/services/hotels/fetchArticle/';

class SolrComponent extends Component{

    constructor(props) {
        super(props);
        this.fetchArticleFromSolr = this.fetchArticleFromSolr.bind(this);
        this.setStateArticle = this.setStateArticle.bind(this);
        this.setStateSolrArticle = this.setStateSolrArticle.bind(this);
     }
     setStateSolrArticle(articleHtml){
         console.log("Setting Html:"+ articleHtml);
         const HtmlToReactParser = require('html-to-react').Parser;
         let htmlToReactParser = new HtmlToReactParser();
         let reactElement = htmlToReactParser.parse(articleHtml); 
         ReactDOM.render(reactElement,document.getElementById("solrSearchData"));

     }
     setStateArticle(i_articleName){
        console.log("You have srached for article:"+ i_articleName);
        this.fetchArticleFromSolr(i_articleName);
     }
     fetchArticleFromSolr(articleName){
        axios.post(SOLR_SERVICE_URL+articleName)
        .then(response => this.setStateSolrArticle(response.data))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
     }
    componentDidMount() {
        console.log("Initializing div with article:"+this.props.article);
        this.fetchArticleFromSolr(this.props.article);
    }
    render() {
        return (
            <div id="solrSearchData"></div>
        )
    }
}
export default SolrComponent