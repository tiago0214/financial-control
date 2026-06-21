import { get, patch, post } from "../../api/api";

interface TransactionResponse {
  transactions: Transaction[];
}

interface AddNewTransactionResponse {
  message: string;
  statusCode: number;
}

interface PatchTransactionResponse extends AddNewTransactionResponse {}

export interface Transaction {
  id: number;
  userId?: string;
  description: string;
  amount: number;
  date: string;
  category: string;
  status: "debito" | "credito";
  paymentMethod: string;
}

export async function fetchAllTransactions(): Promise<Transaction[]> {
  try {
    const response = await get<TransactionResponse>("/transactions");

    return response?.transactions || [];
  } catch {
    return [];
  }
}

export async function addNewTransaction(
  data: Partial<Transaction>,
): Promise<AddNewTransactionResponse> {
  try {
    const response = await post<AddNewTransactionResponse>(
      "/transactions",
      data,
    );

    return response;
  } catch {
    return {
      message: "Error",
      statusCode: 500,
    };
  }
}

export async function updateTransactionService(data: Partial<Transaction>) {
  try {
    if (!data.id)
      return {
        message: "ID must be provided",
        statusCode: 400,
      };

    const response = await patch<PatchTransactionResponse>(
      `/transactions/${data.id}`,
      data,
    );

    return response;
  } catch {
    return {
      message: "Error",
      statusCode: 500,
    };
  }
}
