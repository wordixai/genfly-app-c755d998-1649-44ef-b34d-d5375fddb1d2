import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const FeaturedModels = () => {
  return (
    <div className="w-full min-w-80 space-y-3 md:w-auto">
      {/* Mobile routing curves */}
      <div className="block md:hidden">
        <svg
          width="100%"
          className="h-10"
          viewBox="0 0 320 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <title>Routing Curves</title>
          <g stroke="currentColor" strokeWidth="1.5">
            <path
              d="M155 2C160 15 60 5 60 18"
              className="origin-center transition-all duration-300 text-slate-6"
            />
            <path
              d="M160 2C160 12 160 15 160 18"
              className="origin-center transition-all duration-300 text-slate-6"
            />
            <path
              d="M165 2C160 15 260 5 260 18"
              className="origin-center transition-all duration-300 text-primary"
            />
          </g>
          <g className="text-slate-7">
            <circle
              cy="24"
              cx="60"
              r="3"
              fill="currentColor"
              className="origin-center transition-all duration-300 text-slate-7"
            />
            <circle
              cy="24"
              cx="160"
              r="3"
              fill="currentColor"
              className="origin-center transition-all duration-300 text-slate-7"
            />
            <circle
              cy="24"
              cx="260"
              r="4"
              fill="currentColor"
              className="origin-center transition-all duration-300 text-primary"
            />
          </g>
        </svg>

        {/* Model provider icons */}
        <div className="grid grid-cols-3 gap-4 pb-3">
          {[
            "https://openrouter.ai/images/icons/GoogleGemini.svg",
            "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://openrouter.ai/&size=256",
            "https://openrouter.ai/images/icons/Anthropic.svg",
          ].map((icon, index) => (
            <button
              key={index}
              className="whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 text-muted-foreground hover:bg-accent hover:text-accent-foreground border border-transparent h-11 flex items-center justify-center rounded-lg p-4"
              type="button"
            >
              <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className="overflow-hidden rounded-full">
                  <img
                    width="256"
                    height="256"
                    alt="Provider icon"
                    className="h-full w-full object-cover"
                    src={icon}
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Featured model card - Mobile */}
      <div className="group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary md:border-primary">
        <div className="space-y-2">
          <div>
            <a className="hover:underline" href="#">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-foreground font-medium">Claude Sonnet 4</h3>
                </div>
                <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                  <div className="overflow-hidden rounded-full">
                    <img
                      width="256"
                      height="256"
                      alt="Anthropic"
                      className="h-full w-full object-cover"
                      src="https://openrouter.ai/images/icons/Anthropic.svg"
                    />
                  </div>
                </div>
              </div>
            </a>
            <div className="flex items-center">
              <span className="text-muted-foreground text-xs">
                by{" "}
                <a className="text-primary hover:underline" href="#">
                  anthropic
                </a>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
            <div>
              <p className="text-green-10 text-sm font-medium">661.4B</p>
              <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
            </div>
            <div>
              <p className="text-sm font-medium">2.2s</p>
              <p className="text-muted-foreground text-[10px]">Latency</p>
            </div>
            <div>
              <p className="text-sm font-medium text-red-10">-1.75%</p>
              <p className="text-muted-foreground text-[10px]">Weekly growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop featured models */}
      <div className="hidden space-y-3 md:block">
        <div className="flex items-center justify-between">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring underline hover:text-link/80 h-6 rounded-md px-1.5 shadow-xs text-primary gap-0 text-xs hover:underline">
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </button>
        </div>

        {/* Desktop model cards */}
        {[
          {
            name: "Gemini 2.5 Pro",
            provider: "google",
            tokens: "178.9B",
            latency: "2.4s",
            growth: "-12.1%",
            icon: "https://openrouter.ai/images/icons/GoogleGemini.svg",
            border: "border-slate-6"
          },
          {
            name: "Horizon Beta",
            provider: "openrouter",
            tokens: "102.0B",
            latency: "1.2s",
            growth: "--",
            icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://openrouter.ai/&size=256",
            isNew: true,
            border: "border-slate-6"
          },
          {
            name: "Claude Sonnet 4",
            provider: "anthropic",
            tokens: "661.4B",
            latency: "2.2s",
            growth: "-1.75%",
            icon: "https://openrouter.ai/images/icons/Anthropic.svg",
            border: "md:border-primary"
          }
        ].map((model, index) => (
          <div
            key={index}
            className={`group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary ${model.border}`}
          >
            <div className="space-y-2">
              <div>
                <a className="hover:underline" href="#">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-foreground font-medium">{model.name}</h3>
                      {model.isNew && (
                        <Badge variant="secondary" className="text-[10px]">
                          New
                        </Badge>
                      )}
                    </div>
                    <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                      <div className="overflow-hidden rounded-full">
                        <img
                          width="256"
                          height="256"
                          alt={model.provider}
                          className="h-full w-full object-cover"
                          src={model.icon}
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="flex items-center">
                  <span className="text-muted-foreground text-xs">
                    by{" "}
                    <a className="text-primary hover:underline" href="#">
                      {model.provider}
                    </a>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
                <div>
                  <p className="text-green-10 text-sm font-medium">{model.tokens}</p>
                  <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
                </div>
                <div>
                  <p className="text-sm font-medium">{model.latency}</p>
                  <p className="text-muted-foreground text-[10px]">Latency</p>
                </div>
                <div>
                  <p className={`text-sm font-medium ${model.growth.includes('-') ? 'text-red-10' : model.growth === '--' ? 'text-slate-9' : 'text-green-10'}`}>
                    {model.growth}
                  </p>
                  <p className="text-muted-foreground text-[10px]">Weekly growth</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile "Featured Models" section */}
      <div className="flex items-center justify-between px-2 pt-4 md:hidden">
        <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
        <a className="text-primary text-xs hover:underline" href="#">
          View Trending
          <ExternalLink className="inline-block ml-px size-3" />
        </a>
      </div>
    </div>
  );
};

export default FeaturedModels;