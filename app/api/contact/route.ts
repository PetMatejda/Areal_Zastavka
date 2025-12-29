import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Emailové adresy příjemců
const RECIPIENT_EMAILS = [
  'info@arealzastavka.cz',
  'petra.huclova@arealzastavka.cz',
  'petr.matejicek@balloonlightgroup.com',
];

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

    // Vytvoření HTML emailu
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2563eb; }
            .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nová poptávka z webu Areál Zastávka</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Jméno:</div>
                <div class="value">${name}</div>
              </div>
              ${company ? `
              <div class="field">
                <div class="label">Firma:</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">O co má zájem:</div>
                <div class="value">${interest}</div>
              </div>
              ${message ? `
              <div class="field">
                <div class="label">Zpráva:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              <div class="footer">
                <p>Poptávka byla odeslána ${new Date().toLocaleString('cs-CZ')}</p>
                <p>Odpověď můžete odeslat přímo na: <a href="mailto:${email}">${email}</a></p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Odeslání emailu na všechny adresy
    if (process.env.RESEND_API_KEY) {
      try {
        // Odesíláme emaily jednotlivě pro lepší spolehlivost
        const emailPromises = RECIPIENT_EMAILS.map(async (recipient) => {
          try {
            const result = await resend.emails.send({
              from: 'Areál Zastávka <noreply@arealzastavka.cz>',
              to: recipient,
              replyTo: email,
              subject: `Nová poptávka: ${interest}`,
              html: emailHtml,
            });
            console.log(`Email úspěšně odeslán na ${recipient}:`, result);
            return { recipient, success: true, result };
          } catch (recipientError: any) {
            console.error(`Chyba při odesílání na ${recipient}:`, recipientError);
            return { recipient, success: false, error: recipientError.message };
          }
        });

        const results = await Promise.allSettled(emailPromises);
        const successful = results.filter((r): r is PromiseFulfilledResult<{recipient: string, success: boolean}> => 
          r.status === 'fulfilled' && r.value.success
        ).length;
        const failed = results.filter(r => 
          r.status === 'rejected' || (r.status === 'fulfilled' && !r.value.success)
        ).length;
        
        console.log(`Odesílání dokončeno: ${successful} úspěšných, ${failed} neúspěšných`);
        
        if (failed > 0) {
          console.error('Některé emaily se nepodařilo odeslat:', results);
        }
      } catch (emailError: any) {
        console.error('Chyba při odesílání emailu:', emailError);
        console.error('Error details:', JSON.stringify(emailError, null, 2));
        // I když se email nepodaří odeslat, logujeme data
        console.log('Data poptávky:', {
          name,
          company,
          email,
          interest,
          message,
          timestamp: new Date().toISOString(),
        });
      }
    } else {
      // Pokud není nastaven API klíč, pouze logujeme
      console.log('RESEND_API_KEY není nastaven. Data poptávky:', {
        name,
        company,
        email,
        interest,
        message,
        timestamp: new Date().toISOString(),
      });
    }

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

