import React from 'react'
import type { Metadata } from "next"
import { ApolloProviderWrapper } from '@/providers/ApolloProviderWrapper'
import './globals.css'

export const metadata: Metadata = {
  title: "MediConnect - Healthcare Services",
  description: "Connect with doctors and manage your healthcare online",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ApolloProviderWrapper>
          {children}
        </ApolloProviderWrapper>
      </body>
    </html>
  )
}
