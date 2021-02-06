import { useAuth } from 'reactfire';
import { getAppUrl } from './useAppConfig';
import isEmail from 'validator/es/lib/isEmail';
import useLocalStorage from './useLocalStorage';

function useLoginWithEmailLink() {
    const auth = useAuth();
    const storage = useLocalStorage();

    async function sendSignInLinkToEmail(email) {
        const actionCodeSettings = {
            url: getAppUrl(),
            handleCodeInApp: true
        };

        storage.set('emailForSignIn', email);

        await auth.sendSignInLinkToEmail(email, actionCodeSettings);
    }

    async function signInWithEmailLink(email, link) {
        if (!auth.isSignInWithEmailLink(link)) throw new Error('invalid signin link');
        if (!isEmail(email)) throw new Error('invalid email');

        await auth.signInWithEmailLink(email, link);
        storage.remove('emailForSignIn');
    }

    return { sendSignInLinkToEmail, signInWithEmailLink };
}

export default useLoginWithEmailLink;