import {
  generateInquireEmailDetails,
  sendEmail,
} from "../../utils/emailHandler";
import { subscribeUser } from "../../utils/subscriptionHandler";

const handler = (req, res) => {
  if (req.method === "POST") {
    // extract the data from body
    const { name, email, company, message } = req.body;

    if (name && email && message) {
      const emailDetails = generateInquireEmailDetails(
        name,
        email,
        company,
        message
      );

      // subscribe the user to mailchimp
      subscribeUser(email, name);

      // send the mail
      sendEmail(emailDetails, (err, info) => {
        if (err) {
          console.error(err.message);

          //send internal server error to client
          res.status(503).json({
            message: "error sending emails",
            status: "error",
          });
        } else {
          console.log(`Email sent successfully - emailId: ${info.messageId}`);

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
