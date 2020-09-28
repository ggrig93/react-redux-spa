import styled from 'styled-components';

const AddNewsWrapper = styled.div`
    .card{
        margin: 0 auto;
        margin-top: 50px;
    }
    
    .card-body{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    
    input{
        padding: 10px;
    }
    
    textarea{
        margin-top: 10px;
        padding: 20px;
    }
`;

export {AddNewsWrapper}