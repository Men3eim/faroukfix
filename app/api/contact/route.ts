import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, service, area, message } = data;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !service || !area || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // TODO: Integrate with Zoho Zepto Mail SMTP here
    // await sendMailViaSMTP({ ...data })

    return NextResponse.json({ success: true, message: 'Your message has been received. We will contact you soon.' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process your request.' }, { status: 500 });
  }
} 