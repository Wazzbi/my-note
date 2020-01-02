import { Note } from "./note";
import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes = [
      { id: 1, data: "Dummy number 1" },
      { id: 2, data: "Dummy number 2" }
    ];
    return { notes };
  }

  genId(notes: Note[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1;
  }
}
