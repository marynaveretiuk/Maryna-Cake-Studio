import { LenisProvider } from "@/context/LenisProvider";
import ScrollAnimations from "@/context/ScrollAnimations";
import { LoaderProvider } from "@/context/LoaderContext";
import { CartProvider } from "@/context/CartContext";
import TransitionProvider from "@/context/TransitionProvider";
import LoadingScreen from "@/components/common/loader/LoadingScreen";
import { loader } from "@/data/loader";

// Composes every app-wide provider in one place
// Order matters: ScrollAnimations needs Lenis; LoadingScreen needs the loader.
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <ScrollAnimations>
        <LoaderProvider enabled={loader.enabled}>
          {loader.enabled && <LoadingScreen />}

          <CartProvider>
            <TransitionProvider>{children}</TransitionProvider>
          </CartProvider>
          
        </LoaderProvider>
      </ScrollAnimations>
    </LenisProvider>
  );
}
