import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { MobileFooterComponent } from './mobile/mobile-footer/mobile-footer.component';
import { MobileHeaderComponent } from './mobile/mobile-header/mobile-header.component';
import { StoneResultComponent } from './main/stone/stone-result/stone-result.component';
import { StoneFilterItemComponent } from './main/stone/stone-result/stone-filter-item/stone-filter-item.component';
import { ClickOutsideDirective } from './main/directive/click-outside.directive';
import { StoneFilterService } from './main/services/stone/filter/stone-filter.service';
import { StoneResultService } from './main/services/stone/result/stone-result.service';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './main/services/alert/alert.component';
import { StoneListItemComponent } from './desktop/stone/stone-result/stone-list-item/stone-list-item.component';
import { StoneGridItemComponent } from './desktop/stone/stone-result/stone-grid-item/stone-grid-item.component';
import { HttpClientModule } from '@angular/common/http'; 
import { LoadingSpinnerComponent } from './main/services/loading-spinner/loading-spinner.component';
import { CheckScreenType } from './main/services/check-screen-type.service';
import { StoneResultDComponent } from './desktop/stone/stone-result/stone-result-d/stone-result-d.component';
import { StoneResultMComponent } from './mobile/stone/stone-result/stone-result-m/stone-result-m.component';
import { StoneFilterItemMComponent } from './mobile/stone/stone-result/stone-filter-item-m/stone-filter-item-m.component';
import { StoneResultItemComponent } from './mobile/stone/stone-result/stone-result-item/stone-result-item.component';
import { DesktopHeaderComponent } from './desktop/desktop-header/desktop-header.component';
import { DesktopFooterComponent } from './desktop/desktop-footer/desktop-footer.component';
import { StoneFilterItemDComponent } from './desktop/stone/stone-result/stone-filter-item/stone-filter-item-d.component';
import { SearchModel } from './main/services/search.model';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MobileFooterComponent,
    MobileHeaderComponent,
    StoneResultComponent,
    StoneFilterItemComponent,
    ClickOutsideDirective,
    AlertComponent,
    StoneListItemComponent,
    LoadingSpinnerComponent,
    StoneGridItemComponent,
    StoneResultDComponent,
    
    StoneResultMComponent,
    
    StoneFilterItemMComponent,
    
    StoneResultItemComponent,

    DesktopHeaderComponent,

    DesktopFooterComponent,
     StoneFilterItemDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [StoneFilterService, StoneResultService, CheckScreenType, SearchModel],
  bootstrap: [AppComponent]

})
export class AppModule { }
