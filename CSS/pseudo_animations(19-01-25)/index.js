function speak(speechText) {
  let utterance = new SpeechSynthesisUtterance(speechText);
  utterance.pitch = 0;
  utterance.rate = 1;
  speechSynthesis.speak(utterance);
}
