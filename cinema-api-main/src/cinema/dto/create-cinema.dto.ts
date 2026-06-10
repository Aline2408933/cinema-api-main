import { ApiProperty } from '@nestjs/swagger';

export class CreateCinemaDto {
  @ApiProperty({ example: 'Cinemark Shopping' })
  nome!: string;

  @ApiProperty({ example: 'Rua das Flores, 123' })
  endereco!: string;
}