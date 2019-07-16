import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(public snackBar: MatSnackBar) {}

    showSuccess(message: string) {
            this.snackBar.open(message);
    }


    showError(message: string): void {
        // the second parameter is the text in the button
        // In the third, we send css class for the snackbar
        this.snackBar.open(message, 'X', { panelClass: 'error'});
    }
}