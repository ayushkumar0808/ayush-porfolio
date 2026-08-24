export default function BackgroundImages() {
  return (
    <div className="bg-photo-layer fixed inset-0 w-full h-dvh z-0 pointer-events-none overflow-hidden">
      <img
        src="/bg-mobile.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top md:hidden"
        loading="eager"
        decoding="async"
      />

      <img
        src="/bg-desktop.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}