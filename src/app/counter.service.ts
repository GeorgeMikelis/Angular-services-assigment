import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    numberOfStatusChanges: number = 0;

    counter() {
        console.log(this.numberOfStatusChanges++);
    }

}