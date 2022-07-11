

    import {
        Column,
        CreateDateColumn,
        DeleteDateColumn,
        Entity,
        PrimaryGeneratedColumn,
        UpdateDateColumn,
      } from 'typeorm';

    @Entity({ name: 'Users' })
    export class Users {
        
                @Column({
                    type: 'a',
                    nullable: false,
                    name: 'User'
                })
                User: number
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'Role'
                })
                Role: number
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'Name'
                })
                Name: string
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'CPF'
                })
                CPF: string
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'RG'
                })
                RG: string
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'UFRG'
                })
                UFRG: string
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'Brithday'
                })
                Brithday: Date
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'Street'
                })
                Street: string
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'Address'
                })
                Address: string
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'Number'
                })
                Number: string
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'Complement'
                })
                Complement: string
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'District'
                })
                District: string
                
                @Column({
                    type: 'a',
                    nullable: false,
                    name: 'City_Id'
                })
                City_Id: number
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'UF'
                })
                UF: string
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'Cep'
                })
                Cep: string
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'Phone'
                })
                Phone: string
                
                @Column({
                    type: 'a',
                    nullable: true,
                    name: 'Income'
                })
                Income: number
                
    }
    