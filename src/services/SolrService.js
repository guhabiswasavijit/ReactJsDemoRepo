import axios from "axios";

const SOLR_SERVICE_URL = 'http://localhost:9090/services/hotels/fetchArticle/';

const HOTEL_HTML = (articleName) => {
    axios.post(SOLR_SERVICE_URL+articleName).then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log("Got error:"+error);
    })
    .then(function () {
        console.log("greeting");
    });
}

export default HOTEL_HTML;