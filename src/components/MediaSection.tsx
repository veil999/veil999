import { Play } from "lucide-react";

const videos = [
  { id: "eCO3DfCP1-s", title: "Pegasus.Tech — Legit Showcase" },
];

export function MediaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 mt-32">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-frost mb-3">
          <Play className="h-3 w-3" /> MEDIA
        </div>
        <h2 className="font-display text-4xl font-bold tracking-tight">
          See it in <span className="text-gradient-frost">action</span>
        </h2>
        <p className="mt-3 text-muted-foreground">Recent showcases from the community.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((v, i) => (
          <div
            key={v.id}
            className={`frost-pop glass rounded-xl overflow-hidden ${i % 2 === 0 ? "" : "tilt-right"}`}
          >
            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="p-4">
              <h3 className="font-display text-base font-semibold">{v.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
