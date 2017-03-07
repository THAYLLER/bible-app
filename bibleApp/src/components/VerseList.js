import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import VerseCard from  './VerseCard';


class VerseList extends Component {
	state = { 
		verseOfTheDay: {},
	};
	// componentWillMount method automatically gets executed as soon as this component is about to get rendered to the screen.
	componentWillMount() {
		fetch('https://www.ourmanna.com/verses/api/get/?format=json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ verseOfTheDay: responseJson.verse.details });
      })
      .catch((error) => {
        console.error(error);
      });			
	}

	render() {
		return (
			<ScrollView>
				<VerseCard key={this.state.verseOfTheDay.reference} verse={this.state.verseOfTheDay} />
			</ScrollView>
		);
	}
}

export default VerseList;