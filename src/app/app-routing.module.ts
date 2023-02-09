import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistPageComponent } from './Pages/artist-page/artist-page.component';
import { CreateAccountComponent } from './Pages/create-account/create-account.component';
import { FormsComponent } from './Pages/forms/forms.component';
import { HomeComponent } from './Pages/home/home.component';
import { RankingsComponent } from './Pages/rankings/rankings.component';
import { ConnectAWalletComponent } from './Pages/connect-a-wallet/connect-a-wallet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artist-page', component: ArtistPageComponent },
  { path: 'create-account-page', component: CreateAccountComponent },
  { path: 'forms-page', component: FormsComponent },
  { path: 'rankings-page', component: RankingsComponent },
  { path: 'wallet-page', component: ConnectAWalletComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
