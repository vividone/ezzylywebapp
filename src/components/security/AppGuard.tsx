import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSessionStorage from "@/hooks/useSessionStorage";
import { TOKEN } from "@/utils/token";
import { toast } from "react-hot-toast";
import { ToastComponent } from "@/assets/ezzyly/specials/Toast";

interface IAuthGuard {
  children: any;
}
export default function AppGuard({ children }: IAuthGuard) {
  const router = useRouter();
  const [token] = useSessionStorage(TOKEN.ACCESS);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
    if (typeof window !== "undefined") {
      if (token) {
        // nothing
      } else {
        if (count < 1) {
          toast.custom((t) => (
            <ToastComponent
              t={t}
              status="error"
              title="Session expired"
              description=""
            />
          ));
          router.push(`/?next=${router.asPath}`);
        }
      }
    }
  }, []);

  // if auth initialized with a valid user show protected page
  if (token) {
    return <>{children}</>;
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
}
