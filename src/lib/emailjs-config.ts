// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_gqxi1gy',     // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_jpomp89',   // Replace with your EmailJS template ID  
  PUBLIC_KEY: 'tjsdoGR5M1RxysG98'      // Replace with your EmailJS public key
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{to_name}}
//    - {{to_email}} 
//    - {{patient_name}}
//    - {{patient_phone}}
//    - {{appointment_date}}
//    - {{appointment_time}}
//    - {{message}}
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the values above with your actual credentials