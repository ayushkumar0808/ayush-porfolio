export default function Footer() {
  return (
    <footer className="text-center py-8 text-gray-500 text-sm bg-[#0b1120]/90 backdrop-blur-sm border-t border-white/5">
      © {new Date().getFullYear()} Ayush Kumar. Commit Today Build Tomorrow
    </footer>
  );
}
