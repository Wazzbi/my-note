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

  saveText(): void {
    this.note = new Note();
    let ta = document.getElementById("input").innerHTML;
    this.note.data = ta;
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
    let ta = document.getElementById("input");
    ta.innerHTML = this.textToShow;
  }

  deleteNote(note: Note): void {
    this.notes = this.notes.filter(n => n !== note);
    this.myServiceService.deleteNote(note).subscribe();
  }

  toBold(): void {
    let sel = window.getSelection(); // Gets selection
    if (sel.rangeCount) {
      // Creates a new element, and insert the selected text with the chosen style
      let e = document.createElement("span");
      e.style.fontWeight = "bold";
      //e.classList.add("span-b"); --> nefunguje // Selected style (class)
      e.innerHTML = sel.toString(); // Selected text

      // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
      let range = sel.getRangeAt(0);
      range.deleteContents(); // Deletes selected text…
      range.insertNode(e); // … and inserts the new element at its place
    }
  }

  toUnder(): void {
    let sel = window.getSelection(); // Gets selection
    if (sel.rangeCount) {
      // Creates a new element, and insert the selected text with the chosen style
      let e = document.createElement("span");
      e.style.textDecoration = "underline";
      //e.classList.add("span-b"); --> nefunguje // Selected style (class)
      e.innerHTML = sel.toString(); // Selected text

      // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
      let range = sel.getRangeAt(0);
      range.deleteContents(); // Deletes selected text…
      range.insertNode(e); // … and inserts the new element at its place
    }
  }

  toItalic(): void {
    let sel = window.getSelection(); // Gets selection
    if (sel.rangeCount) {
      // Creates a new element, and insert the selected text with the chosen style
      let e = document.createElement("span");
      e.style.fontStyle = "Italic";
      //e.classList.add("span-b"); --> nefunguje // Selected style (class)
      e.innerHTML = sel.toString(); // Selected text

      // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
      let range = sel.getRangeAt(0);
      range.deleteContents(); // Deletes selected text…
      range.insertNode(e); // … and inserts the new element at its place
    }
  }

  toNormal(): void {
    let sel = window.getSelection(); // Gets selection
    if (sel.rangeCount) {
      // Creates a new element, and insert the selected text with the chosen style
      let e = document.createElement("span");
      e.style.fontWeight = "normal";
      //e.classList.add("span-b"); --> nefunguje // Selected style (class)
      e.innerHTML = sel.toString(); // Selected text

      // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
      let range = sel.getRangeAt(0);
      range.deleteContents(); // Deletes selected text…
      range.insertNode(e); // … and inserts the new element at its place
    }
  }
}
