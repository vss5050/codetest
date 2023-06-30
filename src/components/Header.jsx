import {AppBar,Toolbar,styled} from '@mui/material';

const Container = styled(AppBar)`
     height: 9vh;
`  


const Header = () =>{
    return (
        <>
        <Container position="static">
            <Toolbar>
                <h2>CodeTest</h2>
            </Toolbar>
        </Container>
        </>
    );
}

export default Header;