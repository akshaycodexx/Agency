const nodemailer = require('nodemailer');

const createTransporter = () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  return null;
};

const sendInquiryEmail = async (inquiryData) => {
  const transporter = createTransporter();
  const contactEmail = process.env.CONTACT_EMAIL || 'info@creativion.com';

  const notificationHtml = `
    <h2>New Project Inquiry - Creativion Agency</h2>
    <p><strong>Name:</strong> ${inquiryData.name}</p>
    <p><strong>Company:</strong> ${inquiryData.company || 'N/A'}</p>
    <p><strong>Email:</strong> ${inquiryData.email}</p>
    <p><strong>Phone:</strong> ${inquiryData.phone || 'N/A'}</p>
    <p><strong>Service Requested:</strong> ${inquiryData.service}</p>
    <p><strong>Budget Range:</strong> ${inquiryData.budget || 'Not specified'}</p>
    <p><strong>Preferred Contact Method:</strong> ${inquiryData.preferredContact}</p>
    <p><strong>Project Description:</strong></p>
    <blockquote style="background: #f4f4f5; padding: 10px; border-left: 4px solid #2563eb;">
      ${inquiryData.message}
    </blockquote>
    <p><small>Received at: ${new Date().toLocaleString()}</small></p>
  `;

  const clientAcknowledgementHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
      <h2 style="color: #0f172a;">Thank you for reaching out to Creativion</h2>
      <p>Dear ${inquiryData.name},</p>
      <p>We have received your project inquiry regarding <strong>${inquiryData.service}</strong>. Our creative team will review your requirements and get back to you shortly.</p>
      <br>
      <p>Best regards,</p>
      <p><strong>The Creativion Team</strong><br>CREATE • INNOVATE • GROW</p>
    </div>
  `;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Creativion Website" <${process.env.SMTP_USER}>`,
        to: contactEmail,
        subject: `[New Inquiry] ${inquiryData.service} - ${inquiryData.name}`,
        html: notificationHtml,
      });

      await transporter.sendMail({
        from: `"Creativion Agency" <${process.env.SMTP_USER}>`,
        to: inquiryData.email,
        subject: `We received your inquiry - Creativion`,
        html: clientAcknowledgementHtml,
      });
      console.log(`[Email Utility] Inquiry email notifications sent successfully to ${contactEmail} & ${inquiryData.email}`);
    } catch (err) {
      console.error(`[Email Utility Error] SMTP error: ${err.message}`);
    }
  } else {
    console.log(`[Email Utility Simulated] SMTP credentials not fully configured. Inquiry recorded successfully:`, inquiryData);
  }
};

module.exports = { sendInquiryEmail };
