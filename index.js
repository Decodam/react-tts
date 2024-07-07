/*
    This is the code of react-speech library, which can be used to easily implement text-to-speech functions on react.
    Built by Arghya Mondal [ @Decodam ] on github
*/

const speech = ({
    text,
    lang = 'en-US',
    volume = 1,
    rate = 1,
    pitch = 1,
    voice = null
}) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
  
    utterance.lang = lang;
    utterance.volume = volume;
    utterance.rate = rate;
    utterance.pitch = pitch;
  
    if (voice) {
        const selectedVoice = synth.getVoices().find(v => v.name === voice);
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }
    }
  
    synth.cancel();
  
    synth.speak(utterance);
};
  
export default speech;
  