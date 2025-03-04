export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Montserrat', Helvetica, Arial, sans-serif !important;
    }
  </style>
</head>
<body style="font-family: 'Montserrat', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f4f7fa;">
  <div style="background: linear-gradient(to right, #1E3C72, #2A5298); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-weight: 600; font-size: 28px;">Verify Your Email</h1>
  </div>
  <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center;">
    <p style="font-size: 16px; font-weight: 300; color: #555;">Hello,</p>
    <p style="font-size: 16px; font-weight: 400; color: #333;">Thank you for signing up! To complete your registration, please use the verification code below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #1E3C72;">{verificationCode}</span>
    </div>
    <p style="font-size: 16px; font-weight: 300; color: #555;">Enter this code on the verification page to activate your account.</p>
    <p style="font-size: 16px; font-weight: 300; color: #555;">This code will expire in 15 minutes for security reasons.</p>
    <p style="font-size: 14px; font-weight: 300; color: #777;">If you didn’t request this, please ignore this email.</p>
    <p style="font-size: 16px; font-weight: 400; color: #333;">Best regards,<br><strong>The AUTH Team</strong></p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
    <p>This is an automated message, please do not reply.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to AUTH</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Montserrat', Helvetica, Arial, sans-serif !important;
    }
  </style>
</head>
<body style="font-family: 'Montserrat', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f4f7fa;">
  <div style="background: linear-gradient(to right, #1E3C72, #2A5298); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-weight: 600; font-size: 28px;">Welcome to AUTH!</h1>
  </div>
  <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center;">
    <p style="font-size: 16px; font-weight: 300; color: #555;">Hello <strong style="color: #1E3C72;">{name}</strong>,</p>
    <p style="font-size: 16px; font-weight: 400; color: #333;">We’re excited to have you onboard! Your email has been successfully verified, and you’re now part of the AUTH community.</p>
    <p style="font-size: 16px; font-weight: 300; color: #555;">Start exploring now by logging into your account.</p>
    <p style="font-size: 14px; font-weight: 300; color: #777;">Need help? Our support team is here for you.</p>
    <p style="font-size: 14px; font-weight: 300; color: #777;">We’re thrilled to have you with us!</p>
    <p style="font-size: 16px; font-weight: 400; color: #333;">Best regards,<br><strong>The AUTH Team</strong></p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
    <p>This is an automated message, please do not reply.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Montserrat', Helvetica, Arial, sans-serif !important;
    }
  </style>
</head>
<body style="font-family: 'Montserrat', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f4f7fa;">
  <div style="background: linear-gradient(to right, #1E3C72, #2A5298); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-weight: 600; font-size: 28px;">Password Reset Successful</h1>
  </div>
  <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center;">
    <p style="font-size: 16px; font-weight: 300; color: #555;">Hello <strong style="color: #1E3C72;">{name}</strong>,</p>
    <p style="font-size: 16px; font-weight: 400; color: #333;">We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #1E3C72; color: white; width: 60px; height: 60px; line-height: 60px; border-radius: 50%; display: inline-block; font-size: 32px; font-weight: 600;">
        ✓
      </div>
    </div>
    <p style="font-size: 16px; font-weight: 300; color: #555;">If you did not initiate this password reset, please contact our support team immediately.</p>
    <p style="font-size: 16px; font-weight: 400; color: #333;">For security reasons, we recommend that you:</p>
    <ul style="text-align: left; display: inline-block; margin: 0 auto; padding: 0; list-style: none; font-size: 16px; font-weight: 300; color: #555;">
      <li>✔ Use a strong, unique password</li>
      <li>✔ Enable two-factor authentication if available</li>
      <li>✔ Avoid using the same password across multiple sites</li>
    </ul>
    <p style="font-size: 16px; font-weight: 400; color: #333;">Thank you for helping us keep your account secure.</p>
    <p style="font-size: 16px; font-weight: 400; color: #333;">Best regards,<br><strong>The AUTH Team</strong></p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
    <p>This is an automated message, please do not reply.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Montserrat', Helvetica, Arial, sans-serif !important;
    }
  </style>
</head>
<body style="font-family: 'Montserrat', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f4f7fa;">
  <div style="background: linear-gradient(to right, #1E3C72, #2A5298); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-weight: 600; font-size: 28px;">Reset Your Password</h1>
  </div>
  <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center;">
    <p style="font-size: 16px; font-weight: 300; color: #555;">Hello,</p>
    <p style="font-size: 16px; font-weight: 400; color: #333;">We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p style="font-size: 16px; font-weight: 400; color: #333;">To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #1E3C72; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Reset Password</a>
    </div>
    <p style="font-size: 16px; font-weight: 300; color: #555;">This link will expire in 1 hour for security reasons.</p>
    <p style="font-size: 16px; font-weight: 400; color: #333;">Best regards,<br><strong>The AUTH Team</strong></p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
    <p>This is an automated message, please do not reply.</p>
  </div>
</body>
</html>

`;