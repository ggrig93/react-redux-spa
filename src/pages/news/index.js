import React, {useState} from "react";
import {Card} from 'react-bootstrap';
import {NewsWrapper} from "./styled";

export const News = () => {
    const news = JSON.parse(localStorage.getItem("allowed-news"));
    const [search, setSearch] = useState('');
    const [filteredNews, setFilteredNews] = useState(news);

    const handleSearch = e => {
        const res = [];
        setSearch(e.target.value);
        // eslint-disable-next-line
        news.map(item => {
          if(item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
              res.push(item);
              setFilteredNews(res)
          } else if(search.length === 0) {
              setFilteredNews(news)
          } else {
              setFilteredNews(res)
          }
        })

    };

    if(news){
        return (
            <NewsWrapper>
                <h2>All News</h2>
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder={"Search . . ."}
                />
                <div className={'news'}>
                    {
                        filteredNews.map(item => {
                            return (
                                <Card key={item.id}>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.news}
                                        </Card.Text>
                                        <Card.Text>
                                            {item.created_at}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </div>
            </NewsWrapper>
        )
    }

    return (
        <NewsWrapper>
            <h2>There is not News</h2>
        </NewsWrapper>
    )

};