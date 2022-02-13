import { ApiProperty } from "@nestjs/swagger";

export class ProductDto {
    title: string;
    productId: number;
    counter: number;
    shelving: string;
    shelf: string;
}