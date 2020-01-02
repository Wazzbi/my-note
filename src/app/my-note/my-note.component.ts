import { element } from "protractor";
import { MyServiceService } from "./../my-service.service";
import { Note } from "./../note";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-note",
  templateUrl: "./my-note.component.html",
  styleUrls: ["./my-note.component.css"]
})
export class MyNoteComponent implements OnInit {
  note: Note;
  notes: Note[];

  constructor(private myServiceService: MyServiceService) {}

  ngOnInit() {
    this.getNotes();
  }

  saveText(text: String): void {
    this.note = new Note();
    this.note.data = text;
    console.log(`poznamka obsahuje data=${this.note.data}`);
    this.myServiceService.addNote(this.note).subscribe(note => {
      this.notes.push(note);
    });
  }

  getNotes(): void {
    this.myServiceService.getNotes().subscribe(notes => (this.notes = notes));
  }

  //TODO dolělat aby se text vracel do textarea asi přes servisku
  //vytvořit objekt a ten načíst
  //rozdělaný my-note.html row 23
  showText(id: number): void {}
}
