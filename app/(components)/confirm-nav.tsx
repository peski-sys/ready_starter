"use client"
import { usePathname } from "next/navigation";
import { signOutAction } from "@/app/actions";
import Link from "next/link";
import { User } from "@supabase/supabase-js";

interface NavcheckProps {
  givenUser: User | null;
}


export function Navcheck({ givenUser } : NavcheckProps) {

    const pathname = usePathname();
    const isPath = pathname === "/";

    return (givenUser && !isPath) ? (
        <div className="flex items-center gap-4">
          Hey, {givenUser.email}!
          <form action={signOutAction}>
            <button type="submit" className="rounded"> 
              Sign out
            </button>
          </form>
        </div>
      ) : (
        <div className="flex gap-2">
          <button>
            <Link href="/sign-up">Sign up</Link>
          </button>
          <button className="rounded">
            <Link href="/dashboard">Dashboard</Link>
          </button>
        </div>
      );
}