import ArabicSection from "@/components/arabic-section";

export default function Home() {
  return (
    <main className="max-w-md md:max-w-3xl mx-auto h-[830px]">
      <h1 className="text-center text-xl md:text-4xl mt-7 mb-16 font-bold uppercase">Trying Various Local Typrographies</h1>
      <div className="mx-3 sm:m-0">
      <ArabicSection />
      </div>
    </main>
  );
}
