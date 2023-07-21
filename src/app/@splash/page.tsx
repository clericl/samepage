import SplashButtons from "@/components/SplashButtons";
import SplashModal from "@/components/SplashModal";
import Image from "next/image";

export default function Splash() {
  return (
    <main className="relative w-screen h-screen">
      <section className="w-full bg-primary text-button-text h-3/5 flex justify-center items-center">
        <div className="flex flex-col items-center w-1/2">
          <h1 className="text-7xl text-center">SamePage</h1>
          <div className="flex justify-evenly w-2/5 pt-6">
            <SplashButtons />
          </div>
        </div>
        <div className="relative grow h-full">
          <Image src="/assets/splash.avif" alt="placeholder" fill />
        </div>
      </section>
      <section className="flex justify-center items-center h-2/5">
        <p>This is obviously a cool app that you should sign up for.</p>
      </section>
      <SplashModal />
    </main>
  )
}
