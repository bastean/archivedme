import nodemailer from 'nodemailer';
import path from 'path';

import { Version } from '#helpers';

export class Transport {
	static mail(mailConfig) {
		return new Promise((resolve, reject) => {
			const transporter = nodemailer.createTransport({
				host: process.env.EMAIL_HOST,
				port: process.env.EMAIL_PORT,
				secure: true,
				auth: {
					user: process.env.EMAIL_USER,
					pass: process.env.EMAIL_PASS
				}
			});

			transporter.sendMail(
				{
					from: process.env.EMAIL_USER,
					to: mailConfig.email,
					subject: mailConfig.subject,
					text: `Hello ${mailConfig.name}, Please ${mailConfig.description} with the link below: ${mailConfig.url}`,
					html: `
                    <div style="padding: 64px 16px; background-color: #000000">
                        <div style="top: 8px; position: relative">
                            <div align="center">
                                <img
                                    style="max-width: 100%"
                                    src="cid:logo-email"
                                />
                            </div>

                            <div style="margin-top: 20px; overflow-wrap: break-word" align="center">
                                <p style="color: #a4a5a7; font-size: 24px">Hello ${mailConfig.name}</p>

                                <p style="color: #bebfc0; font-size: 18px">
                                    Please ${mailConfig.description} by clicking the button below
                                </p>

                                <a
                                    style="color: #d8d9d9; font-size: 20px"
                                    href="${mailConfig.url}"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    ${mailConfig.buttonText}
                                </a>

                                <div style="margin-top: 16px" align="center">
                                    <a
                                        style="color: #000000"
                                        href="https://github.com/bastean/mern-server"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <span style="color: #97989a">MERN SERVER</span>
                                    </a>

                                    <div style="margin-top: 5px">
                                        <span style="color: #818284">${Version.latest}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `,
					attachments: [
						{
							filename: 'logo-email.png',
							path: path.resolve() + `/src/api/v1/assets/email/logo-email.png`,
							cid: 'logo-email'
						}
					]
				},
				function (error, info) {
					if (error) {
						reject({ code: 500, msg: 'Unsuccessfully. Please try again' });
					} else {
						resolve();
					}
				}
			);
		});
	}
}
