import nodemailer from 'nodemailer';
import path from 'path';

import { Version } from '#helpers';

export class Mail {
	static send(formData) {
		const { name, lastname, email, number, message } = formData;

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
					to: process.env.TO_EMAIL,
					subject: `New Contact Request by ${email}`,
					text: `| Name: ${name} | Lastname: ${lastname} | Number/t.me: ${number} | Email: ${email} | Message: ${message} |`,
					html: `
                    <div style="padding: 64px 16px; background-color: #0d0003">
                        <div style="top: 8px; position: relative">
                            <div align="center">
                                <img
                                    style="max-width: 100%"
                                    src="cid:logo-email"
                                />
                            </div>

                            <div style="margin-top: 20px" align="center">
                                <div
                                    style="
                                        width: 95%;
                                        max-width: 404px;
                                        font-size: 16px;
                                        color: #d7153d;
                                        font-weight: bold;
                                        overflow-wrap: break-word;
                                    "
                                    align="left"
                                >
                                    <div style="padding: 1px 10px; background-color: #15171f">
                                        <h3>
                                            Name:
                                            <span style="color: #fcfcfc; font-weight: lighter"
                                                >${name}</span
                                            >
                                        </h3>
                                        <h3>
                                            Lastname:
                                            <span style="color: #fcfcfc; font-weight: lighter"
                                                >${lastname}</span
                                            >
                                        </h3>
                                        <h3>
                                            Number/t.me:
                                            <span style="color: #fcfcfc; font-weight: lighter"
                                                >${number}</span
                                            >
                                        </h3>
                                        <h3>
                                            Email:
                                            <span style="color: #fcfcfc; font-weight: lighter"
                                                >${email}</span
                                            >
                                        </h3>
                                    </div>

                                    <div
                                        style="
                                            margin-top: 20px;
                                            padding: 1px 10px;
                                            background-color: #1d202b;
                                        "
                                    >
                                        <h3>Message:</h3>
                                        <h3
                                            style="padding: 5px 20px; color: #fcfcfc; font-weight: lighter"
                                        >
                                            ${message}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div style="margin-top: 20px" align="center">
                                <a
                                    style="color: #0d0003"
                                    href="https://github.com/bastean/formup-api"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <span style="color: #fcfcfc">FormUp</span>
                                    <span style="color: #d7153d">API</span>
                                </a>

                                <div style="margin-top: 5px">
						            <span style="color: #818284">${Version.latest}</span>
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
