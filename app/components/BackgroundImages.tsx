// Background images: portrait crop for mobile, landscape crop for desktop.
// Fixed + z-0 so it stays put behind everything while the page scrolls over it.
export default function BackgroundImages() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <img
        src="/bg-mobile.jpg"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-top md:hidden"
        loading="eager"
        decoding="sync"
      />
      <img
        src="/bg-desktop.jpg"
        alt=""
        aria-hidden="true"
        className="hidden md:block w-full h-full object-cover object-center"
        loading="eager"
        decoding="sync"
      />
    </div>
  );
}
