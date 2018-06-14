import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeAheadEventService } from '../../../services/events/type-ahead/type-ahead-event.service';
import { Subscription } from 'rxjs/Subscription';
import { TypeAheadPersistService } from '../../../services/persist/type-ahead/type-ahead-persist.service';

const userRolesConst: Array<string> = ['Casting', 'Business/Creative', 'Production'];


@Component({
  selector: 'c2c-type-ahead-filters-form',
  templateUrl: './type-ahead-filters-form.component.html',
  styleUrls: ['./type-ahead-filters-form.component.scss']
})

export class TypeAheadFiltersFormComponent implements OnInit {

  public filterForm: FormGroup;
  public userRoles: Array<string> = userRolesConst;
  private subscription: Subscription;

  constructor(private typeAheadEventService: TypeAheadEventService,
              private typeAheadPersistService: TypeAheadPersistService) {
  }

  ngOnInit() {
    this.filterForm = new FormGroup({
      'userRole' : new FormControl(this.userRoles[0])
    });

    this.filterValueChanged(this.filterForm.controls.userRole.value);
    this.onChange();
  }

  public onChange(): void {
      this.filterForm.valueChanges.subscribe(val => {
      this.typeAheadPersistService.setUserRole(val.userRole);
      this.filterValueChanged(val);
    })
  };

  private filterValueChanged(val: any): void {
    this.typeAheadEventService.typeAheadFilterValuesChanged(val);
  };
}
