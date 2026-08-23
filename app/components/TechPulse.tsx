import { techPulse } from "../data/portfolio-data";

export default function TechPulse() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <div className="hover-wiggle rounded-3xl bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm p-8 md:p-12">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h2 className="text-3xl font-bold">Tech Pulse</h2>
          <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
            Static Preview
          </span>
        </div>
        <p className="text-center text-gray-500 mb-10">
          A snapshot of what's trending across the stack I build with.
        </p>

        <div className="space-y-3">
          {techPulse.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 p-4 rounded-xl bg-gray-50/70"
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-300 font-bold w-5">{i + 1}</span>
                <span className="font-medium">{item.title}</span>
              </div>
              <span className="text-xs font-medium bg-orange-50 text-orange-600 px-3 py-1 rounded-full shrink-0">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
