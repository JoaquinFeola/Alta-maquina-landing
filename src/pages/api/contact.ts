import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json()) as {
      nombre: string;
      email: string;
      mensaje?: string;
      plan?: string;
    };

    if (!body.nombre || !body.email) {
      return new Response(
        JSON.stringify({ error: 'Nombre y email son requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Alta Maquina <noreply@altamaquina.com>',
        to: "altamaquinasb@gmail.com",
        subject: `Nueva consulta: ${body.nombre}${body.plan ? ` - ${body.plan}` : ''}`,
        html: `
          <h2>Nuevo mensaje desde altamaquina.com</h2>
          <p><strong>Nombre:</strong> ${body.nombre}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          ${body.plan ? `<p><strong>Plan:</strong> ${body.plan}</p>` : ''}
          ${body.mensaje ? `<p><strong>Mensaje:</strong><br>${body.mensaje}</p>` : ''}
          <hr/>
          <p><em>Enviado desde el formulario de contacto de altamaquina.com</em></p>
        `,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error('Resend API error:', errText);
      return new Response(
        JSON.stringify({ error: 'Error al enviar el email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Consulta recibida' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('API contact error:', err);
    return new Response(
      JSON.stringify({ error: 'Error interno' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
