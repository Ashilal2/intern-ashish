import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';



@Component({
  standalone: true,
  selector: 'app-toolbar',
  imports: [MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

}
