import path from 'path';
import nodemailer from 'nodemailer';

const sendEmail = async (hotel, emailType) => {
	const { name, email, emailToken } = hotel;

	let emailSubject;
	let emailDescription;
	let emailUrl;
	let emailButtonText;

	if (emailType === 'register') {
		emailSubject = 'Confirm Email';
		emailDescription = 'confirm your email';
		emailUrl = `${process.env.CLIENT_URL}/email-confirm/${emailToken}`;
		emailButtonText = 'CONFIRM';
	} else if (emailType === 'resetPwd') {
		emailSubject = 'Password Reset';
		emailDescription = 'reset your password';
		emailUrl = `${process.env.CLIENT_URL}/forgot-password/${emailToken}`;
		emailButtonText = 'RESET';
	}

	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		secure: true,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
		}
	});

	await transporter.sendMail({
		from: process.env.EMAIL_USER,
		to: email,
		subject: emailSubject,
		text: `Hello ${name}, Please ${emailDescription} with the link below: ${emailUrl}`,
		html: `
        <div style="background-color: #272727; padding: 64px 16px">
			<div style="position: relative; top: 8px">
				<div align="center">
					<img src="cid:logo-email"/>
				</div>

				<p style="font-size: 24px; color: #7c6c52" align="center">
					Hello ${name}
				</p>

				<p style="font-size: 18px; color: #a5a5a5" align="center">
					Please ${emailDescription} by clicking the button below.
				</p>

				<p align="center">
					<a
						href="${emailUrl}"
						target="_blank"
						rel="noopener noreferrer"
						style="color: #cecece; font-size: 20px"
					>
						${emailButtonText}</a
					>
				</p>

				<p align="center">
					<a
						href="https://github.com/bastean/hotely-server"
						target="_blank"
						rel="noopener noreferrer"
						style="color: #7c6c52"
					>
						Hotely Server</a
					>
				</p>
			</div>
		</div>
        `,
		attachments: [
			{
				filename: 'logo-email.png',
				path: path.resolve() + `/images/email/logo-email.png`,
				cid: 'logo-email'
			}
		]
	});
};

export default sendEmail;
