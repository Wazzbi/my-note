import { element } from "protractor";
import { Component, OnInit } from "@angular/core";
import { Note } from "../note";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getInput(): Note {
    var value = (<HTMLTextAreaElement>document.getElementById("input")).value;
    var input = new Note();
    input.data = value;
    return input;
  }
}
