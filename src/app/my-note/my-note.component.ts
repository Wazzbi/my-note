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

  changeStyle(style: any): void {
    var sel = window.getSelection(); // Gets selection
    if (sel.rangeCount) {
      // Creates a new element, and insert the selected text with the chosen style
      var e = document.createElement("span");
      e.classList.add(style.value); // Selected style (class)
      e.innerHTML = sel.toString(); // Selected text

      // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
      var range = sel.getRangeAt(0);
      range.deleteContents(); // Deletes selected text…
      range.insertNode(e); // … and inserts the new element at its place
    }
  }
}
