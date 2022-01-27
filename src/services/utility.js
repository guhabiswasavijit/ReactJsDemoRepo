import axios from "axios";

const SOLR_SERVICE_URL = 'http://localhost:9090/services/hotels/fetchArticle/';

export function fetchSolrData(articleName){
    var htmlData = "";
    axios.post(SOLR_SERVICE_URL+articleName).then(function (response) {
        htmlData = response.data;
        
    })
    .catch(function (error) {
    console.log("Got error:"+error);
    })
    .then(function () {
    console.log("greeting");
    });
    console.log("Got success:"+ htmlData);
    return htmlData;
}