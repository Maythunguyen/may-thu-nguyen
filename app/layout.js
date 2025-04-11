import "./globals.css"; 
export const metadata = {
  title: "May Thu Nguyen",
  description: "Built with Aspiration, Passion, and Love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
