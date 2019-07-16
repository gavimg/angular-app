import { Injectable } from "@angular/core";
import { SlackService } from './slack.service';



@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    constructor(private slackService: SlackService) {}
    logError(message: string, stack: string) {
        // Send error to be saved here
        this.slackService.postErrorOnSlack(new Error(message));
        console.log('LoggerService ' + message);
    }
}