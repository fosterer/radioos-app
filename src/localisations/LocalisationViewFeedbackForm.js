import React from 'react';

const ValidationEN = () => (
    <span>...cannot be empty.</span>
)

const ValidationPL = () => (
    <span>...nie może być puste.</span>
)

const ContactEN = () => (
    <span>Your email or other contact</span>
)

const ContactPL = () => (
    <span>Twój email lub inny kontakt</span>
)

const MessageEN = () => (
    <span>Your feedback or questions</span>
)

const MessagePL = () => (
    <span>Twoje uwagi lub pytania</span>
)

const SubmitEN = () => (
    <span>Submit</span>
)

const SubmitPL = () => (
    <span>Wyślij</span>
)

const ThanksEN = () => (
    <span>Thank you for your feedback!</span>
)

const ThanksPL = () => (
    <span>Dziękujemy za przesłanie uwag!</span>
)

const SendErrorEN = () => (
    <span>That did not work :( Please try again.</span>
)

const SendErrorPL = () => (
    <span>Nie udało się :( Prosimy spróbować ponownie.</span>
)

const LocalisationViewFeedbackForm = {};
LocalisationViewFeedbackForm[['validation', 'en']] = <ValidationEN />;
LocalisationViewFeedbackForm[['validation', 'pl']] = <ValidationPL />;
LocalisationViewFeedbackForm[['contact', 'en']] = <ContactEN />;
LocalisationViewFeedbackForm[['contact', 'pl']] = <ContactPL />;
LocalisationViewFeedbackForm[['message', 'en']] = <MessageEN />;
LocalisationViewFeedbackForm[['message', 'pl']] = <MessagePL />;
LocalisationViewFeedbackForm[['submit', 'en']] = <SubmitEN />;
LocalisationViewFeedbackForm[['submit', 'pl']] = <SubmitPL />;
LocalisationViewFeedbackForm[['thanks', 'en']] = <ThanksEN />;
LocalisationViewFeedbackForm[['thanks', 'pl']] = <ThanksPL />;
LocalisationViewFeedbackForm[['SendError', 'en']] = <SendErrorEN />;
LocalisationViewFeedbackForm[['SendError', 'pl']] = <SendErrorPL />;

export default LocalisationViewFeedbackForm;