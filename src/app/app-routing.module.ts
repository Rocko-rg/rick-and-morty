import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltersComponent } from './characteralters/alters.component';
import { CharactersComponent } from './characters/characters.component';
import { EpisodecharactersComponent } from './episodecharacters/episodecharacters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HomeComponent } from './home/home.component';
import { LocationresidentsComponent } from './locationresidents/locationresidents.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"characters", component:CharactersComponent},
  {path:"alters", component:AltersComponent},
  {path:"episodes", component:EpisodesComponent},
  {path:"episodecharacters", component:EpisodecharactersComponent},
  {path:"locations", component:LocationsComponent},
  {path:"locationresidents", component:LocationresidentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
