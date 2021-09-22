import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';





export class News extends Component {

    static defaultProps = {
        Key: 'a522e9179730451fbc1549a9b7e22369',


    }
    static propTypes = {
        Key: PropTypes.string,
        category: PropTypes.string
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
        document.title = ` ${this.Capitalize(this.props.category)} - NewsMonkey`
    }

    async componentDidMount() {

        this.props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.Key}&pageSize=9`;
        this.setState({ loading: true });
        this.props.setProgress(20)
        let data = await fetch(url);
        this.props.setProgress(65)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        this.props.setProgress(100)


    }

    handlePrevClick = async () => {

        this.props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.Key}&page=${this.state.page - 1}&pageSize=9`;
        this.setState({ loading: true });
        this.props.setProgress(20)
        let data = await fetch(url);
        this.props.setProgress(70)

        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })

        this.setState({
            page: this.state.page - 1,
            loading: false
        })
        this.props.setProgress(100)

    }

    handleNextClick = async () => {

        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 9))) {
            this.props.setProgress(0)
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.Key}&page=${this.state.page + 1}&pageSize=9`;
            this.setState({ loading: true });
            this.props.setProgress(20)
            let data = await fetch(url);
            this.props.setProgress(70)
            let parsedData = await data.json()
            this.setState({ articles: parsedData.articles })


            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
            this.props.setProgress(100)

        }
    }

    render() {
        return (
            <div>
                <div className="container my-3" >
                    <h1 className="text-center my-4" > NewsMonkey - Top {this.Capitalize(this.props.category)} Headlines </h1>
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {

                            return <div className="col-md-4 " key={element.url} >

                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}

                    </div>
                </div>
                <div className="container d-flex justify-content-between my-3" >
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 9)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div>

            </div>
        )
    }

}

export default News
