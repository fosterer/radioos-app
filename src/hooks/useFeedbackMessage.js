import { useFirestore } from "reactfire"

function useFeedbackMessage() {
    const firestore = useFirestore();

    async function sendFeedback(from, content) {
        await firestore.collection('feedbackMessages').add({
            to: [atob('cC5sdW5pZXdza2lAZ21haWwuY29t')],
            message: {
                subject: '[radioos.app] feedback',
                html: `<p>From: ` + from + `</p><p>` + content + `</p>`
            }
        });
    }

    return { sendFeedback }
}

export default useFeedbackMessage;