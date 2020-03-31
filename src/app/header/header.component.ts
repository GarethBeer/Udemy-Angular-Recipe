import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();

  constructor() {}
  ngOnint() {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
