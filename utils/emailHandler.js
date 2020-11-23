const nodeMailer = require("nodemailer");

// configs
const mailConfig = {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
};

// creating the mail transport
const mailTransport = nodeMailer.createTransport(mailConfig);

const sendEmail = (emailDetails, callback) => {
  mailTransport.sendMail(emailDetails, callback);
};

const generateInquireEmailDetails = (name, email, company, message) => {
  const emailDetails = {
    from: `"Mail Admin - Advertaro 🧍"  <${email}>`,
    to: "hello@advertaro.lk, sooriyarathna1997@gmail.com, sam_sajith@live.com",
    subject: `New Inquiry - ${name}`,
    html: `
    <p><strong>There&apos;s a new inquiry from Madushan</strong></p>
    <p><br></p>
    <p style="line-height: 1; margin-left: 20px;"><strong>Name:</strong><span style="background-color: rgb(235, 107, 86);">${name}</span></p>
    <p style="line-height: 1; margin-left: 20px;"><strong>Email:</strong><a href="mailto:${email}">${email}</a></p>
    <p style="line-height: 1; margin-left: 20px;"><strong>Company:</strong>${
      company ? company : "not specified"
    }</p>
    <p style="line-height: 1; margin-left: 20px;"><strong>Message:</strong>${message}</p>
    <p><br></p>
    <p>Cheers,</p>
    <p>Mail admin - Advertaro.&nbsp;</p>`,
  };
  return emailDetails;
};

export { sendEmail, generateInquireEmailDetails };
