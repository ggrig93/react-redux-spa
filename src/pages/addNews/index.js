import React, {useState} from "react";
import {connect} from 'react-redux';
import moment from "moment";
import {onChangeNews, addNews, onChangeTitle} from '../../store/addNews/action';
import {Card, Button, Alert} from 'react-bootstrap';
import {AddNewsWrapper} from './styled';

const AddNews = (props) => {

    const {news, onChangeNews, addNews, title, onChangeTitle} = props;
    const [error, setError] = useState(false);
    const dataFromLocal = JSON.parse(localStorage.getItem("news")) || [];

    const data = {
        id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10),
        news,
        title,
        created_at: moment().format("MMM Do YY"),
        allowed: false,
    };


    const handleChange = e => {
        onChangeNews(e.target.value)
    };




    const handleChangeTitle = e => {
        onChangeTitle(e.target.value)
    };



    const handleAddNews = () => {

        if (news !== '' && title !== '') {
            addNews([...dataFromLocal,data]);
            localStorage.setItem("news", JSON.stringify([...dataFromLocal, data]))
        } else {
            setError(true)
        }

        onChangeNews('');
        onChangeTitle('')
    };


    return (
        <AddNewsWrapper>
            {
                error ?  <Alert variant={"danger"}>
                    Inputs must be complete
                </Alert> : ''
            }
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>Add News</Card.Title>
                    <input type="text" value={title} onChange={handleChangeTitle} placeholder={"Title . . ."}/>
                    <br/>
                    <textarea value={news} onChange={handleChange} placeholder={"Text . . ."}/>
                    <br/>
                    <br/>
                    <Button variant={"primary"} onClick={handleAddNews}>Add</Button>
                </Card.Body>
            </Card>
        </AddNewsWrapper>
    )
};

const mapStateToProps = state => ({
    news: state.news.addNews,
    addedNews: state.news.news,
    title: state.news.title
});

const mapDispatchToProps = {
    onChangeNews,
    addNews,
    onChangeTitle
};


export default connect(mapStateToProps, mapDispatchToProps)(AddNews);