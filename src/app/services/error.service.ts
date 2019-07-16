import { Injectable } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ErrorService {

    getClientMessage(error: Error) {
        if(!navigator.onLine) {
            return 'No internet connection';
        }
        return error.message ? error.message : error.toString();
    }

    getClientStack(error: Error): string {
        return error.stack;
    }

    getServerMessage(error: HttpErrorResponse): string {
        return error.message;
    }

    getServerStack(error: HttpErrorResponse): string {
        // handle stack trace
        return 'stack';
    }
}