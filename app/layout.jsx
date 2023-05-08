import Footer from "app/layout/footer/footer";
import "app/styles/card.css";
import "app/globals.css";

export const metadata = {
  title: "DK | Danial Khakbaz",
  description: "a website generated by create next app by Danial Khakbaz.",
  icons: {
    icon: { url: "app/assets/dk-logo.jpeg?", type: "image/jpeg" },
    shortcut: { url: "app/assets/dk-logo.jpeg?", type: "image/jpeg" },
  },
};

const RootLayout = ({ children }) => {
  return (
    <html className="bg-black" lang="en">
      <body className="w-screen min-h-screen flex flex-col justify-center items-center">
        <main className="w-3/5 flex flex-col items-center grow">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
