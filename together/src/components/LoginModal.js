import { Modal, Button, Input } from "semantic-ui-react";
import "../style/LoginModal.css";

function LoginModal() {
    return (
        <Modal open={true} size={"mini"} style={{height:"350px"}}>
            <Modal.Header className="textCenter">Welcome to Together!</Modal.Header>
            <Modal.Content className="textCenter">Please Sign In</Modal.Content>
            <div className="textCenter inputBoxes">
                <Input className="inputs" placeholder="username"></Input>
                <Input className="password inputs" placeholder="password"></Input>
            </div>
            <div className="textCenter signinButton">
                <Button color="teal">Sign In</Button>
            </div>
        </Modal>
    );
}

export default LoginModal;