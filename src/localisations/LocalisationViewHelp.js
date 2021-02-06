import React from 'react';
import Typography from '@material-ui/core/Typography';

const PrefaceEN = () => (
    <div>This is a preview version of <strong>radioos.app</strong>. If you have any suggestions or just like to know more about what you see here, please drop us a line using the form below.</div>
);

const TitleEN = () => (
    <span>Info</span>
);

const FooterEN = () => (
    <div>We rely on open source and we thank all the people of the Community for their <a target='_blank' rel="noopener noreferrer" href="https://radioos.app/attribution.txt">contributions</a> ❤️</div>
);

const SafariTipEN = () => (
    <>
        <Typography style={{ fontSize: '0.9em' }} variant='subtitle1' color='secondary'>TIP: Add to Home Screen</Typography>
        <Typography style={{ fontSize: '0.9em' }} variant='body2'>Click <AppleSquareAndArrowUp /> in the bottom bar of Safari and then find and click 'Add to Home Screen' <AppleSquarePlus />. Accept the bookmark and now you have a shortcut that will launch full screen app view!</Typography>
    </>
);

const PrefacePL = () => (
    <div>To jest wersja przedpremierowa <strong>radioos.app</strong>. Jeśli masz jakieś sugestie lub chcesz dowiedzieć się więcej o tym co tutaj widzisz, prosimy zostaw nam wiadomość poniżej.</div>
);

const TitlePL = () => (
    <span>Info</span>
);

const FooterPL = () => (
    <div>Polegamy na open source i dziękujemy wszystkim członkom Społeczności za ich <a target='_blank' rel="noopener noreferrer" href="https://radioos.app/attribution.txt">wkład</a> ❤️</div>
);

const SafariTipPL = () => (
    <>
        <Typography style={{ fontSize: '0.9em' }} variant='subtitle1' color='secondary'>WSKAZÓWKA: Dodawanie do Ekranu Głównego</Typography>
        <Typography style={{ fontSize: '0.9em' }} variant='body2'>Kliknij <AppleSquareAndArrowUp /> w pasku na dole w Safari, a następnie znajdź i kilknij 'Dodaj do Ekranu Głównego' <AppleSquarePlus />. Zaakceptuj zakładkę i od teraz masz skrót, który otwiera pełnoekranowy tryb aplikacji!</Typography>
    </>
);

const LocalisationViewHelp = {};
LocalisationViewHelp[['preface', 'en']] = <PrefaceEN />;
LocalisationViewHelp[['preface', 'pl']] = <PrefacePL />;
LocalisationViewHelp[['title', 'en']] = <TitleEN />;
LocalisationViewHelp[['title', 'pl']] = <TitlePL />;
LocalisationViewHelp[['footer', 'en']] = <FooterEN />;
LocalisationViewHelp[['footer', 'pl']] = <FooterPL />;
LocalisationViewHelp[['safariTip', 'en']] = <SafariTipEN />;
LocalisationViewHelp[['safariTip', 'pl']] = <SafariTipPL />;


export default LocalisationViewHelp;

const AppleSquareAndArrowUp = () => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" fill="white" width="18" height="18" viewBox="0 0 24 24">
        <path d="M12.005 15C12.489 15 12.895 14.604 12.895 14.131L12.895 5.683 12.818 4.387 13.258 4.936 14.379 6.145C14.533 6.32 14.752 6.408 14.972 6.408 15.4 6.408 15.763 6.09 15.763 5.65 15.763 5.419 15.664 5.244 15.51 5.079L12.676 2.376C12.445 2.145 12.236 2.069 12.005 2.069 11.775 2.069 11.566 2.145 11.335 2.376L8.512 5.079C8.347 5.244 8.26 5.419 8.26 5.65 8.26 6.09 8.6 6.408 9.039 6.408 9.259 6.408 9.49 6.32 9.644 6.145L10.764 4.936 11.203 4.387 11.127 5.683 11.127 14.131C11.127 14.604 11.522 15 12.005 15ZM7.051 21.932 16.949 21.932C18.871 21.932 19.861 20.943 19.861 19.053L19.861 10.692C19.861 8.792 18.871 7.814 16.949 7.814L14.653 7.814 14.653 9.682 16.839 9.682C17.576 9.682 17.993 10.067 17.993 10.846L17.993 18.889C17.993 19.669 17.576 20.053 16.839 20.053L7.161 20.053C6.424 20.053 6.007 19.669 6.007 18.889L6.007 10.846C6.007 10.067 6.424 9.682 7.161 9.682L9.368 9.682 9.368 7.814 7.051 7.814C5.139 7.814 4.139 8.792 4.139 10.692L4.139 19.053C4.139 20.954 5.139 21.932 7.051 21.932Z" />
    </svg>
);

const AppleSquarePlus = () => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="white" width="16" height="16" viewBox="0 0 24 24">
        <path d="M5.627 21.675 18.365 21.675C20.55 21.675 21.679 20.546 21.679 18.393L21.679 5.598C21.679 3.454 20.55 2.325 18.365 2.325L5.627 2.325C3.458 2.325 2.321 3.446 2.321 5.598L2.321 18.393C2.321 20.554 3.458 21.675 5.627 21.675ZM5.732 19.888C4.676 19.888 4.108 19.344 4.108 18.247L4.108 5.753C4.108 4.656 4.676 4.104 5.732 4.104L18.259 4.104C19.299 4.104 19.892 4.656 19.892 5.753L19.892 18.247C19.892 19.344 19.299 19.888 18.259 19.888ZM11.988 16.947C12.524 16.947 12.857 16.582 12.857 16.021L12.857 12.853 16.172 12.853C16.716 12.853 17.106 12.52 17.106 12 17.106 11.464 16.74 11.131 16.172 11.131L12.857 11.131 12.857 7.824C12.857 7.256 12.524 6.89 11.988 6.89 11.46 6.89 11.135 7.272 11.135 7.824L11.135 11.131 7.828 11.131C7.268 11.131 6.886 11.464 6.886 12 6.886 12.52 7.284 12.853 7.828 12.853L11.135 12.853 11.135 16.021C11.135 16.566 11.46 16.947 11.988 16.947Z" />
    </svg>
);