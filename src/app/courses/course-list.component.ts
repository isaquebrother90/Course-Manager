import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({//Necessário para Angular reconhecer como legível
    selector: 'app-course-list', // Vira uma tag
    templateUrl: './course-list.component.html' //Pode ser estático ou não
})
export class CourseListComponent implements OnInit {// Deixando a classe pública para outros arquivos fazerem referência a ela
    
    courses: Course[] = [];
    
    ngOnInit(): void { // Hook, método chamado na inicialização do components. Estão relacionados com o ciclo de vida do component
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 4, 2019'
            }
        ]
    }

}  
