import './App.css'
import React from 'react'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import { connect } from 'react-redux'
import { getSecretWord } from './actions'
class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Jotto Game</h1>
				<Congrats success={this.props.success} />
				<GuessedWords guessedWords={this.props.guessedWords} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { success, guessedWords, secretWord } = state
	return { success, guessedWords, secretWord }
}

export default connect(mapStateToProps, { getSecretWord })(App)
