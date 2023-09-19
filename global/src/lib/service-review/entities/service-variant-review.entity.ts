import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('service_variant_review')
export class ServiceVariantReview {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  service_variant_id: string;

  @Column()
  treatment_category: string;

  @Column()
  treatment_name: string;

  @Column()
  professional_name: string
  
  @Column()
  max_price: number;

  @Column()
  min_price: number;;

  @Column({
    type: 'decimal'
  })
  rating_overall: number;

  @Column({
    type: 'decimal'
  })
  rating_quality: number;

  @Column({
    type: 'decimal'
  })
  rating_cleanliness: number;

  @Column({
    type: 'decimal'
  })
  rating_hospitality: number;

  @Column({
    type: 'decimal'
  })
  rating_facility: number;

  @Column()
  visit_frequency: string;

  @Column()
  last_visit: string;

  @Column()
  is_recommended: boolean;

  @Column()
  review : string;

  @Column({
    type: 'text'
  })
  images: string;

  @Column()
  total_like: number;

  @Column()
  usrapo_id: number;


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
  // @ManyToOne(() => ServiceVariant, (serviceVariant) => serviceVariant.reviews)
  // @JoinColumn({ name: "service_variant_id", referencedColumnName: "id" })
  // serviceVariant: ServiceVariant
}