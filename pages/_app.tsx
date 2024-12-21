import Layout from "@/components/layout/Layout"; // Import Layout component
import "@/styles/globals.css"; // Import global styles
import type { AppProps } from "next/app"; // Import AppProps for type-checking

// Main App component
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} /> {/* Render the page content inside Layout */}
    </Layout>
  );
}
