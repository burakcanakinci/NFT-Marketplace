import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { EmptyComponent } from './Components/empty/empty.component';
import { ButtonComponent } from './Components/button/button.component';
import { HeroComponent } from './Components/hero/hero.component';
import { NftCardComponent } from './Components/nft-card/nft-card.component';
import { TopRatedArtistsComponent } from './Components/top-rated-artists/top-rated-artists.component';
import { HomeComponent } from './Pages/home/home.component';
import { CreateAccountComponent } from './Pages/create-account/create-account.component';
import { ArtistPageComponent } from './Pages/artist-page/artist-page.component';
import { ArtistPageCreateComponent } from './Components/artist-page-create/artist-page-create.component';
import { FormsComponent } from './Pages/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrendingCollectionComponent } from './Components/trending-collection/trending-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { RankingsComponent } from './Pages/rankings/rankings.component';
import { ReversePipe } from './Pages/rankings/rankings.component';
import { HighlightDirective } from './Pages/rankings/rankings.component';
import { HexToRgbPipe } from './Pages/rankings/rankings.component';
import { BrowseCategoriesComponent } from './Components/browse-categories/browse-categories.component';
import { NgChartsModule } from 'ng2-charts';
import { MyChartComponent } from './Components/my-chart/my-chart.component';
import { ConnectAWalletComponent } from './Pages/connect-a-wallet/connect-a-wallet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DiscoverNftsComponent } from './Components/discover-nfts/discover-nfts.component';
import { NftInfoComponent } from './Components/nft-info/nft-info.component';
import { ModalDiagramComponent } from './Components/modal-diagram/modal-diagram.component';
import { ModalComponent } from './Components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmptyComponent,
    ButtonComponent,
    HeroComponent,
    NftCardComponent,
    TopRatedArtistsComponent,
    HomeComponent,
    CreateAccountComponent,
    ArtistPageComponent,
    ArtistPageCreateComponent,
    FormsComponent,
    TrendingCollectionComponent,
    RankingsComponent,
    ReversePipe,
    HighlightDirective,
    HexToRgbPipe,
    BrowseCategoriesComponent,
    MyChartComponent,
    ConnectAWalletComponent,
    DiscoverNftsComponent,
    NftInfoComponent,
    ModalDiagramComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
