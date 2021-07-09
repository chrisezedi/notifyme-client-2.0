import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private snackbar:MatSnackBar) {  }

  showSnackbar(msg:string){
    this.snackbar.open(msg,"DISMISS")
  }
}
