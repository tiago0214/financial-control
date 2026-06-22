<script setup lang="ts">
import { Plane, Home, Car, Calendar, Star } from "lucide-vue-next";
import { useRouter } from "vue-router";
import { useTransactions } from "../../../composables/useTransactions";
import { useGoals } from "../../../composables/useGoals";
import { computed } from "vue";

const route = useRouter();
const transactions = useTransactions();
const goalsComposable = useGoals();

const iconMap: Record<string, any> = {
  Plane: Plane,
  Car: Car,
  Home: Home,
  Star: Star,
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
};

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
  const m = new Intl.DateTimeFormat("pt-BR", { month: "short" }).format(
    dateObj,
  );
  return `${m.charAt(0).toUpperCase() + m.slice(1)} ${year}`;
}

const getProgressColor = (progress: number) => {
  if (progress < 30) return "from-accent to-warning";
  if (progress < 70) return "from-accent to-primary-glow";
  return "from-primary to-primary-glow";
};

const activeGoals = computed(() => goalsComposable.userGoals.value.length);
const totalSaved = computed(() => transactions.totalAvailable.value);

const goals = computed(() => {
  const available = transactions.totalAvailable.value;
  return goalsComposable.userGoals.value.map((g) => {
    const progress = g.targetAmount
      ? Math.min(100, Math.round((available / g.targetAmount) * 100))
      : 0;
    return {
      id: g.id,
      name: g.title,
      icon: iconMap[g.iconString] || Star,
      current: available,
      target: g.targetAmount,
      by: formatDate(g.targetDate),
      progress,
      tint: getProgressColor(progress),
    };
  });
});
</script>
<template>
  <section
    class="rounded-3xl border border-border/50 bg-gradient-card p-6 shadow-card"
  >
    <div class="mb-5 flex items-center justify-between">
      <div>
        <h2 class="font-display text-xl font-bold">Suas Metas</h2>
        <p class="text-xs text-muted-foreground">
          {{ activeGoals }} ativos •
          {{ formatCurrency(totalSaved) }} economizados
        </p>
      </div>
      <button
        class="text-xs font-semibold text-primary hover:underline cursor-pointer"
        @click="route.push('/app/goals')"
      >
        Ver todos
      </button>
    </div>

    <div class="space-y-4">
      <div
        v-for="g in goals"
        :key="g.id"
        class="group rounded-2xl border border-border/50 bg-background/40 p-4 transition-all hover:border-primary/30"
      >
        <div class="flex items-center gap-4">
          <div
            :class="[
              'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br shadow-soft',
              g.tint,
            ]"
          >
            <component
              :is="g.icon"
              class="h-5 w-5 text-primary-foreground"
              :stroke-width="2.5"
            />
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-2">
              <div class="font-semibold">{{ g.name }}</div>
              <div class="text-sm font-bold tabular-nums">
                {{ g.progress }}%
              </div>
            </div>
            <div
              class="mt-1 flex items-center justify-between text-xs text-muted-foreground"
            >
              <span
                >{{ formatCurrency(g.current) }} de
                {{ formatCurrency(g.target) }}</span
              >
              <span class="flex items-center gap-1">
                <Calendar class="h-3 w-3" /> {{ g.by }}
              </span>
            </div>
            <div class="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
              <div
                :class="[
                  'h-full rounded-full bg-linear-to-r transition-all',
                  g.tint,
                ]"
                :style="{ width: `${g.progress}%` }"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="goals.length === 0"
        class="text-center py-4 text-sm text-muted-foreground"
      >
        Nenhuma meta cadastrada.
      </div>
    </div>
  </section>
</template>
