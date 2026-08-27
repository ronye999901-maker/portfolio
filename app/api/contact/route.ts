import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required." },
        { status: 400 }
      );
    }

    // In a production environment, this could forward to an email API (e.g. Resend, Sendgrid, or webhook)
    console.log(`[Contact Message Received] From: ${name} (${email})`);
    console.log(`Message: ${message}`);

    return NextResponse.json(
      { success: true, message: "Thank you for reaching out! Sayan will get back to you shortly." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error processing contact message." },
      { status: 500 }
    );
  }
}
