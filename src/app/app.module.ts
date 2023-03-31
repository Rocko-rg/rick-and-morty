import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CharactersComponent } from './characters/characters.component';
import { CardCharactersComponent } from './card-characters/card-characters.component';
import { FormsModule } from '@angular/forms';
import { AltersComponent } from './characteralters/alters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HomeComponent } from './home/home.component';
import { CardAltersComponent } from './card-alters/card-alters.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CardEpisodesComponent } from './card-episodes/card-episodes.component';
import { EpisodecharactersComponent } from './episodecharacters/episodecharacters.component';
import { LocationsComponent } from './locations/locations.component';
import { CardLocationsComponent } from './card-locations/card-locations.component';
import { LocationresidentsComponent } from './locationresidents/locationresidents.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    CharactersComponent,
    CardCharactersComponent,
    AltersComponent,
    EpisodesComponent,
    HomeComponent,
    CardAltersComponent,
    PaginationComponent,
    CardEpisodesComponent,
    EpisodecharactersComponent,
    LocationsComponent,
    CardLocationsComponent,
    LocationresidentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
