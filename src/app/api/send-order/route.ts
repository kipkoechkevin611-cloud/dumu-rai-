import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { subject, message } = body;

    const data = await resend.emails.send({
      from: 'Rai Cement Orders <orders@raicement.co.ke>',
      to: 'raicement33@gmail.com',
      subject: subject,
      text: message,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
