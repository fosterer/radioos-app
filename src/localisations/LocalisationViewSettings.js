import React from 'react';

/*
const PrefaceAuthenticatedEN = () => (
    <div>Thank you for testing our signin, it worked! In the future, this screen will give you more options to control your profile.</div>
)

const PrefaceAuthenticatedPL = () => (
    <div>Dziękujemy za przetestowanie naszego mechanizmu logowania, udało się! W przyszłości, ten ekran pozwoli Ci kontrolować Twój profil.</div>
)
*/

const TitleEN = () => (
    <span>Settings</span>
)

const TitlePL = () => (
    <span>Ustawienia</span>
)

const DisplayNameEN = () => (
    <span>Your display name</span>
)

const DisplayNamePL = () => (
    <span>Twoje wyświetlane imię</span>
)

const UserProfileSaveFailedEN = () => (
    <span>That did not work :( Please try again or </span>
)

const UserProfileSaveFailedPL = () => (
    <span>Nie udało się :( Proszę spróbuj ponownie lub </span>
)

const ContactUsEN = () => (
    <span><u>contact us</u></span>
)

const ContactUsPL = () => (
    <span><u>napisz do nas</u></span>
)

const LocalisationViewSettings = {};
LocalisationViewSettings[['title', 'en']] = <TitleEN />;
LocalisationViewSettings[['title', 'pl']] = <TitlePL />;
LocalisationViewSettings[['DisplayName', 'en']] = <DisplayNameEN />;
LocalisationViewSettings[['DisplayName', 'pl']] = <DisplayNamePL />;
LocalisationViewSettings[['UserProfileSaveFailed', 'en']] = <UserProfileSaveFailedEN />;
LocalisationViewSettings[['UserProfileSaveFailed', 'pl']] = <UserProfileSaveFailedPL />;
LocalisationViewSettings[['ContactUs', 'en']] = <ContactUsEN />;
LocalisationViewSettings[['ContactUs', 'pl']] = <ContactUsPL />;

export default LocalisationViewSettings;