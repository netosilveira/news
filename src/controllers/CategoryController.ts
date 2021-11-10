import axios from 'axios';
import { AlertController } from './AlertController';

export class CategoryController {
    public alert = new AlertController;
    public results: string = '';

    public author: string = ' ';
    public author2: string = '';
    public author3: string = '';
    public author4: string = '';
    public author5: string = '';
    public author6: string = '';
    public author7: string = '';
    public author8: string = '';

    public title: string = '';
    public title2: string = '';
    public title3: string = '';
    public title4: string = '';
    public title5: string = '';
    public title6: string = '';
    public title7: string = '';
    public title8: string = '';

    public description: string = '';
    public description2: string = '';
    public description3: string = '';
    public description4: string = '';
    public description5: string = '';
    public description6: string = '';
    public description7: string = '';
    public description8: string = '';

    public url: string = '';
    public url2: string = '';
    public url3: string = '';
    public url4: string = '';
    public url5: string = '';
    public url6: string = '';
    public url7: string = '';
    public url8: string = '';

    public get getResults() {
        return this.results;
    }

    public requestBusiness() {
        this.request('business');
    }

    public requestEntertainment() {
        this.request('entertainment');
    }

    public requestHealth() {
        this.request('health');
    }

    public requestScience() {
        this.request('science');
    }

    public requestTechnology() {
        this.request('technology');
    }


    public request(cat: string) {
        axios.get(`https://newsapi.org/v2/top-headlines?category=${cat}&country=pt&apiKey=`)
            .then((response) => {
                this.results = 'Total results: ' + response.data.totalResults;
                this.alert.showBasicAlert(response.data.totalResults);
                this.author = response.data.articles[0].author;
                this.author2 = response.data.articles[1].author;
                this.author3 = response.data.articles[2].author;
                this.author4 = response.data.articles[3].author;
                this.author5 = response.data.articles[4].author;
                this.author6 = response.data.articles[5].author;
                this.author7 = response.data.articles[6].author;
                this.author8 = response.data.articles[7].author;

                this.title = response.data.articles[0].title;
                this.title2 = response.data.articles[1].title;
                this.title3 = response.data.articles[2].title;
                this.title4 = response.data.articles[3].title;
                this.title5 = response.data.articles[4].title;
                this.title6 = response.data.articles[5].title;
                this.title7 = response.data.articles[6].title;
                this.title8 = response.data.articles[7].title;


                this.description = response.data.articles[0].description;
                this.description2 = response.data.articles[1].description;
                this.description3 = response.data.articles[2].description;
                this.description4 = response.data.articles[3].description;
                this.description5 = response.data.articles[4].description;
                this.description6 = response.data.articles[5].description;
                this.description7 = response.data.articles[6].description;
                this.description8 = response.data.articles[7].description;

                this.url = response.data.articles[0].url;
                this.url2 = response.data.articles[1].url;
                this.url3 = response.data.articles[2].url;
                this.url4 = response.data.articles[3].url;
                this.url5 = response.data.articles[4].url;
                this.url6 = response.data.articles[5].url;
                this.url7 = response.data.articles[6].url;
                this.url8 = response.data.articles[7].url;

            })
            .catch((error) => {
                console.log(error);
            })

    }
}
