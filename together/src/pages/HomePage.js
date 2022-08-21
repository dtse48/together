import Feature from "../components/Feature";
import { Grid } from "semantic-ui-react";
import "../style/HomePage.css";

function HomePage() {
    return (
        <div className="mainGrid">
            <Grid>
                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Feature icon="heart outline" title="Gabby's Affirmations"></Feature>
                    </Grid.Column>
                    <Grid.Column>
                        <Feature icon="heart outline" title="Daniel's Affirmations"></Feature>
                    </Grid.Column>
                    <Grid.Column>
                        <Feature icon="heart outline" title="Gabby's Affirmations for Daniel"></Feature>
                    </Grid.Column>
                    <Grid.Column>
                        <Feature icon="heart outline" title="Daniel's Affirmations for Gabby"></Feature>
                    </Grid.Column>    
                </Grid.Row>
                
            </Grid>    
        </div>
            
        
       
    );
}

export default HomePage;