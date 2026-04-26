<template>
    <div className="relative">
    <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-glow blur-3xl" />

    <div className="rounded-3xl glass-strong p-6 shadow-elevated">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-gradient-card p-5 shadow-card">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Total balance</span>
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
          <div className="mt-2 font-display text-3xl font-bold">$12,847</div>
          <div className="mt-1 text-xs text-primary">+$340 this week</div>
          <div className="mt-4 h-12 w-full">
            <Sparkline />
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-card p-5 shadow-card">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Tokyo Trip</span>
            <Target className="h-4 w-4 text-accent" />
          </div>
          <div className="mt-2 font-display text-3xl font-bold">68%</div>
          <div className="mt-1 text-xs text-muted-foreground">$3,400 of $5,000</div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
            <div className="h-full w-[68%] rounded-full bg-gradient-accent" />
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-card p-5 shadow-card">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>AI Assistant</span>
            <Sparkles className="h-4 w-4 text-primary-glow" />
          </div>
          <div className="mt-2 text-sm leading-snug">
            Skip 2 takeout orders this week → hit Tokyo by August 🗼
          </div>
          <button className="mt-3 w-full rounded-xl bg-primary/10 py-2 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors">
            Apply suggestion
          </button>
        </div>
      </div>
    </div>
  </div>
</template>