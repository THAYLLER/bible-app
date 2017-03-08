import React from 'react';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';

// Since this component is just showing some data to the user. It's solely a presentational component. Therefore, it can stand to be just a functional component, since we don't need lifecycle methods, or access to state.
const VerseCard = ({ verse }) => {
	const { version, reference, text } = verse;

	return (
    <Container>
        <Content>
            <Card>
                <CardItem header>
                    <Text>Verse Of The Day!</Text>
                </CardItem>

                <CardItem>
                    <Body>
                        <Text>
                            {text}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>{reference} {version}</Text>
                </CardItem>
           </Card>
        </Content>
    </Container>
	);
};

export default VerseCard;


