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

// api route
const handler = (req, res) => {
  if (req.method === "POST") {
    // extract the data from body
    const { name, email, company, message } = req.body.inquiryData;

    if (name && email && message) {
      const emailDetails = {
        from: email,
        to: "sooriyarathne1997@gmail.com",
        subject: `New Inquiry - ${name}`,
        text: `there's a new inquiry from ${name} - ${email} - ${message}`,
      };

      // sed the mail
      mailTransport.sendMail(emailDetails, (err, info) => {
        if (err) {
          console.error(err.message);

          //send internal server error to client
          res.status(503).json({
            message: "error sending emails",
            status: "error",
          });
        } else {
          console.log(info);

          // send success status
          res.status(200).json({
            message: "successfully sent the message",
            status: "success",
          });
        }
      });
    } else {
      console.warn("data receive cannot be accepted!");

      // send error status to the client
      res.status(406).json({
        message: "data not acceptable - missing or mis-formatted data",
        status: "error",
      });
    }
  } else {
    console.warn(
      "method is not allowed. only POST method is accepted in this route"
    );

    // send error status to the client
    res.status(405).json({ message: "method not allowed", status: "error" });
  }
};

export default handler;
