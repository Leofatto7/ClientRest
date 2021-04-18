import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe, registerLocaleData } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import localeIt from '@angular/common/locales/it';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import {MatSelectModule} from '@angular/material/select';


import { GETrequestComponent } from './getrequest/getrequest.component';
import { POSTrequestComponent } from './postrequest/postrequest.component';
import { DELETErequestComponent } from './deleterequest/deleterequest.component';
import { PutrequestComponent } from './putrequest/putrequest.component';
import { ConstantsService } from './common/services/constants.service';

@NgModule({
  declarations: [
    AppComponent,
    GETrequestComponent,
    POSTrequestComponent,
    DELETErequestComponent,
    PutrequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    NgbModule,
    GoogleChartsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTabsModule,
    MatDividerModule,
    NgxMaterialTimepickerModule.setLocale('it'),
    MatSelectModule,
  ],
  providers: [DatePipe, ConstantsService],
  bootstrap: [AppComponent]
})

export class AppModule { }

registerLocaleData(localeIt);