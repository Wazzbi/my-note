import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MainPanelComponent } from "./main-panel/main-panel.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, MainPanelComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
