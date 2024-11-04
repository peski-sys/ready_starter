import { createClient } from "@/utils/supabase/server";
import { Navcheck } from "./confirm-nav";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  
  return (
  <Navcheck givenUser={user} />
  )
}