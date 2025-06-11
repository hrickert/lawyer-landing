import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dra. Lilian Caballero - Abogada Especialista en Mediaciones, Divorcios y Sucesiones | Argentina, Entre Rios, Paraná, Crespo",
  description:
    "Abogada especialista en mediaciones, divorcios y sucesiones en Crespo. +20 años de experiencia. Primera consulta gratuita. Atención personalizada y profesional.",
  keywords:
    "abogada Crespo, divorcio Crespo, mediación familiar, sucesiones herencias, derecho familia, abogado divorcio, mediador certificado",
  authors: [{ name: "Dra. Lilian Caballero" }],
  openGraph: {
    title: "Dra. Lilian Caballero - Abogada Especialista en Derecho de Familia",
    description: "Soluciones legales confiables en mediaciones, divorcios y sucesiones. Primera consulta gratuita.",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
