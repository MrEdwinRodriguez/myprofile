import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfilebarComponent } from './profilebar/profilebar.component';
import { ProfilesummaryComponent } from './profilesummary/profilesummary.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { IntroComponent } from './profilesummary/intro/intro.component';
import { SkillsComponent } from './profilesummary/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilebarComponent,
    ProfilesummaryComponent,
    IntroComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
