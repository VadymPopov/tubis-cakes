'use server';

import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import nodemailer from 'nodemailer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

import { db } from '../db/firebase';

export async function handlePromoEmailSubmit(data: { email: string }) {
  const { email } = data;
  const logoPath = path.resolve('./public/images/cake-three.png');
  const uniquePromoCode = uuidv4().split('-')[0];

  try {
    const emailRef = collection(db, 'promo');
    const q = query(emailRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return { success: false, message: 'Email already exists' };
    }

    await addDoc(emailRef, { email, promo: uniquePromoCode });
  } catch (error) {
    return { success: false, message: 'Failed to save email to the database' };
  }

  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 587,
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: 'info@tubiscakes.com',
    to: email,
    subject: 'Your 10% Promo Code!',
    text: `Thank you for subscribing! Here's your 10% promo code: ${uniquePromoCode}`,
    html: `
      <div style="font-family: Arial, sans-serif; text-align: center; background-color: #efc3ff; padding: 40px 20px;">
        <img src="cid:logo" alt="Tubis Cakes Logo" style="width: 150px; margin: 0 auto; display: block;" />

        <h1 style="color: #333; font-size: 24px; margin-top: 20px;">
          For a cake that's truly meant to be, order with Tubi.
        </h1>

        <p style="font-size: 16px; color: #000; margin-top: 20px;">
          We're excited to have you! Use this one-time promo code below to get 10% off your next order:
        </p>

        <div style="background-color: #f8e6e7; padding: 15px; margin: 20px 0; display: inline-block;">
          <strong style="font-size: 24px;">${uniquePromoCode}</strong>
        </div>

        <p style="font-size: 16px; color: #000;">
          <a href="https://tubiscakes.com/shop" style="color: #d13adf; text-decoration: none;">
            Visit our shop to place your order
          </a> and enjoy your discount!
        </p>

        <footer style="font-size: 12px; color: #fff; margin-top: 30px;">
          © 2024 Tubis Cakes. All rights reserved.
        </footer>
      </div>
    `,
    attachments: [
      {
        filename: 'cake-three.png',
        path: logoPath,
        cid: 'logo',
        contentType: 'image/png',
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Promo code sent successfully' };
  } catch (error) {
    return { success: false, message: 'Failed to send promo email' };
  }
}
