import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public options = {};

  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'select'];

  public dataSource: any[] = [
    {position: 1, id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', version: 'b'},
    {position: 2, id: 2, name: 'Helium', weight: 4.0026, symbol: 'He', version: 3},
  ];

  constructor(private http: HttpClient) {
  }

  onOpenedChange($event: boolean, element: any) {
    console.log($event, element);
    this.http.get(`/assets/${element.name}.json`).subscribe((response) => {
      this.options[element.id] = response;
    });
  }
}
