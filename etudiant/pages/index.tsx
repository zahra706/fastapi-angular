import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-geist-sans)", padding: "2rem", backgroundColor: "#f4f4f9", minHeight: "100vh" }}>
      <h1 style={{ fontFamily: "var(--font-geist-mono)", textAlign: "center", color: "#333", marginBottom: "30px" ,fontWeight:"bold", fontSize:"50px"}}>
        Bienvenue sur la plateforme de formation
      </h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <a
          href="/inscription"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          S'inscrire
        </a>
        <a
          href="/profil"
          style={{
            color: "#007bff",
            textDecoration: "none",
            marginBottom: "15px",
            fontSize: "1.2rem",
          }}
        >
          Voir Profil
        </a>
        <a
          href="/formation"
          style={{
            color: "#007bff",
            textDecoration: "none",
            fontSize: "1.2rem",
          }}
        >
          Formations
        </a>
      </div>
    </div>
  );
}
