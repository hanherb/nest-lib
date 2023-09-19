import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity('master_category')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    default: true
  })
  status: boolean;

  @Column()
  slug: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  related_product: number;

  @Column()
  related_service: number;

  @Column()
  parent_id: string;
  
  @Column()
  icon: string;

  @Column()
  created_by: string
  
  @Column()
  updated_by: string

  @Column()
  deleted_by: string

  @Column({
    default: new Date()
  })
  created_at: Date
  
  @Column({
    default: new Date()
  })
  updated_at: Date

  @Column()
  deleted_at: Date

  // Relations
  @OneToMany(() => Category, (category) => category.parent)
  children: Category[]

  @ManyToOne(() => Category, (category) => category.children)
  @JoinColumn({ name: "parent_id", referencedColumnName: "id" })
  parent: Category
}