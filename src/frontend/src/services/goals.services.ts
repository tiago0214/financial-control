import { get, patch, post } from "../api/api";

interface GoalsResponse {
  goals: Goal[];
}

interface AddNewGoalResponse {
  message: string;
  statusCode: number;
}

interface PatchGoalsResponse extends AddNewGoalResponse {}

export interface Goal {
  id: number;
  userId: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  iconString: string;
  aiInsight?: string;
}

export async function fetchAllGoals(): Promise<Goal[]> {
  try {
    const response = await get<GoalsResponse>("/goals");

    return response?.goals || [];
  } catch {
    return [];
  }
}

export async function addGoal(
  data: Partial<Goal>,
): Promise<AddNewGoalResponse> {
  try {
    const response = await post<AddNewGoalResponse>("/goals", data);

    return response;
  } catch {
    return {
      message: "Error",
      statusCode: 500,
    };
  }
}

export async function updateGoal(data: Partial<Goal>) {
  try {
    if (!data.id)
      return {
        message: "ID must be provided",
        statusCode: 400,
      };

    const response = await patch<PatchGoalsResponse>(`/goals/${data.id}`, data);

    return response;
  } catch {
    return {
      message: "Error",
      statusCode: 500,
    };
  }
}
