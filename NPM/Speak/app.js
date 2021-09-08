// import Speech from 'speak-tts'; // es6
const Speech = require('speak-tts'); //if you use es5

const speech = new Speech(); // will throw an exception if not browser supported
if (speech.hasBrowserSupport()) {
	// returns a boolean
	console.log('speech synthesis supported');
}
