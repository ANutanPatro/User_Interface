import {Component} from '@angular/core';
@Component({
    selector: 'app-card-2',
    templateUrl: './card_2.html',
    styleUrls: ['./card_2.css']
    })
export class Card2Component {
    message: string | null = null;

    onButtonClick() {
        this.message = "Button clicked!";
    }
}
