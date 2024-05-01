import { AppProps } from "next/app";
import { Provider } from "react-redux";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { store } from "../redux/store";
import "@/styles/globals.css";
import "@/styles/progress.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  // default config for ngprogress to show progres of the page when loading
  const router = useRouter();
  useEffect(() => {
    const routeChangeStart = () => nProgress.start();
    const routeChangeComplete = () => nProgress.done();
    nProgress.configure({ easing: "ease", speed: 500 });
    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);
    router.events.on("routeChangeError", routeChangeComplete);
    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeComplete);
      router.events.off("routeChangeError", routeChangeComplete);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" reverseOrder={false} />
        <main>
          <Component {...pageProps} />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
