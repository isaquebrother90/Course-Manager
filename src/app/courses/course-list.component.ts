import { Component, ConstructorSansProvider, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({//Necessário para Angular reconhecer como legível
    selector: 'app-course-list', // Vira uma tag
    templateUrl: './course-list.component.html' //Pode ser estático ou não
})
export class CourseListComponent implements OnInit {// Deixando a classe pública para outros arquivos fazerem referência a ela
    
    courses: Course[] = [];

    constructor(private CourseService: CourseService) {}
    
    ngOnInit(): void { // Hook, método chamado na inicialização do components. Estão relacionados com o ciclo de vida do component
        this.courses = this.CourseService.retrieveAll();
    }

}  
