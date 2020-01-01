import { Note } from "./../note";
import { MyServiceService } from "./../my-service.service";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-saved-files",
  templateUrl: "./saved-files.component.html",
  styleUrls: ["./saved-files.component.css"]
})
export class SavedFilesComponent implements OnInit {
  notes: Note[];

  constructor(private myServiceService: MyServiceService) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.myServiceService.getNotes().subscribe(notes => (this.notes = notes));
  }
}
