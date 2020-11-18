const mailchimp = require("@mailchimp/mailchimp_marketing");

// configs
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const subscribeUser = async (email, name = null) => {
  const subscriber = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: name,
    },
  };

  try {
    const res = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID,
      subscriber
    );
    console.log(`Successfully subscribed - subscriptionId: ${res.id}`);
    return true;
  } catch (error) {
    console.error(`Error adding the subscriber to list - ${error.message}`);
    return false;
  }
};

export { subscribeUser };
