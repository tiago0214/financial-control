import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbService } from 'src/db/db.service';
import * as bcrypt from 'bcrypt';
import { user } from 'src/db/schemas';
import { eq } from 'drizzle-orm';
import { SelectUser } from 'src/db/schemas/user';

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DbService) {}

  async create(createUserDto: CreateUserDto) {
    const db = this.dbService.getSession();
    const { password, email, name } = createUserDto;

    const rounds = 10;
    const hashedPassword = await bcrypt.hash(password!, rounds);

    try {
      const insertedUser = await db
        .insert(user)
        .values({
          name,
          email,
          password: hashedPassword,
        })
        .returning();

      if (insertedUser) {
        return true;
      }
    } catch {
      return false;
      // if (error instanceof DrizzleQueryError) {
      //   if (error.cause instanceof DatabaseError) {
      //     if (error.cause.code === '23505') {
      //       return {
      //         message: error.cause.detail,
      //         error: 'Database constrait violation!',
      //         statusCode: 409,
      //       };
      //     }
      //   }
      // }
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(email: string): Promise<SelectUser> {
    const db = this.dbService.getSession();
    const foundUser = await db.select().from(user).where(eq(user.email, email));

    return foundUser[0];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
