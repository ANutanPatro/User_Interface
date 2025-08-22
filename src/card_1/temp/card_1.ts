import { Component } from "@angular/core";   
@Component({
  selector: "app-card-1",
  templateUrl: "./card_1.html",
  styleUrls: ["./card_1.css"]
})
export class Card1Component {
    message: string | null = null;
    
    onButtonClick() {
        this.message = "Button clicked!";
    }
}
