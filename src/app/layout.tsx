import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from '@/lib/apollo-client'
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
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  )
}
