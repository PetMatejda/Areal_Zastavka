import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, interest, message } = body;

    // Validace
    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: 'Chybí povinné údaje' },
        { status: 400 }
      );
    }

    // Zde byste měli odeslat email pomocí emailové služby
    // Prozatím logujeme data (v produkci použijte Resend, SendGrid, nebo podobnou službu)
    console.log('Nová poptávka:', {
      name,
      company,
      email,
      interest,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implementovat odesílání emailu
    // Příklad s Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@arealzastavka.cz',
    //   to: 'info@arealzastavka.cz',
    //   subject: `Nová poptávka: ${interest}`,
    //   html: `...`
    // });

    return NextResponse.json(
      { message: 'Poptávka byla úspěšně odeslána' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chyba při odesílání poptávky:', error);
    return NextResponse.json(
      { error: 'Došlo k chybě při odesílání' },
      { status: 500 }
    );
  }
}

