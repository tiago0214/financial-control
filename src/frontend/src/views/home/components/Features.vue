<script setup lang="ts">
import { ArrowRight, MessageSquareText, Sparkles, Target, TrendingUp, Zap } from 'lucide-vue-next';

const features = [
    {
      icon: Target,
      title: "Goal-first banking",
      desc: "Build a vault for every dream — Tokyo, a Tesla, an apartment. Watch each one fill up in real time.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Sparkles,
      title: "AI Assistant, 24/7",
      desc: "Chat about your money like you would a friend. Get plans, nudges, and answers — never lectures.",
      gradient: "from-accent to-warning",
    },
    {
      icon: TrendingUp,
      title: "Future projections",
      desc: "See exactly when you'll hit each goal at your current pace. Then ask the AI how to get there faster.",
      gradient: "from-primary-glow to-primary",
    },
    {
      icon: Zap,
      title: "Auto-save on autopilot",
      desc: "Round-ups, paycheck splits, and smart rules that move money toward goals before you can spend it.",
      gradient: "from-warning to-accent",
    },
    {
      icon: MessageSquareText,
      title: "Plain-English insights",
      desc: "No jargon. Just clear answers like 'You spent $84 more on coffee this month than last.'",
      gradient: "from-primary to-accent",
    },
    {
      icon: ArrowRight,
      title: "Cancel anytime, free forever",
      desc: "The core app stays free. No fees on your first $1,000 saved. Premium when you want more.",
      gradient: "from-accent to-primary",
    },
  ];
</script>

<template>
    <section id="features" class="relative px-6 py-24 md:py-32">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-2xl text-center">
          <span class="text-xs font-semibold uppercase tracking-widest text-primary">Why Mildas Helper</span>
          <h2 class="mt-3 font-display text-4xl font-bold md:text-5xl">
            Built for how you actually live.
          </h2>
          <p class="mt-4 text-muted-foreground">
            Most finance apps make you feel guilty. Mildas Helper makes you feel powerful.
          </p>
        </div>

        <div class="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div
            v-for="f in features"
            :key="f.title"
            class="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-card p-6 transition-all hover:border-primary/30 hover:shadow-elevated"
            >
                <div :class='`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} shadow-soft`'>
                    <component :is="f.icon" class="h-6 w-6 text-primary-foreground stroke-width='2.5'" />
                </div>
                <h3 class="font-display text-xl font-semibold">{{f.title}}</h3>
                <p class="mt-2 text-sm leading-relaxed text-muted-foreground">{{f.desc}}</p>
                <div class="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
            </div>
        </div>
      </div>
    </section>
</template>