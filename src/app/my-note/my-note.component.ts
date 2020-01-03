import { element } from "protractor";
import { MyServiceService } from "./../my-service.service";
import { Note } from "./../note";
import { Component, OnInit } from "@angular/core";
import { not } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-my-note",
  templateUrl: "./my-note.component.html",
  styleUrls: ["./my-note.component.css"]
})
export class MyNoteComponent implements OnInit {
  note: Note;
  notes: Note[];
  textToShow: string;

  constructor(private myServiceService: MyServiceService) {}

  ngOnInit() {
    this.getNotes();
  }

  saveText(text: string): void {
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

  showText(id: number): void {
    this.textToShow = this.notes[id - 1].data;
    let ta = <HTMLTextAreaElement>document.getElementById("input");
    ta.value = this.textToShow;
  }

  deleteNote(note: Note): void {
    this.notes = this.notes.filter(n => n !== note);
    this.myServiceService.deleteNote(note).subscribe();
  }
}
