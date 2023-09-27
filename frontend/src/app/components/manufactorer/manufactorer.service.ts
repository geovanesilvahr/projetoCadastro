import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Manufactorer } from './manufactorer.model';

@Injectable({
  providedIn: 'root'
})
export class ManufactorerService {

  baseUrl = "http://localhost:3001/manufactors"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(manufac: Manufactorer): Observable<Manufactorer> {
    return this.http.post<Manufactorer>(this.baseUrl, manufac).pipe(
      map(obj=> obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um Erro!', true)
    return EMPTY
  }

  read(): Observable<Manufactorer[]> {
    return this.http.get<Manufactorer[]>(this.baseUrl).pipe(
      map(obj=> obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Manufactorer> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Manufactorer>(url).pipe(
      map(obj=> obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(manufac: Manufactorer): Observable<Manufactorer> {
    const url = `${this.baseUrl}/${manufac.id}`;
    return this.http.put<Manufactorer>(url, manufac).pipe(
      map(obj=> obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Manufactorer> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Manufactorer>(url).pipe(
      map(obj=> obj),
      catchError(e => this.errorHandler(e))
    );
  }
}
