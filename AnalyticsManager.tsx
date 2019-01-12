// @ts-ignore
import firebase from 'react-native-firebase';

class AnalyticsManager {
    constructor() {
        firebase.analytics().setAnalyticsCollectionEnabled(true);
    }

    setScreen = (screenName: string) => {
        firebase.analytics().setCurrentScreen(screenName);
    };

    recordEvent = (event: string, data?: object) => {
        firebase.analytics().logEvent(event, data);
    };
}

export default new AnalyticsManager();
