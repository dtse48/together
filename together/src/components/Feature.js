import { Header, Icon } from "semantic-ui-react";

function Feature(props) {
    return (
        <Header as="h1" icon textAlign="center">
            <Icon name={props.icon} circular ></Icon>
            <Header.Content>{props.title}</Header.Content>
        </Header>
    );
}

export default Feature;