import { Component } from "@angular/core";
import { DataStorageService } from '../services/data-storage.service';


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  collapsed = true;


  constructor(private dsService: DataStorageService) {}
  ngOnint() {}

onSaveData() {
this.dsService.saveData();
}

onFetchData() {
  this.dsService.fetchData().subscribe();
}
}
