import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_user')
export default class User {
  @PrimaryGeneratedColumn('increment', { name: 'id_user' })
  id: number;

  @Column({ name: 'tx_name' })
  name: string;
}
