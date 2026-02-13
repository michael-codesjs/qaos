export const OtpEmailHtml = (
  otp: string,
  title: string = 'Verify your email',
  message: string = 'Use the code below to complete your sign in or sign up process. This code will expire in 10 minutes.',
) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verification Code</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');

    body {
      font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #F6F5F3;
      color: #111111;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #F6F5F3;
      padding: 40px 0;
    }
    .container {
      max-width: 520px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
      border: 1px solid #E5E5E5;
    }
    .header {
      padding: 48px 40px 12px;
      text-align: center;
    }
    .logo {
      font-size: 32px;
      font-weight: 800;
      color: #111111;
      text-decoration: none;
      letter-spacing: -1px;
    }
    .content {
      padding: 24px 40px 48px;
      text-align: center;
    }
    .title {
      font-size: 28px;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 16px;
      color: #111111;
      letter-spacing: -0.5px;
    }
    .text {
      font-size: 16px;
      line-height: 1.6;
      color: #5E5C5A;
      margin-bottom: 32px;
    }
    .otp-container {
      background-color: #F9FAFB;
      border: 1px solid #F3F4F6;
      border-radius: 16px;
      padding: 32px 24px;
      margin-bottom: 32px;
    }
    .otp-code {
      display: inline-block;
      font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      font-size: 36px;
      font-weight: 800;
      letter-spacing: 8px;
      color: #E16540;
    }
    .footer {
      padding: 32px 40px;
      background-color: #ffffff;
      text-align: center;
      border-top: 1px solid #F3F4F6;
    }
    .footer-text {
      font-size: 12px;
      color: #9CA3AF;
      margin-bottom: 8px;
      font-weight: 500;
    }
    .tagline {
      font-size: 11px;
      color: #E16540;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-top: 16px;
    }
    @media only screen and (max-width: 600px) {
      .container {
        width: 90%;
        border-radius: 16px;
      }
      .content {
        padding: 24px;
      }
      .otp-code {
        font-size: 28px;
        letter-spacing: 4px;
      }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <div class="logo">qaos</div>
      </div>
      <div class="content">
        <h1 class="title">${title}</h1>
        <p class="text">${message}</p>
        <div class="otp-container">
          <div class="otp-code">${otp}</div>
        </div>
        <p class="text" style="font-size: 13px; margin-bottom: 0;">If you didn't request this code, you can safely ignore this email.</p>
      </div>
      <div class="footer">
        <p class="footer-text">&copy; ${new Date().getFullYear()} Qaos. All rights reserved.</p>
        <div class="tagline">Testing with Intent, Not Just Scripts.</div>
      </div>
    </div>
  </div>
</body>
</html>
`;
