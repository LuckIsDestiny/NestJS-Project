import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "userinfo" })
export class Userinfo {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    age: number;
    @Column()
    address: string;
    @Column({ unique: true })
    email: string;
}
