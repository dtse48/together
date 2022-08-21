import { useNavigate } from "react-router-dom";
import { Modal, Button, Input } from "semantic-ui-react";
import "../style/LoginModal.css";

function LoginModal() {
    let navigate = useNavigate();
    function signIn() {
        navigate("/homepage", {replace: true});
    }
    return (
        <Modal open={true} size={"mini"} style={{height:"350px"}}>
            <Modal.Header className="textCenter">Welcome to Together!</Modal.Header>
            <Modal.Content className="textCenter">Please Sign In</Modal.Content>
            <div className="textCenter inputBoxes">
                <Input className="inputs" placeholder="username"></Input>
                <Input className="password inputs" placeholder="password"></Input>
            </div>
            <div className="textCenter signinButton">
                <Button color="teal" onClick={signIn}>Sign In</Button>
            </div>
        </Modal>
    );
}



export default LoginModal;