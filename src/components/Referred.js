import React from 'react';
import { Button, Container } from 'react-bootstrap';
import NavigationBar from './navigationBar/NavigationBar';
import './Referred.css';

class Referred extends React.Component {

    render() {
        return <div className="Referred">
            <NavigationBar navbarItems={<h5>Referred friends</h5>} showSettingsButton={true} />
            <Container className="referred-box">
                <div className="referred-title">Claim your credit</div>
                <div className="referred-description">Claim your reward for inviting your friends to our network.Claim your reward for inviting your friends to our network.Claim your reward for inviting your friends to our network.</div>
                <div className="referred-url">url de usu4ri0</div>
                <div></div>
                <Container className="social-share">
                    <Button className="social-button" type="button" 
                            href="https://twitter.com/intent/tweet?text=Still havent known @Internxt? Register with my link and get benefits with me https://internxt.com/"
                            data-size="large"
                            data-url="https://internxt.com/"
                            data-lang="en"></Button>
                    <Button className="social-button" type="button"></Button>
                    <Button className="social-button" type="button"></Button>
                </Container>
                <div></div>
                <div className="user-credit">You have accumulated 15 €</div>
                <Button className="on btn-block referred-button" 
                        type="button"
                        href='mailto:hello@internxt.com?Subject=Referred friends credits&Body=Hello Internxt! I am ready to receive my credit for referring friends'
                        >Claim</Button>
            </Container>
            
        </div>
    }
}

export default Referred;