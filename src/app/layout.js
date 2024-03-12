import MainFooter from "@/components/MainFooter/mainfooter";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { DataProvider } from "./context/DataContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DataProvider>
          {children}
          <MainFooter />
          <ToastContainer />
        </DataProvider>
      </body>
    </html>
  );
}
