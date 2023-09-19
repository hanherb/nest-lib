import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('master_brand')
export class Brand {
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
  brand_origin: string;

  @Column({
    type: 'text'
  })
  type: string;

  @Column({
    type: 'text'
  })
  brand_segmentation: string;

  @Column({
    type: 'text'
  })
  brand_tagging: string;

  @Column({
    type: 'text'
  })
  description: string;

  @Column()
  related_product: number;

  @Column()
  related_service: number;

  @Column()
  logo: string;

  @Column({
    type: 'uuid'
  })
  parent_id: string;
  
  @Column()
  code: string;


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
}