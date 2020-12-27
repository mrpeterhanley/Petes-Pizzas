const nodemailer = require('nodemailer');

function generateOrderEmail({ order, total }) {
  return `<div>
    <h1>Your Recent Order from Pete's Pizzas!</h1>
    <p>We will have your order ready in the next 20 mins</p>
    <ul style="list-style: none; padding-left: 0;">
      ${order
        .map(
          (item) => `<li>
        <img src="${item.thumbnail}" alt="${item.name}" />
        ${item.size} ${item.name} - ${item.price}
      </li>`
        )
        .join('')}
    </ul>
    <p>Your order total is <strong>${total}</strong> due at pickup.</p>
  </div>`;
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

exports.handler = async (event, context) => {
  await wait(1000);
  const body = JSON.parse(event.body);

  if (body.mapleSyrup) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid form submission!' }),
    };
  }

  const requiredFields = ['email', 'name', 'order'];

  for (const field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops, you are missing the ${field} field`,
        }),
      };
    }
  }

  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Why would you order nothing?`,
      }),
    };
  }

  const info = await transporter.sendMail({
    from: "Pete's Pizzas <hanley.peter@gmail.com>",
    to: `${body.name} <${body.email}>`,
    subject: 'New order!',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success!' }),
  };
};
