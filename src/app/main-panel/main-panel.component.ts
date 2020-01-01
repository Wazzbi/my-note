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
  notes: Note[];
  input: HomeComponent;

  constructor(private myServiceService: MyServiceService) {}

  ngOnInit() {}

  saveText(): void {
    let za = <HTMLTextAreaElement>document.getElementById("input");
    let note = new Note();
    note.data = za.value;
    this.myServiceService.addNote(note).subscribe(note => {
      this.notes.push(note);
    });
    this.clear();
  }

  clear(): void {
    let ta = <HTMLTextAreaElement>document.getElementById("input");
    ta.value = "";
  }
}
