import { Header, Icon } from "semantic-ui-react";
import "../style/Feature.css";

function Feature(props) {
    function hover(cl,glow) {
        let toAlter = document.getElementsByClassName(cl);
        for (let i = 0; i <= toAlter.length-1; i++) {
            if (glow === true) {
                toAlter[i].classList.add("hovered");
            }
            else {
                toAlter[i].classList.remove("hovered")
            }
        }
    }
    return (
        <Header as="h1" icon textAlign="center">
            <Icon name={props.icon} circular className={"iconsAndHeaders "+props.className} onMouseEnter={() => hover(props.className,true)} onMouseLeave={() => hover(props.className,false)} ></Icon>
            <Header.Content className={"iconsAndHeaders "+props.className} onMouseEnter={() => hover(props.className,true)} onMouseLeave={() => hover(props.className,false)} >{props.title}</Header.Content>
        </Header>
    );
}

export default Feature;