// @ts-ignore
import Tts from 'react-native-tts';

interface Voice {
    id: string,
    name: string, // iOS only
    language: string,
    quality: number,
    latency: number, // Android only
    networkConnectionRequired: boolean, // Android only
    notInstalled: boolean, // Android only
}

const NAMES = ["Anna", "Jasmine", "Elsa", "Ralph", "Ariel", "Woody"];
const ICONS = [
    require('./images/avatar-1.png'),
    require('./images/avatar-2.png'),
    require('./images/avatar-3.png'),
    require('./images/avatar-4.png'),
    require('./images/avatar-5.png'),
    require('./images/avatar-6.png')
];

class TtsManager {
    ttsInitialized: boolean = false;
    currentVoiceIndex: number = 0;
    activeVoices: Voice[] = [];

    isTtsEngineWorking = async () => {
        try {
            await Tts.getInitStatus();
            this.ttsInitialized = true;
            return true;
        } catch (e) {
            return false;
        }
    };

    installTtsEngine = () => {
        Tts.requestInstallEngine();
    };

    isTtsVoicesWorking = async () => {
        try {
            const voices: Voice[] = await Tts.voices();
            this.activeVoices = voices
                .filter(voice => voice.language == "en-US")
                .filter(voice => voice.networkConnectionRequired != true)
                .filter(voice => voice.notInstalled != true);
            return this.activeVoices.length > 0;
        } catch (e) {
            return false;
        }
    };

    hasMoreThanOneVoice = () => {
        return this.activeVoices.length > 1;
    };

    installTtsVoices = () => {
        Tts.requestInstallData();
    };

    initTts = async () => {
        Tts.addEventListener('tts-start', () => {
        });
        Tts.addEventListener('tts-finish', () => {
        });
        Tts.addEventListener('tts-cancel', () => {
        });
        if (this.activeVoices[this.currentVoiceIndex]) {
            Tts.setDefaultVoice(this.activeVoices[this.currentVoiceIndex].id);
        }
    };

    changeVoice = () => {
        this.currentVoiceIndex = (this.currentVoiceIndex + 1) % this.activeVoices.length;
        Tts.setDefaultVoice(this.activeVoices[this.currentVoiceIndex].id);
        this.playWord(`Hi, I am ${this.currentVoiceName()}`)
    };

    currentVoiceId = (): string => {
        return this.activeVoices[this.currentVoiceIndex].id;
    };

    currentVoiceName = (): string => {
        return NAMES[this.currentVoiceIndex % NAMES.length];
    };

    playWord = (word: string) => {
        if (this.ttsInitialized) {
            Tts.stop();
            Tts.speak(word.toLowerCase());
        }
    };

    currentVoiceIcon = () => {
        return ICONS[this.currentVoiceIndex % ICONS.length];
    };
}

export default new TtsManager();
