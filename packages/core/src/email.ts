import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (options: {
  to: string | string[];
  subject: string;
  react: React.ReactNode;
  from?: string;
}) => {
  return resend.emails.send({
    from: options.from || 'Charlie <charlie@cabyz.com>',
    ...options,
  });
};
