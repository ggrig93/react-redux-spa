import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {Table, Form, Button} from 'react-bootstrap';
import {getNews, changeAllowed, allowedNew} from '../../store/admin/action';
import {addNews, deleteNew} from '../../store/addNews/action'
import {AdminPageWrapper} from './styled';

const AdminPage = (props) => {

    const {getAllNews, addNews, getNews, news, allowedNew, deleteNew, changeAllowed} = props;

    useEffect(() => {
        const loc = JSON.parse(localStorage.getItem("news"));
        addNews(loc);

        // eslint-disable-next-line
    },[]);

    useEffect(() => {
        const loc = JSON.parse(localStorage.getItem("allowed-news"));
        if(!!loc) {
            getNews(JSON.parse(localStorage.getItem("allowed-news")));
        }
    },[getNews]);

    useEffect(() => {
        if(!!getAllNews){
            localStorage.setItem("allowed-news", JSON.stringify(getAllNews));
        }

    },[getAllNews]);



    const handleChangeAllowed = (e, id) => {
        // eslint-disable-next-line
        news.map(item => {
            if(item.id === id) {
                if(!item.allowed) {
                    item.allowed = !item.allowed;
                    getNews(item)
                } else if(item.allowed) {
                    allowedNew(getAllNews.filter(el => el.id !== id))
                }
            }
        });
        changeAllowed(e.target.checked);
    };

    const handleDelete = (id) => {
        const deletedItem = news.filter(item => item.id !== id);
        const deleteChecked = getAllNews.filter(item => item.id !== id);

        localStorage.removeItem('news');
        localStorage.setItem('news', JSON.stringify(deletedItem));

        localStorage.removeItem('allowed-news');
        localStorage.setItem('allowed-news', JSON.stringify(deleteChecked));

        deleteNew(deletedItem);
        changeAllowed(deleteChecked);
    };


    return(

        <AdminPageWrapper className={"container"}>
            <h2>Admin Panel</h2>
            {news.length !== 0 ?
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Text</th>
                        <th>Created at</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        news[0] !== null && news.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.news}</td>
                                    <td>{item.created_at}</td>
                                    <td id={'action'}>
                                        <Button variant="danger" onClick={(id) => handleDelete(item.id)}>Delete</Button>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check
                                                type="checkbox"
                                                label="Allow"
                                                onChange={(e, id) => handleChangeAllowed(e, item.id)}
                                                checked={getAllNews.find(el => el.id === item.id)}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </Table> : <h2>There is not News</h2>
            }
        </AdminPageWrapper>
    )
};

const mapStateToProps = state => ({
    news: state.news.news,
    getAllNews: state.admin.allNews,
});

const mapDispatchToProps = {
    getNews,
    addNews,
    deleteNew,
    changeAllowed,
    allowedNew
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);