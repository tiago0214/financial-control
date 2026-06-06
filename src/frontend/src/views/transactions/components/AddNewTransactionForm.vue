<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useUiStore } from "../../../stores/ui";
import { useTransactionsStore } from "../../../stores/transactions";
import { useToast } from "primevue/usetoast";

const uiStore = useUiStore();
const transactionsStore = useTransactionsStore();
const isEditing = !!transactionsStore.selectedTransactionId;

const toast = useToast();

const description = ref("");
const amount = ref<number | null>(null);
const date = ref("");
const category = ref("Receita");
const status = ref<"debito" | "credito">("credito");
const paymentMethod = ref("Cartão de Crédito");

function handleSubmit() {
  if (!description.value || !amount.value || !date.value) {
    alert("Preencha os campos obrigatórios");
    return;
  }

  if(isEditing){

  }else{
    transactionsStore.addTransaction({
      description: description.value,
      amount: amount.value,
      date: date.value,
      category: category.value,
      status: status.value,
      paymentMethod: paymentMethod.value,
    });
  } 

  uiStore.closeModal();
  // Reset form
  description.value = "";
  amount.value = null;
  date.value = "";

  toast.add({
    severity: "success",
    summary: "Sucesso",
    detail: "Nova transação adicionada com sucesso!",
    life: 3000,
  });
}

const availableOptions = computed(() => {
  const incomeValues = [
    "Receita",
    "Salário",
    "Pagamento",
    "Rendimento",
    "Freelance",
  ];
  const expense = [
    "Alimentação",
    "Transporte",
    "Moradia",
    "Assinaturas",
    "Saúde",
    "Compras",
  ];

  if (incomeValues.includes(category.value)) {
    return "incoming";
  } else if (expense.includes(category.value)) {
    return "expense";
  } else {
    return "chose";
  }
});

watch(availableOptions, (newOption) => {
  if (newOption === "incoming") {
    status.value = "credito";
  } else if (newOption === "expense") {
    status.value = "debito";
  }
});

onMounted(() => {
  if(transactionsStore.selectedTransactionId){
    const findTransaction = transactionsStore.userTransactions.find((t) => {
      return t.id == transactionsStore.selectedTransactionId
    })

    if(findTransaction){
      description.value = findTransaction.description
      amount.value = findTransaction.amount
      date.value = findTransaction.date
      category.value = findTransaction.category
      status.value = findTransaction.status
      paymentMethod.value = findTransaction.paymentMethod
    }
  }
})

onBeforeUnmount(() => {
  if(transactionsStore.selectedTransactionId){
    transactionsStore.selectTransaction(null)
  }
})
</script>

<template>
  <!-- Formulário de Nova Transação -->
  <form class="space-y-5" @submit.prevent="handleSubmit">
    <!-- Descrição -->
    <div class="flex flex-col gap-1.5">
      <label class="text-sm font-semibold text-foreground"
        >Descrição <span class="text-accent text-sm">*</span></label
      >
      <input
        v-model="description"
        required
        type="text"
        class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all"
        placeholder="Ex: Compra no supermercado"
      />
    </div>

    <!-- Valor e Data -->
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-semibold text-foreground"
          >Valor (R$)<span class="text-accent text-sm">*</span></label
        >
        <input
          v-model="amount"
          required
          type="number"
          step="0.01"
          class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all"
          placeholder="0.00"
        />
      </div>
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-semibold text-foreground"
          >Data <span class="text-accent text-sm">*</span></label
        >
        <input
          v-model="date"
          required
          type="date"
          class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all text-muted-foreground"
        />
      </div>
    </div>

    <!-- Categoria e Status -->
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-semibold text-foreground">Categoria</label>
        <select
          v-model="category"
          class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all cursor-pointer"
        >
          <optgroup label="Receitas">
            <option>Receita</option>
            <option>Salário</option>
            <option>Pagamento</option>
            <option>Rendimento</option>
            <option>Freelance</option>
          </optgroup>
          <optgroup label="Despesas">
            <option>Alimentação</option>
            <option>Transporte</option>
            <option>Moradia</option>
            <option>Assinaturas</option>
            <option>Saúde</option>
            <option>Compras</option>
          </optgroup>
          <optgroup label="Outros">
            <option>Outros</option>
          </optgroup>
        </select>
      </div>
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-semibold text-foreground">Tipo</label>
        <select
          v-if="availableOptions === 'chose'"
          v-model="status"
          class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all cursor-pointer"
        >
          <option value="debito">Débito (-)</option>
          <option value="credito">Crédito (+)</option>
        </select>

        <div v-else>
          <input
            type="text"
            :value="
              availableOptions === 'incoming' ? 'Crédito (+)' : 'Débito (-)'
            "
            disabled
            class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all text-muted-foreground cursor-not-allowed"
          />
        </div>
      </div>
    </div>

    <!-- Método de Pagamento -->
    <div class="flex flex-col gap-1.5">
      <label class="text-sm font-semibold text-foreground"
        >Método de Pagamento</label
      >
      <select
        v-model="paymentMethod"
        class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all cursor-pointer"
      >
        <option>Cartão de Crédito</option>
        <option>Cartão de Débito</option>
        <option>Pix</option>
        <option>Transferência</option>
        <option>Boleto</option>
        <option>Dinheiro</option>
      </select>
    </div>

    <!-- Ações -->
    <div class="flex justify-end gap-3 pt-4">
      <button
        type="button"
        @click="uiStore.closeModal()"
        class="px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-muted text-muted-foreground transition-colors cursor-pointer"
      >
        Cancelar
      </button>
      <button
        type="submit"
        class="px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow hover:scale-[1.02] transition-all cursor-pointer"
      >
        Salvar
      </button>
    </div>
  </form>
</template>
