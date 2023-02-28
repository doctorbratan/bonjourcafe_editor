import { Component, OnInit } from '@angular/core';
import { TelegramService } from '../services/telegram.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-telegram-page',
  templateUrl: './telegram-page.component.html',
  styleUrls: ['./telegram-page.component.css']
})
export class TelegramPageComponent implements OnInit {

  oclocks = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]

  pennding: boolean = false
  loading: boolean = false

  telegram_code: string | undefined
  shift: string | undefined
  shiftChange: string | undefined
  telegrams: any[] | undefined

  constructor(
    private telegramService: TelegramService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getTelegramCode()
    this.getTelegrams()
    this.getShift()
    this.getShiftChange()
  }



  getTelegrams() {
    this.loading = true

    this.telegramService.getTelegrams().subscribe(
      data => {
        this.telegrams = data
        this.loading = false
      },
      error => {
        this._snackBar.open(
          error.error.message ? error.error.message : "Ошибка", "Ок",
          { duration: 3000, horizontalPosition: "right" })
      }
    )
  }

  deleteTelegram(_id: string) {
    this.loading = true

    this.telegramService.deleteTelegram(_id).subscribe(
      data => {
        this._snackBar.open(
          data, "Ок",
          { duration: 3000, horizontalPosition: "right" })
        this.getTelegrams()
      },
      error => {
        this._snackBar.open(
          error.error.message ? error.error.message : "Ошибка", "Ок",
          { duration: 3000, horizontalPosition: "right" })
      }
    )
  }

  OnStatusChange(telegram: any) {
    this.pennding = true

    const data = {
      status: telegram.status
    }

    this.telegramService.pathTelegram(telegram._id, data).subscribe(
      data => {
        this.pennding = false
        this.getTelegrams();
      },
      error => {
        this._snackBar.open(
          error.error.message ? error.error.message : "Ошибка", "Ок",
          { duration: 3000, horizontalPosition: "right" })
      }
    )
    
  }
  

  getTelegramCode() {
    this.pennding = true

    this.telegramService.get().subscribe(
      data => {
        this.telegram_code = data
        this.pennding = false
      },
      error => {
        this._snackBar.open(
          error.error.message ? error.error.message : "Ошибка", "Ок",
          { duration: 3000, horizontalPosition: "right" })
      }
    )
  }

  patchTelegramCode() {
    this.pennding = true

    this.telegramService.patch().subscribe(
      data => {
        this.telegram_code = data
        this.pennding = false
      },
      error => {
        this._snackBar.open(
          error.error.message ? error.error.message : "Ошибка", "Ок",
          { duration: 3000, horizontalPosition: "right" })
      }
    )
  }

  getShift() {
    this.pennding = true

    this.telegramService.getShift().subscribe(
      data => {
        this.shift = data
        this.pennding = false
      },
      error => {
        this._snackBar.open(
          error.error.message ? error.error.message : "Ошибка", "Ок",
          { duration: 3000, horizontalPosition: "right" })
      }
    )
  }

  patchShift() {
    this.pennding = true

    this.telegramService.updateShift().subscribe(
      data => {
        this.shift = data
        this.pennding = false
      },
      error => {
        this._snackBar.open(
          error.error.message ? error.error.message : "Ошибка", "Ок",
          { duration: 3000, horizontalPosition: "right" })
      }
    )
  }

  getShiftChange() {
    this.pennding = true

    this.telegramService.getShiftChange().subscribe(
      data => {
        this.shiftChange = data
        this.pennding = false
      },
      error => {
        this._snackBar.open(
          error.error.message ? error.error.message : "Ошибка", "Ок",
          { duration: 3000, horizontalPosition: "right" })
      }
    )
  }

  pathShiftChange() {
    this.pennding = true

    const data = {
      shiftChange: this.shiftChange
    }

    this.telegramService.updateShiftChange(data).subscribe(
      data => {
        this.shiftChange = data
        this.pennding = false

        this._snackBar.open(
          "Сохранено", "Ок",
          { duration: 3000, horizontalPosition: "right" })
      },
      error => {
        this._snackBar.open(
          error.error.message ? error.error.message : "Ошибка", "Ок",
          { duration: 3000, horizontalPosition: "right" })
      }
    )
  }



}
