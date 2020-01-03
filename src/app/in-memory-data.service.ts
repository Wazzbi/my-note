import { Note } from "./note";
import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes = [
      { id: 1, data: "Dummy number 111111111111111111111111111111111" },
      { id: 2, data: "Dummy number 2" },
      { id: 3, data: "Dummy number 3" },
      { id: 4, data: "Dummy number 4" },
      { id: 5, data: "Dummy number 1" },
      { id: 6, data: "Dummy number 2" },
      { id: 7, data: "Dummy number 3" },
      { id: 8, data: "Dummy number 4" },
      { id: 9, data: "Dummy number 4" },
      { id: 10, data: "Dummy number 1" },
      { id: 11, data: "Dummy number 2" },
      { id: 12, data: "Dummy number 3" },
      { id: 13, data: "Dummy number 4" }
    ];
    return { notes };
  }

  genId(notes: Note[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1;
  }
}
