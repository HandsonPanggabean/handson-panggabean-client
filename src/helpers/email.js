import emailjs from "emailjs-com";

const sendNotificationEmail = (bodyMessage) => {
  const serviceID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

  const templateParams = {
    ...bodyMessage,
    time: new Date().toLocaleString(),
  };

  return emailjs.send(serviceID, templateID, templateParams, publicKey);
};

export default sendNotificationEmail;
