import { NumberSymbol } from '@angular/common';

export class Course {// Deixando a classe pública para outros arquivos fazerem referência a ela
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    code: string;
    duration: number;
    rating: number;
    releaseDate: string;
    description: string;
}