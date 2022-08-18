import { Modal } from "semantic-ui-react";
import "../style/LoginModal.css";

function LoginModal() {
    return (
        <Modal open={true} size={"mini"}>
            <Modal.Header className="modalBody">Welcome to Together!</Modal.Header>
            <Modal.Content className="modalBody">Please Sign In</Modal.Content>
        </Modal>
    );
}

export default LoginModal;