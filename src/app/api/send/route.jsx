// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function middleware(req) {
//   if (req.method !== 'POST') {
//     return new Response(JSON.stringify({ error: 'Method not allowed' }), {
//       status: 405,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }

//   try {
//     const { email, subject, message } = await req.json();
//     console.log(email, subject, message);

//     // Prepare email content without JSX
//     const emailContent = `
//       <h1>${subject}</h1>
//       <p>Thank you for contacting us!</p>
//       <p>New message submitted:</p>
//       <p>${message}</p>
//     `;

//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, email],
//       subject: subject,
//       text: `Subject: ${subject}\nMessage: ${message}`,
//       html: emailContent,
//     });

//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ error }), {
//       status: 500,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }
// }