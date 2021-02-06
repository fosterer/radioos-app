import appConfig from '../config/appConfig.json';

const isProd = process.env.NODE_ENV && process.env.NODE_ENV === "production";
const ac = JSON.parse(JSON.stringify(appConfig));

function useAppConfig() {
    return ac;
}

const getAppUrl = () => {
    if (isProd) return 'https://' + ac.firebase.authDomain;
    return 'http://localhost:3000';
};

export { getAppUrl }
export default useAppConfig;