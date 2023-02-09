import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { IMovie, IMovies, IPeople, IPerson, IResponseData } from 'src/app/interfaces/category.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  theButton: string = 'button__secondary--filled'
  dataPeople: IPerson[] = [];
  dataMovies: IMovie[] = [];
  loading: boolean = false;
  name: string = '';
  job: string = '';
  responseData: any = {};
  constructor(private route: Router, private http: HttpClient) {
    
  }
  ngOnInit() {

  }
  makePostRequest(name: string, job: string) {
    this.loading = true;
    const data = {
      name: name,
      job: job
    };
    this.http.post<IResponseData>('https://reqres.in/api/users', data).subscribe(
      (response) => {
        this.responseData = response;
        console.log(response);
        this.loading = false;
      }
    );
  }
  fetchPeople() {
    this.loading = true;
    let people: Observable<IPeople> = this.http.get<IPeople>(`https://swapi.dev/api/people`);
    people.subscribe((data: IPeople) => {
      this.dataPeople = data.results;
      this.loading = false;
    });
  }
  fetchMovies() {
    this.loading = true;
    let movies: Observable<IMovies> = this.http.get<IMovies>(`https://swapi.dev/api/films`);
    movies.subscribe((data: IMovies) => {
      this.dataMovies = data.results;
      this.loading = false;
    });
  }
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  get nameForm() { return this.form.get('name'); }
  get emailForm() { return this.form.get('email'); }
  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
  // title = 'Ng To Do';
  // userInput: string | undefined;
  // dateInput: string | undefined;
  // todoList: { id: number; title: string; date?: string }[] = [
  //   { id: 1, title: 'Study Angular' },
  //   { id: 2, title: 'Add one element' },
  //   { id: 3, title: 'Correct typo' },
  //   { id: 4, title: 'Add dates', date: '2022-09-10' },
  // ];
  // onSubmit(form: NgForm) {
  //   this.todoList = this.todoList.concat({
  //     id: Math.random(),
  //     title: form.form.value.userInput,
  //     date: form.form.value.date,
  //   });
  //   console.log('Submitted', form);
  // }

  // onDelete(id: number) {
  //   this.todoList = this.todoList.filter((item) => item.id !== id);
  // }

  // onRequest() {
    
    
  // }
}
