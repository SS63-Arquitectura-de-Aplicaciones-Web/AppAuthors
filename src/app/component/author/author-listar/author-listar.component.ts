import { Component } from '@angular/core';
import { AuthorService } from '../../../service/author.service';
import { Author } from '../../../model/author';

@Component({
  selector: 'app-author-listar',
  templateUrl: './author-listar.component.html',
  styleUrl: './author-listar.component.scss',
})
export class AuthorListarComponent {
  displayedColumns: string[] = [
    'id',
    'nameAuthor',
    'emailAuthor',
    'birthDateAuthor',
  ];
  dataSource: Author[] = [];

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.authorService.list().subscribe((data) => (this.dataSource = [...data]));
  }
}
