<script setup lang="ts">
import { computed } from 'vue';
import { Music, Sparkles, ShoppingBag, Pizza, Bus, Dumbbell, BookOpen, CircleDollarSign, Banknote, CreditCard, TrendingUp, Briefcase } from 'lucide-vue-next';
import { useTransactionsStore } from '../../../stores/transactions';

const transactionsStore = useTransactionsStore();

const userTransactions = computed(() => transactionsStore.userTransactions);

const categoryIconMap: Record<string, any> = {
  'Alimentação': Pizza,
  'Transporte': Bus,
  'Assinaturas': Music,
  'Saúde': Dumbbell,
  'Compras': ShoppingBag,
  'Receita': Sparkles,
  'Moradia': BookOpen,
  'Outros': CircleDollarSign,
  'Salário': Banknote,
  'Pagamento': CreditCard,
  'Rendimento': TrendingUp,
  'Freelance': Briefcase
};

const getIcon = (category: string) => categoryIconMap[category] || CircleDollarSign;

const getTone = (status: string) => status === 'credito' ? 'primary' : 'alert';

const toneMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  alert: "bg-accent/10 text-accent",
};

const statusStyles: Record<string, string> = {
  credito: "border-success/30 bg-success/10 text-success",
  debito: "border-accent/30 bg-accent/10 text-accent",
};

const statusLabels: Record<string, string> = {
  credito: "crédito",
  debito: "débito",
};

function formatDate(dateStr: string) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
  return new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' }).format(dateObj);
}
</script>
<template>
    <main class="shadow-card rounded-3xl border border-border/50 bg-gradient-card overflow-hidden">
        <header class="text-lg font-semibold mb-4 pt-6 pl-6">{{ userTransactions.length }} Transações</header>

        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="border-b border-border/50">
                    <th class="py-3 font-medium text-muted-foreground text-sm pl-6">Descrição</th>
                    <th class="py-3 font-medium text-muted-foreground text-sm">Categoria</th>
                    <th class="py-3 font-medium text-muted-foreground text-sm">Método</th>
                    <th class="py-3 font-medium text-muted-foreground text-sm">Data</th>
                    <th class="py-3 font-medium text-muted-foreground text-sm">Status</th>
                    <th class="py-3 font-medium text-muted-foreground text-sm text-right pr-6">Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="t in userTransactions" :key="t.id" class="border-b border-border/50 last:border-0 hover:bg-white/5 transition-colors">
                    <td class="py-3 pl-6">
                        <div class="flex items-center gap-3">
                            <span :class="['flex h-10 w-10 items-center justify-center rounded-2xl', toneMap[getTone(t.status)]]">
                                <component :is="getIcon(t.category)" class="h-4 w-4" />
                            </span>
                            <div>
                                <p class="font-medium text-sm">{{ t.description }}</p>
                                <p class="text-xs text-muted-foreground">{{ t.id }}</p>
                            </div>
                        </div>
                    </td>
                    <td class="py-3">
                        <span class="text-sm text-muted-foreground">{{ t.category }}</span>
                    </td>
                    <td class="py-3">
                        <span class="text-sm text-muted-foreground">{{ t.paymentMethod }}</span>
                    </td>
                    <td class="py-3">
                        <span class="text-sm text-muted-foreground">{{ formatDate(t.date) }}</span>
                    </td>
                    <td class="py-3">
                        <span :class="['inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize', statusStyles[t.status]]">
                            {{ statusLabels[t.status] || t.status }}
                        </span>
                    </td>
                    <td class="py-3 text-right pr-6">
                        <span :class="['font-semibold text-sm', t.status === 'credito' ? 'text-success' : 'text-accent']">
                            {{ t.status === 'credito' ? '+' : '-' }}R$ {{ Math.abs(t.amount).toFixed(2) }}
                        </span>
                    </td>
                </tr>
                <tr v-if="userTransactions.length === 0">
                    <td colspan="6" class="text-center py-12 text-sm text-muted-foreground">
                        Nenhuma transação encontrada.
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>