import { Injectable } from '@nestjs/common';
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
    const userId = Number(loggedUser.sub);
    const insertedGoal = await db
      .insert(goal)
      .values({
        userId,
        title,
        targetAmount: String(targetAmount),
        currentAmount: String(currentAmount),
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
      stastatusCodetus: 500,
    };
  }

  async findAll(loggedUser: LoggedUser) {
    const userId = Number(loggedUser.sub);
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
    const userId = Number(loggedUser.sub);
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

  update(id: number, updateGoalDto: UpdateGoalDto) {
    return `This action updates a #${id} goal`;
  }

  remove(id: number) {
    return `This action removes a #${id} goal`;
  }
}
