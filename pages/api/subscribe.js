const { subscribeUser } = require("../../utils/subscriptionHandler");

const subscribe = (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email)
      res.status(406).json({
        message: "data not acceptable - missing or mis-formatted data",
        status: "error",
      });

    const state = subscribeUser(email);

    if (state) {
      // send success status
      res.status(200).json({
        message: "successfully sent the message",
        status: "success",
      });
    } else {
      // send failed status
      res.status(503).json({
        message: "error sending emails",
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

export default subscribe;
