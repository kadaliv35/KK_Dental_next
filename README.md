# KK Multispecialty Dental Clinic - Next.js

This is a Next.js version of the KK Multispecialty Dental Clinic website, featuring a modern, responsive design with appointment booking functionality.

## Features

- **Modern Design**: Clean, professional medical/dental theme
- **Responsive Layout**: Optimized for all device sizes
- **Appointment Booking**: Integrated EmailJS for appointment requests
- **Smooth Animations**: CSS animations and transitions
- **SEO Optimized**: Next.js built-in SEO features
- **TypeScript**: Full TypeScript support
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui Components**: Modern, accessible UI components

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## EmailJS Configuration

To enable appointment booking functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template with the required variables
4. Update the configuration in `src/lib/emailjs-config.ts`

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # Shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services section
│   ├── Contact.tsx     # Contact section
│   ├── Footer.tsx      # Footer
│   └── AppointmentModal.tsx # Booking modal
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── styles/             # Global styles
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: Modern component library
- **EmailJS**: Email service integration
- **Lucide React**: Icon library
- **Radix UI**: Accessible component primitives

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT License.