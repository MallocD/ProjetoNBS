import { Component } from "@angular/core";
import { User } from "./user";

@Component({
    templateUrl: './user.component.html'
})
export class UserComponent{
    user: User = new User();

    

}