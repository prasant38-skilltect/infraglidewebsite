// Email sending utility using a backend service
// You can use this to send emails via your backend API

export const sendEmail = async (emailData) => {
  try {
    // Using FormSubmit.co as a simple backend solution (no setup required)
    const response = await fetch('https://formsubmit.co/prashant.jinega@skilltect.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (response.ok) {
      return { success: true, message: 'Email sent successfully!' };
    } else {
      return { success: false, message: 'Failed to send email. Please try again.' };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Error sending email. Please check your connection.' };
  }
};

// Alternative: Using EmailJS service
// First, install: npm install @emailjs/browser
// Then uncomment and use this function

/*
import emailjs from '@emailjs/browser';

// Initialize EmailJS (get your Service ID, Template ID, and Public Key from EmailJS dashboard)
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

export const sendEmailWithEmailJS = async (templateParams) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams
    );
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
};
*/
