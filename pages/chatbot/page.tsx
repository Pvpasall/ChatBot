import Chat from "@/components/chat";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default function Page() {
  const session = getServerSession(authOptions);
  return (
    <>
      <h1>Hello ${}</h1>
      <Chat />;
    </>
  );
}
