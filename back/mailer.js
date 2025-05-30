import { SMTPClient } from 'emailjs';

export function createMailer(config) {
  const client = new SMTPClient({
    user: config.SMTP_USER,
    password: config.SMTP_PASS,
    host: config.SMTP_HOST,
    port: Number(config.SMTP_PORT),
    ssl: false,
    tls: true
  });

  client.sendAsync = (message) => {
    return new Promise((resolve, reject) => {
      client.send(message, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  };

  async function sendVerificationEmail(email, token) {
    const link = `${config.FRONTEND_URL}/verify?token=${token}&email=${encodeURIComponent(email)}`;
    await client.sendAsync({
      text: `Click this link to verify: ${link}`,
      from: config.SMTP_USER,
      to: email,
      subject: 'Verify your email',
      attachment: [
        {
          data: `<p>Click <a href="${link}">here</a> to verify your email.</p>`,
          alternative: true
        }
      ]
    });
  }

  async function sendResetPasswordEmail(email, token) {
    const link = `${config.FRONTEND_URL}/reset-password?token=${token}&email=${encodeURIComponent(email)}`;
    await client.sendAsync({
      text: `Click this link to reset your password: ${link}`,
      from: config.SMTP_USER,
      to: email,
      subject: 'Reset your password',
      attachment: [
        {
          data: `<p>Click <a href="${link}">here</a> to reset your password.</p>`,
          alternative: true
        }
      ]
    });
  }

  return { sendVerificationEmail, sendResetPasswordEmail };
}
