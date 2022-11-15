import { getProviders, signIn} from "next-auth/react"
import Image from "next/image"
import SignInComponent from "./SignInComponent"


async function SignInPage() {
    const providers  = await getProviders()
  return (
    <div className="grid justify-center">
        <div>
          <Image
              className="rounded-full mx-2 object-cover"
              width={70}
              height={70}
              src="https://i.pravatar.cc/150?img=38"
              alt="Profile Picture" />
      </div>
      
      <SignInComponent providers={providers} />
    </div>
  )
}

export default SignInPage