"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import hubspotLogo from "@/public/hubspot.png";

// ...

export function HubspotSignInButton() {
  const handleSignIn = async () => {
    signIn("hubspot");
  };

  return (
    <button
      onClick={handleSignIn}
      className="w-1/5 flex items-center justify-center px-6 mt-6 bg-white border-2 border-black text-black rounded-lg shadow-md hover:shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <Image src={hubspotLogo} alt="Image" width={100} height={100} />
      <span className="">Continue with Hubspot</span>
    </button>
  );
}
