import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Note } from "./note";

@Injectable({
  providedIn: "root"
})
export class MyServiceService {
  constructor(private http: HttpClient) {}

  private notesUrl = "api/notes"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(
      this.notesUrl
    ) /*.pipe(
      tap(_ => this.log(`fetched heroes`)),
      catchError(this.handleError<HeroComponent[]>("getHeroes", []))
    )*/;
  }

  /** GET hero by id. Will 404 if id not found */
  getNote(id: number): Observable<Note> {
    const url = `${this.notesUrl}/${id}`;
    return this.http.get<Note>(
      url
    ) /*.pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<HeroComponent>(`getHero id=${id}`))
    )*/;
  }

  /** PUT: update the hero on the server */
  updateNote(note: Note): Observable<any> {
    return this.http.put(
      this.notesUrl,
      note,
      this.httpOptions
    ) /*.pipe(
      tap(_ => this.log(`updated hero id=${note.id}`)),
      catchError(this.handleError<any>("updateHero"))
    )*/;
  }

  /** POST: add a new hero to the server */
  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.notesUrl, note, this.httpOptions);
    /*.pipe(
        tap((newNote: Note) =>
          this.log(`added hero w/ id=${newHero.id}`)
        ),
        catchError(this.handleError<HeroComponent>("addHero"))
      )*/
  }

  /** DELETE: delete the hero from the server */
  deleteNote(note: Note | number): Observable<Note> {
    const id = typeof note === "number" ? note : note.id;
    const url = `${this.notesUrl}/${id}`;

    return this.http.delete<Note>(
      url,
      this.httpOptions
    ) /*.pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<HeroComponent>("deleteHero"))
    )*/;
  }
}
