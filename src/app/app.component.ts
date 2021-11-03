import { Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Tab } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnChanges {
  title = 'angNodePos';
  activeIndex = 0;
  private readonly _tabs = new BehaviorSubject<Tab[]>([]);
  @Input() 
  set tabs(value: Tab[]) {
    this._tabs.next(value);
  }
  get tabs(): Tab[] {
    return this._tabs.getValue();
  }

  constructor(private readonly router: Router,
    private readonly route: ActivatedRoute) {
      this.tabs = [
        {
          label: 'Main',
          route: 'dashboard',
          order: 1,
          isVisible: true,
          isDisabled : false,
          module : ""
          },
        {
        label: 'Form Validation',
        route: 'form-validation',
        order: 2,
        isVisible: true,
        isDisabled : false,
        module : ""
        }
      ];
  }

  handleChange(data: any){
    var index = data.index;
    if(index == 0){
      
    }else{
     
    }
  }

  ngOnChanges(): void {
  }
}

