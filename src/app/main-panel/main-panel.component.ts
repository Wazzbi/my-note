import { SavedFilesComponent } from "./../saved-files/saved-files.component";
import { element } from "protractor";
import { MyServiceService } from "./../my-service.service";
import { HomeComponent } from "./../home/home.component";
import { Note } from "./../note";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-panel",
  templateUrl: "./main-panel.component.html",
  styleUrls: ["./main-panel.component.css"]
})
export class MainPanelComponent implements OnInit {
  note: Note;
  savedFiles: SavedFilesComponent;
  input: HomeComponent;

  constructor(private myServiceService: MyServiceService) {}

  ngOnInit() {}

  saveText(): void {
    let za = <HTMLTextAreaElement>document.getElementById("input");
    this.note = new Note();
    this.note.data = za.value;
    this.note.id = 999;
    console.log(
      `poznamka s id=${this.note.id} obsahuje data=${this.note.data}`
    );
    this.myServiceService.addNote(this.note).subscribe(note => {
      this.savedFiles.notes.push(note);
    });
    this.clear();
  }

  clear(): void {
    let ta = <HTMLTextAreaElement>document.getElementById("input");
    ta.value = "";
  }
}
