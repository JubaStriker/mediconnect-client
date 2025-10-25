import React from 'react'
import { ApolloProviderWrapper } from '@/providers/ApolloProviderWrapper'
import './globals.css'

export const metadata = {
  title: 'Medical Service Portal',
  description: 'Healthcare management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ApolloProviderWrapper>
          {children}
        </ApolloProviderWrapper>
      </body>
    </html>
  )
}
