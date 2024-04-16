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
      className="w-full flex items-center justify-center px-6 mt-6 bg-white border-2 border-black text-black rounded-lg shadow-md hover:shadow-lg"
    >
      <Image src={hubspotLogo} alt="Image" />
      <span className="">Continue with Hubspot</span>
    </button>
  );
}
