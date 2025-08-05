import { ExternalLink } from "lucide-react";

const FeatureCards = () => {
  const providers = [
    { name: "microsoft", icon: "https://openrouter.ai/images/icons/Microsoft.svg", delay: "0ms" },
    { name: "nvidia", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nvidia.com/&size=256", delay: "150ms" },
    { name: "meta-llama", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://ai.meta.com/&size=256", delay: "300ms" },
    { name: "google", icon: "https://openrouter.ai/images/icons/GoogleGemini.svg", delay: "450ms" },
    { name: "amazon", icon: "https://openrouter.ai/images/icons/Bedrock.svg", delay: "600ms" },
  ];

  const floatingProviders = [
    { name: "deepseek", icon: "https://openrouter.ai/images/icons/DeepSeek.png", delay: "750ms" },
    { name: "qwen", icon: "https://openrouter.ai/images/icons/Qwen.png", delay: "900ms" },
    { name: "moonshotai", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://moonshot.ai&size=256", delay: "1050ms" },
    { name: "minimax", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://minimaxi.com/&size=256", delay: "1200ms" },
    { name: "z-ai", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://z.ai/&size=256", delay: "1350ms" },
  ];

  const moreProviders = [
    { name: "mistralai", icon: "https://openrouter.ai/images/icons/Mistral.png", delay: "1500ms" },
    { name: "anthropic", icon: "https://openrouter.ai/images/icons/Anthropic.svg", delay: "1650ms" },
    { name: "openai", icon: "https://openrouter.ai/images/icons/OpenAI.svg", delay: "1800ms", isDark: true },
    { name: "google ai studio", icon: "https://openrouter.ai/images/icons/GoogleAIStudio.svg", delay: "1950ms" },
    { name: "x-ai", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://x.ai/&size=256", delay: "2100ms" },
  ];

  const features = [
    {
      title: "One API for Any Model",
      description: "Access all major models through a single, unified interface. OpenAI SDK works out of the box.",
      link: "Browse all",
      href: "#",
      visual: (
        <div className="absolute inset-4 grid grid-cols-5 gap-x-0 gap-y-1 scale-105 z-10">
          {[...providers, ...floatingProviders, ...moreProviders].map((provider, index) => (
            <div
              key={provider.name}
              title={provider.name}
              className={`size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out ${
                index >= 5 && index < 10 ? 'translate-x-9' : ''
              }`}
              style={{
                animation: `4s ease-in-out ${provider.delay} infinite normal none running float${index}`,
                opacity: 0.85
              }}
            >
              <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                <div className="overflow-hidden rounded-full">
                  <img
                    width="256"
                    height="256"
                    alt={`Favicon for ${provider.name}`}
                    className={`h-full w-full object-cover ${provider.isDark ? 'dark:invert' : ''}`}
                    src={provider.icon}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Higher Availability",
      description: "Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.",
      link: "Learn more",
      href: "#",
      visual: (
        <div className="h-full flex items-center justify-center">
          <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
            <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">
              anthropic/claude-3.7-sonnet
            </div>
            <svg
              width="100%"
              height="70"
              viewBox="0 0 200 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-muted-foreground/60"
            >
              <title>Model routing visualization</title>
              <path
                d="M95 0 C100 40, 20 20, 10 65"
                stroke="currentColor"
                strokeWidth="0.75"
              />
              <path
                d="M100 0 C100 20, 100 20, 100 65"
                stroke="currentColor"
                strokeWidth="0.75"
              />
              <path
                d="M105 0 C100 40, 180 20, 190 65"
                stroke="currentColor"
                strokeWidth="0.75"
              />
            </svg>
            <div className="flex justify-between w-full">
              {[
                "https://openrouter.ai/images/icons/GoogleGemini.svg",
                "https://openrouter.ai/images/icons/Anthropic.svg",
                "https://openrouter.ai/images/icons/Bedrock.svg"
              ].map((icon, index) => (
                <div key={index} className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                  <div className="overflow-hidden rounded-full">
                    <img
                      width="256"
                      height="256"
                      alt="Provider"
                      className="h-full w-full object-cover"
                      src={icon}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Price and Performance",
      description: "Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference.",
      link: "Learn more",
      href: "#",
      visual: (
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute inset-0 z-10">
            <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-t via-transparent opacity-20" />
            <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-r via-transparent opacity-20" />
          </div>
          <img
            alt="Performance graph"
            width="300"
            height="150"
            className="h-full w-full object-contain dark:hidden"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=150&fit=crop&auto=format"
          />
          <img
            alt="Performance graph"
            width="300"
            height="150"
            className="hidden h-full w-full object-contain dark:block"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=150&fit=crop&auto=format"
          />
        </div>
      )
    },
    {
      title: "Custom Data Policies",
      description: "Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.",
      link: "View docs",
      href: "#",
      visual: (
        <div className="h-full flex items-center justify-center">
          <div className="flex flex-col items-center w-full max-w-52">
            <div className="flex justify-between items-end w-full px-[45px] -mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-muted-foreground">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <div className="w-7 h-7 rounded-full bg-green-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-9">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-muted-foreground">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.3" stroke="currentColor" className="size-32 text-muted-foreground/60">
              <title>Data policy visualization</title>
              <path d="M12 2.7A12 12 0 0 1 3.6 6 12 12 0 0 0 3 9.7a12 12 0 0 0 9 11.7A12 12 0 0 0 20.4 6h-.1A12 12 0 0 1 12 2.7Z" />
              <path strokeWidth=".4" d="M14.2 14.5a3.6 3.6 0 0 0 1.5-.2 1.2 1.2 0 0 0-1.9-1m.4 1.2v.3a4.8 4.8 0 0 1-2.4.6c-.9 0-1.7-.2-2.4-.6a2.4 2.4 0 0 1 0-.3m4.8 0a2.4 2.4 0 0 0-.4-1.3m0 0a2.4 2.4 0 0 0-2-1.1 2.4 2.4 0 0 0-2 1.1m0 0a1.2 1.2 0 0 0-1.9 1.1 3.6 3.6 0 0 0 1.5.2m.4-1.3a2.4 2.4 0 0 0-.4 1.3M13 9.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm2.4 1.2a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm-5.4 0a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z" />
            </svg>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-4 md:space-y-8 max-w-screen-2xl">
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {features.map((feature, index) => (
          <a key={index} className="h-full" href={feature.href}>
            <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
              <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-30" />
                  </div>
                  {feature.visual}
                </div>
              </div>
              <div className="flex flex-col gap-2 px-6 py-4 h-full">
                <div className="flex flex-col gap-2 h-full">
                  <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
                <span className="text-primary group-hover/card:underline">
                  {feature.link}
                  <ExternalLink className="ml-1 inline-block w-4" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;