import styled from 'styled-components';

const NewsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    width: 100%;
   

    
    .news{
        width: 50%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    
    .card{
        margin-top: 20px;
        
        .card-body{
            width: 300px;
        }
    }
    
    input{
        padding: 10px;
        border-radius: 15px;
        outline: none;
        border: none;
        background: #f0f8ffba;
        margin-top: 20px;
    }
`;


export {NewsWrapper}