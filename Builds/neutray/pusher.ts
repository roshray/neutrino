import Pusher from "pusher"
import ClientPusher from "pusher-js"


export const serverPusher = new Pusher(
{
    appId :"1506527",
    key :"87f3f471223dc223a385",
    secret :"102ca2563ad7c2be6fa0",
    cluster :"ap2",
    useTLS: true,
})

export const clientpusher = new ClientPusher('87f3f471223dc223a385', {
      cluster: 'ap2',
      forceTLS: true,
})

