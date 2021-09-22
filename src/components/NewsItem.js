import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (


            <div><div className="card " style={{ width: "23rem" , margin: "19px"}} >
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{left: "90%" , zIndex : "1"}}> {source} 
                    <span class="visually-hidden">unread messages</span>
                </span>

                <img src={!imageUrl? "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtpbmclMjBuZXdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" : imageUrl} className="card-img-top" alt=" Breaking News" />

                <div className="card-body" >
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p class="card-text"><small class="text-muted"> By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">More</a>
                </div>
            </div>
            </div>
        )
    }
}

export default NewsItem