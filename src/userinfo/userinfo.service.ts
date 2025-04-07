import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserinfoDto } from './dto/create-userinfo.dto';
import { UpdateUserinfoDto } from './dto/update-userinfo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Userinfo } from './entities/userinfo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserinfoService {
  constructor(
    @InjectRepository(Userinfo)
    private readonly userinfoRepository: Repository<Userinfo>) { }

  async create(createUserinfoDto: CreateUserinfoDto): Promise<Userinfo> {
    const user = this.userinfoRepository.create(createUserinfoDto);
    return this.userinfoRepository.save(user);
  }

  async findAll(): Promise<Userinfo[]> {
    return this.userinfoRepository.find();
  }

  async findOne(id: number): Promise<Userinfo> {
    const user = await this.userinfoRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserinfoDto: UpdateUserinfoDto): Promise<Userinfo> {
    const user = await this.userinfoRepository.preload({
      id,
      ...updateUserinfoDto
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return this.userinfoRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const result = await this.userinfoRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
