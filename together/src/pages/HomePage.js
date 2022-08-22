import Feature from "../components/Feature";
import { Grid } from "semantic-ui-react";
import "../style/HomePage.css";

function HomePage() {
    return (
        <div className="mainGrid">
            <Grid>
                <Grid.Row columns={2} >
                    <Grid.Column style={{paddingLeft:"500px"}}>
                        <Feature icon="heart outline" title="Gabby's Affirmations" className="self"></Feature>
                    </Grid.Column>
                    <Grid.Column style={{paddingRight:"500px"}}>
                        <Feature icon="heart outline" title="Daniel's Affirmations" className="other"></Feature>
                    </Grid.Column>
                </Grid.Row>
            </Grid>    
        </div>
            
        
       
    );
}

export default HomePage;