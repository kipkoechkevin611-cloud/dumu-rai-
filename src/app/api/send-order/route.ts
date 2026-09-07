import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface OrderData {
  customerDetails: {
    fullName: string;
    phone: string;
    email: string;
    location: string;
    notes: string;
  };
  cartItems: Array<{
    id: string;
    name: string;
    price: string;
    quantity: number;
  }>;
  total: number;
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY environment variable');
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body: OrderData = await request.json();
    const { customerDetails, cartItems, total } = body;

    const orderDate = new Date().toLocaleString('en-KE', {
      timeZone: 'Africa/Nairobi',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    // Generate HTML email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Order - Rai Cement</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .header { background: #063B78; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; margin: -30px -30px 30px -30px; }
          .header h1 { margin: 0; font-size: 24px; }
          .section { margin-bottom: 25px; }
          .section h2 { color: #063B78; border-bottom: 2px solid #F4B400; padding-bottom: 10px; margin-top: 0; }
          .info-row { display: flex; margin-bottom: 10px; }
          .info-label { font-weight: bold; min-width: 120px; color: #555; }
          .info-value { flex: 1; }
          table { width: 100%; border-collapse: collapse; margin-top: 15px; }
          th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
          th { background: #f8f9fa; font-weight: bold; color: #063B78; }
          .total-row { font-size: 18px; font-weight: bold; color: #063B78; }
          .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>RAI CEMENT LIMITED</h1>
            <p>New Customer Order</p>
          </div>

          <div class="section">
            <h2>Customer Information</h2>
            <div class="info-row">
              <span class="info-label">Name:</span>
              <span class="info-value">${customerDetails.fullName}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Phone:</span>
              <span class="info-value">${customerDetails.phone}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span>
              <span class="info-value">${customerDetails.email || 'Not provided'}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Location:</span>
              <span class="info-value">${customerDetails.location}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Quantity:</span>
              <span class="info-value">${cartItems.reduce((sum, item) => sum + item.quantity, 0)} bags</span>
            </div>
            ${customerDetails.notes ? `
            <div class="info-row">
              <span class="info-label">Notes:</span>
              <span class="info-value">${customerDetails.notes}</span>
            </div>
            ` : ''}
          </div>

          <div class="section">
            <h2>Order Details</h2>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                ${cartItems.map(item => `
                  <tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
                    <td>KES ${(parseFloat(item.price.replace('KES ', '')) * item.quantity).toLocaleString()}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            <div style="margin-top: 20px;" class="total-row">
              Total Order Amount: KES ${total.toLocaleString()}
            </div>
          </div>

          <div class="section">
            <h2>Order Information</h2>
            <div class="info-row">
              <span class="info-label">Order Date:</span>
              <span class="info-value">${orderDate}</span>
            </div>
          </div>

          <div class="footer">
            <p><strong>RAI CEMENT LIMITED</strong></p>
            <p>Awasi, Kericho-Kisumu Highway, Nyanza Region</p>
            <p>Phone: +254 746 392 602 | Email: raicement33@gmail.com</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: 'Rai Cement Orders <onboarding@resend.dev>',
      to: 'raicement33@gmail.com',
      subject: `New Order Received - Rai Cement - ${customerDetails.fullName}`,
      html: htmlContent,
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
