import type { DeepPartial, ObjectLiteral, Repository } from "typeorm";

export class BaseRepository<T extends ObjectLiteral> {
  constructor(protected readonly repository: Repository<T>) {}

  create = async (data: DeepPartial<T>): Promise<T> => {
    console.log("Data: ", data);
    const entity = this.repository.create(data);
    console.log("Entity: ", entity);
    return this.repository.save(entity);
  };

  findAll = async (): Promise<T[]> => {
    return this.repository.find();
  };

  findById = async (id: string): Promise<T | null> => {
    return this.repository.findOneBy({ id } as any);
  };
}
