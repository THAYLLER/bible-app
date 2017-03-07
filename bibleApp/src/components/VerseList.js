import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import VerseCard from  './VerseCard';


class VerseList extends Component {
	state = { 
		verseOfTheDay: {},
	};
	// componentWillMount method automatically gets executed as soon as this component is about to get rendered to the screen.
	componentWillMount() {
		axios.get('https://www.ourmanna.com/verses/api/get/?format=json')	
			.then(response => this.setState({ verseOfTheDay: response.data.verse.details }));
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