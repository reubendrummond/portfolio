import sgMail from "@sendgrid/mail";

type SendData = sgMail.MailDataRequired;

class MailClient {
  mail: sgMail.MailService;

  constructor() {
    this.mail = sgMail;
    try {
      this.mail.setApiKey(process.env.SENDGRID_API_KEY || "");
    } catch (err) {
      throw err;
    }
  }

  send(data: SendData) {
    return this.mail.send(data);
  }
}

const Mail = new MailClient();
export default Mail;
