export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // TODO: You can save to DB, or integrate with Nodemailer, SendGrid, etc.
    console.log("New contact submission:", { name, email, message });

    return new Response(JSON.stringify({ success: true, message: "Message received!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error handling contact form:", error);
    return new Response(JSON.stringify({ success: false, message: "Something went wrong." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
