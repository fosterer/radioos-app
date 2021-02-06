import React from 'react';

const ViewLoginEnterEmailPrefaceEN = () => (
    <span>You are currently running <i>incognito</i>. You are invited to browse our demonstration content. If you want to try our signin experience, please input your email below and use the button.</span>
)

const ViewLoginEnterEmailPrefacePL = () => (
    <span>Działasz obecnie w trybie <i>incognito</i>. Zapraszamy do przeglądania naszej zawartości demonstracyjnej. Jeśli chesz przetestować nasze logowanie, podaj Twój email poniżej i użyj przycisku.</span>
)

const ViewLoginEnterEmailPrivacyNoteEN = () => (
    <span>We use a simple and secure <strong>passwordless</strong> signin method. We will send you a one-time link to authenticate and will keep your email safe and hidden.</span>
)

const ViewLoginEnterEmailPrivacyNotePL = () => (
    <span>Używamy prostej i bezpiecznej metody <strong>nie wymagającej hasła</strong>. Wyślemy Ci jednorazowy link do logowania, a Twój email pozostanie bezpieczny i ukryty.</span>
)

const SendEmailLinkEN = () => (
    <span>sign in</span>
)

const SendEmailLinkPL = () => (
    <span>Zaloguj</span>
)

const EmailValidationEN = () => (
    <span>...does not look like a valid email.</span>
)

const EmailValidationPL = () => (
    <span>...nie wydaje się być poprawnym emailem.</span>
)

const EmailPlaceholderEN = () => (
    <span>Your email</span>
)

const EmailPlaceholderPL = () => (
    <span>Twój email</span>
)

const SendEmailFailedEN = () => (
    <span>Hmm, please try again or </span>
)

const SendEmailFailedPL = () => (
    <span>Hmm, proszę spóbuj ponownie lub </span>
)

const ContactUsEN = () => (
    <span><u>contact us</u></span>
)

const ContactUsPL = () => (
    <span><u>napisz do nas</u></span>
)

const ViewLoginLinkSentPrefaceEN = () => (
    <span>One-time sign in link has been sent to your email inbox. In order to sign in this very window, please <u><strong>copy the link</strong></u> and paste it into the box below.</span>
)

const ViewLoginLinkSentPrefacePL = () => (
    <span>Jednorazowy link logowania został wysłany na Twojego emaila. Aby zalogować się w tym oknie, proszę <u><strong>skopiuj otrzymany link</strong></u> i wklej go do pola poniżej.</span>
)

const ViewLoginLinkFieldLabelEN = () => (
    <span>Paste sigin link here...</span>
)

const ViewLoginLinkFieldLabelPL = () => (
    <span>Wkej link logowania tutaj...</span>
)

const ViewLoginConfirmEmailPrefaceEN = () => (
    <span>Please enter your email to sign in.</span>
)

const ViewLoginConfirmEmailPrefacePL = () => (
    <span>Proszę wpisz swój email aby się zalogować.</span>
)

const ViewLoginConfirmEmailErrorEN = () => (
    <span>That did not work... Please make sure your email is correct or get a new signin link.</span>
)

const ViewLoginConfirmEmailErrorPL = () => (
    <span>Nie udało się... Prosimy sprawdź czy Twój email jest poprawny lub wygeneruj nowy link.</span>
)

const ViewLoginLinkPasteErrorEN = () => (
    <span>That did not work... Please make sure the link is copied correctly or get a new signin link or </span>
)

const ViewLoginLinkPasteErrorPL = () => (
    <span>Nie udało się... Proszę sprawdź czy link został skopiowany poprawnie lub wygeneruj nowy lub </span>
)

const RetrySentLinkEN = () => (
    <span>Retry</span>
)

const RetrySentLinkPL = () => (
    <span>Wyślij ponownie</span>
)

const ConfirmEN = () => (
    <span>Confirm</span>
)

const ConfirmPL = () => (
    <span>Potwierdź</span>
)

const CancelEN = () => (
    <span>Cancel</span>
)

const CancelPL = () => (
    <span>Anuluj</span>
)

const LogoutEN = () => (
    <span>Logout</span>
)

const LogoutPL = () => (
    <span>Wyloguj</span>
)

const LocalisationViewLogin = {};
LocalisationViewLogin[['ViewLoginEnterEmailPreface', 'en']] = <ViewLoginEnterEmailPrefaceEN />;
LocalisationViewLogin[['ViewLoginEnterEmailPreface', 'pl']] = <ViewLoginEnterEmailPrefacePL />;
LocalisationViewLogin[['ViewLoginEnterEmailPrivacyNote', 'en']] = <ViewLoginEnterEmailPrivacyNoteEN />;
LocalisationViewLogin[['ViewLoginEnterEmailPrivacyNote', 'pl']] = <ViewLoginEnterEmailPrivacyNotePL />;
LocalisationViewLogin[['sendEmailLink', 'en']] = <SendEmailLinkEN />;
LocalisationViewLogin[['sendEmailLink', 'pl']] = <SendEmailLinkPL />;
LocalisationViewLogin[['ViewLoginLinkPasteError', 'en']] = <ViewLoginLinkPasteErrorEN />;
LocalisationViewLogin[['ViewLoginLinkPasteError', 'pl']] = <ViewLoginLinkPasteErrorPL />;
LocalisationViewLogin[['EmailPlaceholder', 'en']] = <EmailPlaceholderEN />;
LocalisationViewLogin[['EmailPlaceholder', 'pl']] = <EmailPlaceholderPL />;
LocalisationViewLogin[['EmailValidation', 'en']] = <EmailValidationEN />;
LocalisationViewLogin[['EmailValidation', 'pl']] = <EmailValidationPL />;
LocalisationViewLogin[['SendEmailFailed', 'en']] = <SendEmailFailedEN />;
LocalisationViewLogin[['SendEmailFailed', 'pl']] = <SendEmailFailedPL />;
LocalisationViewLogin[['ContactUs', 'en']] = <ContactUsEN />;
LocalisationViewLogin[['ContactUs', 'pl']] = <ContactUsPL />;
LocalisationViewLogin[['ViewLoginLinkSentPreface', 'en']] = <ViewLoginLinkSentPrefaceEN />;
LocalisationViewLogin[['ViewLoginLinkSentPreface', 'pl']] = <ViewLoginLinkSentPrefacePL />;
LocalisationViewLogin[['ViewLoginLinkFieldLabel', 'en']] = <ViewLoginLinkFieldLabelEN />;
LocalisationViewLogin[['ViewLoginLinkFieldLabel', 'pl']] = <ViewLoginLinkFieldLabelPL />;
LocalisationViewLogin[['ViewLoginConfirmEmailPreface', 'en']] = <ViewLoginConfirmEmailPrefaceEN />;
LocalisationViewLogin[['ViewLoginConfirmEmailPreface', 'pl']] = <ViewLoginConfirmEmailPrefacePL />;
LocalisationViewLogin[['ViewLoginConfirmEmailError', 'en']] = <ViewLoginConfirmEmailErrorEN />;
LocalisationViewLogin[['ViewLoginConfirmEmailError', 'pl']] = <ViewLoginConfirmEmailErrorPL />;
LocalisationViewLogin[['RetrySentLink', 'en']] = <RetrySentLinkEN />;
LocalisationViewLogin[['RetrySentLink', 'pl']] = <RetrySentLinkPL />;
LocalisationViewLogin[['Confirm', 'en']] = <ConfirmEN />;
LocalisationViewLogin[['Confirm', 'pl']] = <ConfirmPL />;
LocalisationViewLogin[['Cancel', 'en']] = <CancelEN />;
LocalisationViewLogin[['Cancel', 'pl']] = <CancelPL />;
LocalisationViewLogin[['logout', 'en']] = <LogoutEN />;
LocalisationViewLogin[['logout', 'pl']] = <LogoutPL />;

export default LocalisationViewLogin;