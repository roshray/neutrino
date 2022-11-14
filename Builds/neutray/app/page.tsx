import React from 'react'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

async function HomePage() {
  const data =  
    await fetch(`${process.env.VERCEL_URL || "https://localhost:3000"}/api/getMessages`).
    then(
      (res) => res.json()
    )
    const messages:Message[] = data.messages
  return (
    <main>
      <MessageList intialMessages={messages} />
      <ChatInput />
    </main>
  )
}

export default HomePage