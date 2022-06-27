import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Repo {
    @PrimaryColumn()
    id: string;

    @Column()
    username:string;

    @Column()
    repo_name: string;

    // @Column()
    // contributors: number;
}