import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ message: 'Name and Email are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailToHimanshu = {
      from: `"Indocs Media" <${process.env.EMAIL_USER}>`,
      to: email,
      bcc: process.env.EMAIL_USER, // Yeh aapke paas proof ke liye copy aayegi
      subject: 'OFFICIAL UPDATE: Contract Closure - The Second Chance',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden;">
            
            <div style="background: #111111; padding: 20px; text-align: center; border-bottom: 4px solid #6b22a4;">
              <img src="https://indocsmedia.vercel.app/assets/logo.webp" alt="Indocs Media" style="max-height: 70px;" />
            </div>
            
            <div style="padding: 30px; text-align: left;">
              <h3 style="color: #444; margin-bottom: 5px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">Official Communication</h3>
              <p style="font-size: 13px; color: #777; margin-top: 0; margin-bottom: 25px;">
                <strong>Date:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br>
                <strong>Reference:</strong> Contract Closure / The Second Chance
              </p>

              <p style="font-size: 16px; line-height: 1.6;">Dear ${name},</p>
              
              <p style="font-size: 15px; line-height: 1.7; color: #444;">
                This is an official update from the Management Desk of Indocs Media regarding the collaboration for the project titled <strong>"The Second Chance"</strong>.
              </p>

              <p style="font-size: 15px; line-height: 1.7; color: #444;">
                As we have not received a response to our mandatory proposed updates regarding <strong>Fair Ownership and Portfolio Rights</strong>, we are formally closing this negotiation.
              </p>

              <p style="font-size: 15px; line-height: 1.7; color: #444;">
                Indocs Media has already fulfilled its initial commitment by delivering the fully edited 3-episode series in good faith. However, we cannot proceed with executing an agreement that restricts our independent portfolio rights and lacks mutual consideration for our team's technical and creative efforts.
              </p>

              <div style="background: #fdf2f2; border-left: 4px solid #d93025; padding: 15px; margin: 25px 0; border-radius: 4px;">
                <h4 style="margin: 0 0 10px 0; color: #d93025; font-size: 14px;">STATUS UPDATE & ACTIONS TAKEN</h4>
                <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #333; line-height: 1.6;">
                  <li><strong>Current Contract:</strong> Rejected / Unsigned</li>
                  <li><strong>Future Projects:</strong> Indocs Media withdraws from participation</li>
                  <li><strong>Instagram Collaboration:</strong> Removed from our end</li>
                </ul>
              </div>

              <p style="font-size: 15px; line-height: 1.7; color: #444;">
                Effective immediately, this collaboration is officially marked as <strong>CLOSED</strong> in our system. We wish you the best with the release of the series and your future endeavors.
              </p>
            </div>
            
            <div style="background: #f1f1f1; padding: 20px; text-align: center; font-size: 13px; color: #555;">
              <p style="margin: 5px 0;">Sincerely,</p>
              <p style="margin: 0; font-weight: bold; color: #6b22a4; font-size: 16px;">Devansh</p>
              <p style="margin: 2px 0; font-size: 12px;">Managing Director & Chief Visionary<br><strong>Indocs Media</strong></p>
              
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
              <p style="margin: 0; font-style: italic; font-size: 11px; color: #888;">
                This is an official, automated record of closure from Indocs Media. No further action or reply is required.
              </p>
              <p style="margin: 10px 0 0 0;">© 2023 - ${new Date().getFullYear()} Indocs Media. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailToHimanshu);

    return NextResponse.json({ message: 'Closure Notice sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}