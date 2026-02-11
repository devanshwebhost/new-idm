  import { NextResponse } from 'next/server';
  import nodemailer from 'nodemailer';

  // This function handles POST requests to /api/send-email
  export async function POST(request) {
    try {
      // 1. Parse the request body
      const { name, email, message, category } = await request.json();


      // 2. Basic validation
      if (!name || !email || !message) {
        return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
      }

      // 3. Create a transporter for sending email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // Use your Google App Password
        },
      });

      // 4. Define email options for the site owner
      const mailToOwner = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `[${category}] New Contact Form Submission from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      };

      // 5. Define email options for the auto-reply to the user
      const mailToUser = {
    from: `"Indocs Media" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'We have received your message!',
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden;">
          
          <div style="background: #6b22a4; padding: 20px; text-align: center;">
            <img src="https://indocsmedia.vercel.app/assets/logo.webp" alt="Indocs Media" style="max-height: 70px;" />
          </div>
          
          <div style="padding: 30px; text-align: center;">
            <h2 style="color: #6b22a4; margin-bottom: 20px;">Hi ${name},</h2>
            <p style="font-size: 16px; line-height: 1.7; text-align: left;">
              Thank you for getting in touch with us! <strong style="color: #6b22a4;">We’ve received your message</strong> and our team will get back to you as soon as possible.  
            </p>
            <p style="font-size: 16px; line-height: 1.7; text-align: left;">
              Meanwhile, you can <strong style="color: #6b22a4;">instantly connect with us</strong> through the options below:
            </p>
            
            <div style="margin-top: 30px; text-align: center;">
              <a href="https://api.whatsapp.com/send/?phone=9310895844&text&type=phone_number&app_absent=0" target="_blank" style="display: inline-block; background-color: #6b22a4; color: #ffffff; padding: 10px 22px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">
                WhatsApp
              </a>
              
              <a href="https://indocsmedia.vercel.app" target="_blank" style="display: inline-block; color: #6b22a4; text-decoration: underline; margin-left: 20px; font-size: 14px; font-weight: bold;">
                Visit Website
              </a>
            </div>
          </div>
          
          <div style="background: #f1f1f1; padding: 15px; text-align: center; font-size: 13px; color: #555;">
            <p style="margin: 5px 0;">Best regards,</p>
            <p style="margin: 0; font-weight: bold; color: #6b22a4;">The Indocs Media Team</p>
            <hr style="margin: 15px 0; border: none; border-top: 1px solid #ddd;" />
            <p style="margin: 0;">© 2023-${new Date().getFullYear()} Indocs Media. All rights reserved.</p>
          </div>
        </div>
      </div>
    `,
  };

      // 6. Send both emails concurrently for better performance
      await Promise.all([
        transporter.sendMail(mailToOwner),
        transporter.sendMail(mailToUser)
      ]);

      // 7. Send a success response
      return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

    } catch (error) {
      console.error('Email sending error:', error);
      return NextResponse.json({ message: 'Failed to send message. Please try again later.' }, { status: 500 });
    }
  }