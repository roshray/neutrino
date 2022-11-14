'use client'
import { useEffect } from 'react'
import fetcher from '../utils/fetchMessages'
import useSWR from "swr"
import {Message } from "../typings"
import MessageComponent from './MessageComponent'
import { clientpusher } from '../pusher'

type Props = {
  intialMessages: Message[]
}

function MessageList({ intialMessages}: Props) {
  const {
    data:messages, 
    error,mutate,
  
  } = useSWR<Message>("/api/getMessages", fetcher)
  
  useEffect(() => {
    const channel = clientpusher.subscribe('messages')
    channel.bind('new-message', async (data:Message) => {
      if (messages?.find((message) => message.id === data.id)) return 

      if (!messages) {
        mutate(fetcher)
      } else{
        mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
          
      })
    }
     
    })

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }



  }, [messages, mutate, clientpusher]) 
  

  return (
    <div className='space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto'>
      {(messages || intialMessages).map((message) => (
        <MessageComponent key={message.id} message={message}/>
      ))}
      Message delivered here!
      
    </div>
  )
}

export default MessageList 