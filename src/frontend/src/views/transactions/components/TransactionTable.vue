<script setup lang="ts">
import { Coffee, Music, Sparkles, ShoppingBag, Pizza, Bus, Dumbbell, BookOpen, Wallet } from 'lucide-vue-next';
const allTx = [
  { id: "TX-2041", icon: Coffee, name: "Transação Exemplo (Café)", category: "Alimentação", date: "3 de mai. de 2026", amount: -6.5, method: "Cartão Pulse •• 4421", status: "concluido", tone: "accent" },
  { id: "TX-2040", icon: Music, name: "Spotify Premium", category: "Assinaturas", date: "3 de mai. de 2026", amount: -9.99, method: "Cartão Pulse •• 4421", status: "concluido", tone: "tertiary" },
  { id: "TX-2039", icon: Sparkles, name: "Salário — Acme Co.", category: "Receita", date: "2 de mai. de 2026", amount: 2450.0, method: "Transferência bancária", status: "concluido", tone: "primary" },
  { id: "TX-2038", icon: ShoppingBag, name: "Urban Outfitters", category: "Compras", date: "2 de mai. de 2026", amount: -84.2, method: "Cartão Pulse •• 4421", status: "concluido", tone: "accent" },
  { id: "TX-2037", icon: Pizza, name: "Pizza c/ Maya", category: "Alimentação", date: "1 de mai. de 2026", amount: -12.75, method: "Dividido com Maya", status: "pendente", tone: "accent" },
  { id: "TX-2036", icon: Bus, name: "Recarga Bilhete Único", category: "Transporte", date: "30 de abr. de 2026", amount: -25.0, method: "Cartão Pulse •• 4421", status: "concluido", tone: "tertiary" },
  { id: "TX-2035", icon: Dumbbell, name: "SmartFit", category: "Saúde", date: "29 de abr. de 2026", amount: -49.0, method: "Cartão Pulse •• 4421", status: "concluido", tone: "primary" },
  { id: "TX-2034", icon: BookOpen, name: "Livros Amazon", category: "Compras", date: "28 de abr. de 2026", amount: -14.99, method: "Cartão Pulse •• 4421", status: "falhou", tone: "accent" },
  { id: "TX-2033", icon: Wallet, name: "Pix de Jordan", category: "Receita", date: "27 de abr. de 2026", amount: 35.0, method: "Pix", status: "concluido", tone: "primary" },
  { id: "TX-2032", icon: Coffee, name: "Padaria Central", category: "Alimentação", date: "26 de abr. de 2026", amount: -5.25, method: "Cartão Pulse •• 4421", status: "concluido", tone: "accent" },
  { id: "TX-2031", icon: Music, name: "Apple Music", category: "Assinaturas", date: "25 de abr. de 2026", amount: -16.99, method: "Cartão Pulse •• 4421", status: "concluido", tone: "tertiary" },
  { id: "TX-2030", icon: ShoppingBag, name: "Mercado Livre", category: "Compras", date: "24 de abr. de 2026", amount: -129.0, method: "Cartão Pulse •• 4421", status: "concluido", tone: "accent" },
];

const toneMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  tertiary: "bg-slate-400/10 text-slate-300",
};

const statusStyles: Record<string, string> = {
  concluido: "border-success/30 bg-success/10 text-success",
  pendente: "border-warning/30 bg-warning/10 text-warning",
  falhou: "border-destructive/30 bg-destructive/10 text-destructive",
};

const statusLabels: Record<string, string> = {
  concluido: "concluído",
  pendente: "pendente",
  falhou: "falhou",
};
</script>
<template>
    <main class="shadow-card rounded-3xl border border-border/50 bg-gradient-card overflow-hidden">
        <header class="text-lg font-semibold mb-4 pt-6 pl-6">12 Transações</header>

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
                <tr v-for="t in allTx" :key="t.id" class="border-b border-border/50 last:border-0 hover:bg-white/5 transition-colors">
                    <td class="py-3 pl-6">
                        <div class="flex items-center gap-3">
                            <span :class="['flex h-10 w-10 items-center justify-center rounded-2xl', toneMap[t.tone]]">
                                <component :is="t.icon" class="h-4 w-4" />
                            </span>
                            <div>
                                <p class="font-medium text-sm">{{ t.name }}</p>
                                <p class="text-xs text-muted-foreground">{{ t.id }}</p>
                            </div>
                        </div>
                    </td>
                    <td class="py-3">
                        <span class="text-sm text-muted-foreground">{{ t.category }}</span>
                    </td>
                    <td class="py-3">
                        <span class="text-sm text-muted-foreground">{{ t.method }}</span>
                    </td>
                    <td class="py-3">
                        <span class="text-sm text-muted-foreground">{{ t.date }}</span>
                    </td>
                    <td class="py-3">
                        <span :class="['inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize', statusStyles[t.status]]">
                            {{ statusLabels[t.status] || t.status }}
                        </span>
                    </td>
                    <td class="py-3 text-right pr-6">
                        <span :class="['font-semibold text-sm', t.amount > 0 ? 'text-success' : 'text-foreground']">
                            {{ t.amount > 0 ? '+' : '-' }}R$ {{ Math.abs(t.amount).toFixed(2) }}
                        </span>
                    </td>
                </tr>
                <tr v-if="allTx.length === 0">
                    <td colspan="6" class="text-center py-12 text-sm text-muted-foreground">
                        Nenhuma transação encontrada com esses filtros.
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>