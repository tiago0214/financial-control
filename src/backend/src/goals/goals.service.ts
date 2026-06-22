import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { LoggedUser } from 'src/auth/types/types';
import { DbService } from 'src/db/db.service';
import { goal } from 'src/db/schemas';
import { and, eq } from 'drizzle-orm';

@Injectable()
export class GoalsService {
  constructor(private readonly dbService: DbService) {}

  async create(loggedUser: LoggedUser, createGoalDto: CreateGoalDto) {
    const { currentAmount, iconString, targetAmount, targetDate, title } =
      createGoalDto;

    const db = this.dbService.getSession();
    const userId = loggedUser.sub;
    const insertedGoal = await db
      .insert(goal)
      .values({
        userId,
        title,
        targetAmount: Number(targetAmount),
        currentAmount: Number(currentAmount),
        targetDate,
        iconString,
      })
      .returning();

    if (insertedGoal) {
      return {
        message: 'Goal inserted sucefully!',
        statusCode: 201,
      };
    }

    return {
      message: 'Something went wrong!',
      statusCode: 500,
    };
  }

  async findAll(loggedUser: LoggedUser) {
    const userId = loggedUser.sub;
    const db = this.dbService.getSession();

    const goals = await db.select().from(goal).where(eq(goal.userId, userId));

    if (goals.length > 0) {
      return {
        goals,
      };
    }

    return {
      goals: [],
    };
  }

  async findOne(loggedUser: LoggedUser, id: number) {
    const userId = loggedUser.sub;
    const db = this.dbService.getSession();

    const foundGoal = await db
      .select()
      .from(goal)
      .where(and(eq(goal.id, id), eq(goal.userId, userId)));

    if (foundGoal.length > 0) {
      return {
        goals: foundGoal[0],
      };
    }

    return {
      goals: {},
    };
  }

  async update(
    loggedUser: LoggedUser,
    id: number,
    updateGoalDto: UpdateGoalDto,
  ) {
    const userId = loggedUser.sub;
    const db = this.dbService.getSession();

    const { currentAmount, iconString, targetAmount, targetDate, title } =
      updateGoalDto;

    const checkItens = Object.keys(updateGoalDto);

    if (checkItens.length === 0) throw new BadRequestException();

    await db
      .update(goal)
      .set({
        currentAmount: Number(currentAmount),
        iconString,
        targetAmount: Number(targetAmount),
        targetDate,
        title,
      })
      .where(and(eq(goal.id, id), eq(goal.userId, userId)));

    return {
      message: `Goal updated sucefully!`,
      statusCode: 200,
    };
  }

  async remove(loggedUser: LoggedUser, id: number) {
    const userId = loggedUser.sub;
    const db = this.dbService.getSession();

    await db.delete(goal).where(and(eq(goal.id, id), eq(goal.userId, userId)));

    return {
      message: 'Goal deleted sucefully!',
      statusCode: 200,
    };
  }
}
