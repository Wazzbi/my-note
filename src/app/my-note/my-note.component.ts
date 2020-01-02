import { element } from "protractor";
import { SavedFilesComponent } from "./../saved-files/saved-files.component";
import { MyServiceService } from "./../my-service.service";
import { HomeComponent } from "./../home/home.component";
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
    this.note.id = 999;
    console.log(
      `poznamka s id=${this.note.id} obsahuje data=${this.note.data}`
    );
    this.myServiceService.addNote(this.note).subscribe(note => {
      this.notes.push(note);
    });
  }

  getNotes(): void {
    this.myServiceService.getNotes().subscribe(notes => (this.notes = notes));
  }
}
