import React from "react";
import {Table} from 'react-bootstrap';
import {ProfileWrapper} from './styled';

const Profile = () => {

    const newsFromLocal = JSON.parse(localStorage.getItem("news"));

    if(newsFromLocal){
        return(
            <ProfileWrapper className={'container'}>
                <h2>NEWS</h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Text</th>
                        <th>Created at</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        newsFromLocal.map(item => {
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.news}</td>
                                    <td>{item.created_at}</td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </Table>
            </ProfileWrapper>
        )
    }

    return (
        <ProfileWrapper>
            <h2>There is not News</h2>
        </ProfileWrapper>
    )


};



export default Profile;