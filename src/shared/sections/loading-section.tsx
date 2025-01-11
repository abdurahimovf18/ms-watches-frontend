

export function LoadingSection() {
  return (
    <section className="w-full h-screen flex justify-center items-center" aria-live="polite">
      <div className="flex justify-center items-center bg-background flex-col gap-8 sm:gap-12 p-3">
        <span className="aspect-square min-h-[5vh] min-w-[5vw] ring-1 ring-foreground animate-ping rounded-full"></span>
        <p className="text-xl font-teachers">Please wait, Section is loading...</p>
      </div>
    </section>
  );
}
