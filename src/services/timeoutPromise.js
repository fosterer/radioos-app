export default function timeoutPromise(afterSeconds = 10) {
    return new Promise((reslve, rejct) => {
        let promiseTimeouterWait = setTimeout(() => {
            clearTimeout(promiseTimeouterWait);
            rejct('Promise execution timeout.');
        }, afterSeconds * 1000);
    });
}