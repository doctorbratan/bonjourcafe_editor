import { NgModule , LOCALE_ID} from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './classes/token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { LoginPageComponent } from './login-page/login-page.component';
import { WorkLayoutComponent } from './work-layout/work-layout.component';

import { CategoryPageComponent } from './category-page/category-page.component';
import { PositionPageComponent } from './position-page/position-page.component';
import { CategoryEditComponent } from './category-page/category-edit/category-edit.component';
import { PositionEditComponent } from './position-page/position-edit/position-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { TelegramPageComponent } from './telegram-page/telegram-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    WorkLayoutComponent,
    CategoryPageComponent,
    PositionPageComponent,
    CategoryEditComponent,
    PositionEditComponent,
    ChartPageComponent,
    TelegramPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,


  ],
  providers: [
    DatePipe,
    { 
      provide: LOCALE_ID, 
      useValue: 'ru' 
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
