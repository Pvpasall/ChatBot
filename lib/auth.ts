import { NextAuthOptions } from "next-auth";

import Hubspot from "next-auth/providers/hubspot";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    Hubspot({
      clientId: process.env.HUBSPOT_CLIENT_ID as string,
      clientSecret: process.env.HUBSPOT_CLIENT_SECRET as string,
    }),
  ],
};
