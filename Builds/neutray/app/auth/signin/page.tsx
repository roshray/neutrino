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
              width={300}
              height={50}
              src="https://gravatar.com/avatar/59d8f3699b35d5837e046ac62a3390c5?s=400&d=identicon&r=x"
              alt="Profile Picture" />
      </div>
      
      <SignInComponent providers={providers} />
    </div>
  )
}

export default SignInPage