import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/send-email", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER || 'leeshc2@gmail.com',
          pass: process.env.SMTP_PASS || 'pbmtwicobufslmdx'
        }
      });

      const mailOptions = {
        from: `"${name}" <Jude.lee@wwmg.co.kr>`,
        to: 'Jude.lee@wwmg.co.kr',
        subject: `[문의] ${subject} - ${name}`,
        text: `보내는 사람 (이름/회사명): ${name}\n회신받을 이메일: ${email}\n\n문의 내용:\n${message}`,
        replyTo: email,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error: any) {
      console.error('Email send error:', error);
      res.status(500).json({ success: false, error: 'Failed to send email', details: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
