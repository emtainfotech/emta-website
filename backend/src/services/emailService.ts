import "dotenv/config";
import nodemailer from "nodemailer";

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "HR_EMAIL",
] as const;

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`Missing email environment variable: ${key}`);
  }
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

type ApplicationEmailData = {
  applicationId: number;
  candidateName: string;
  candidateEmail: string;
  candidatePhone: string;
  jobTitle: string;
  company: string;
  resumeUrl: string;
  resumeName: string;
};

export async function sendApplicationEmails(
  data: ApplicationEmailData,
): Promise<void> {
  const {
    applicationId,
    candidateName,
    candidateEmail,
    candidatePhone,
    jobTitle,
    company,
    resumeUrl,
    resumeName,
  } = data;

  await transporter.sendMail({
    from: `"EMTA Careers" <${process.env.SMTP_USER}>`,
    to: process.env.HR_EMAIL,
    replyTo: candidateEmail,
    subject: `New Job Application #${applicationId} - ${jobTitle}`,
    html: `
      <h2>New Job Application</h2>

      <p><strong>Application ID:</strong> ${applicationId}</p>
      <p><strong>Candidate:</strong> ${candidateName}</p>
      <p><strong>Email:</strong> ${candidateEmail}</p>
      <p><strong>Phone:</strong> ${candidatePhone}</p>
      <p><strong>Job:</strong> ${jobTitle}</p>
      <p><strong>Company:</strong> ${company}</p>

      <p>
        <strong>Resume:</strong>
        <a href="${resumeUrl}" target="_blank" rel="noopener noreferrer">
          ${resumeName}
        </a>
      </p>

      <p>This application was submitted through the EMTA website.</p>
    `,
  });

  await transporter.sendMail({
    from: `"EMTA Careers" <${process.env.SMTP_USER}>`,
    to: candidateEmail,
    subject: `Application Received - ${jobTitle}`,
    html: `
      <h2>Application Received</h2>

      <p>Hello ${candidateName},</p>

      <p>
        Thank you for applying for the
        <strong>${jobTitle}</strong> position at
        <strong>${company}</strong>.
      </p>

      <p>
        Your application has been successfully received by EMTA.
      </p>

      <p>
        <strong>Application ID:</strong> ${applicationId}
      </p>

      <p>
        Our recruitment team will review your application and contact you
        if your profile matches the requirements.
      </p>

      <p>Regards,<br />EMTA Careers Team</p>
    `,
  });
}