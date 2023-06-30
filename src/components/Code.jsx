import {Box,styled} from '@mui/material'
import Editor from './Editor';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    display: flex;
    background: #060606;
`


const Code = () =>{

    const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);


    return (
        <Container>
            <Editor 
                heading="HTML"
                icon="/"
                color="#FF3C41"
                value={html}
                onchane={setHtml}
            />
            <Editor 
                heading="CSS"
                icon="*"
                color="#0EBEFF"
                value={css}
                onchane={setCss}
            />
            <Editor 
                heading="JavaScript"
                icon="()"
                color="#FCD000"
                value={js}
                onchane={setJs}
            />
        </Container>
    );
}

export default Code;