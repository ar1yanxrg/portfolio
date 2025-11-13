import './globals.css'

export const metadata = {
  title: 'آریان امروانی - طراح سایت',
  description: ' برنامه‌نویس و طراح وب',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )

}

