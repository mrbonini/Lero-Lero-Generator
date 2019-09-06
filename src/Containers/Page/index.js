import React from 'react';
import styled from 'styled-components';
import Button from '../Generate-Lero-Button'
import Text from '../Generated-Lero'


const Div = styled.div`
    width: 100%;
    background-color: aqua;
    height: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 20%;

`;

function Page() {
    const [state, setState] = React.useState();

    const clique = () => {
        const API = 'https://testapi.io/api/matheusrod92/lero-lero';
        const random = Math.floor(Math.random() * 11);

        fetch(API)
        .then(response => response.json())
        .then(result => {
            setState(result[random].frase)
        });   
    }
    
    
    

    return (
        
        <Div>
            
        <Text>{state}</Text>

        <Button onClick={clique}>Generate Lero-Lero</Button>

        </Div>
    )
}

export default Page;