import { Component, Input } from '@angular/core';
import { AuditModel } from '../../../models/audit/audit.model';
import { Defaults } from '../../../c2c-main/common-library-defaults.const';

/**
 * The Audit Component
 *
 * Common component for displaying audit trail in the UI (includes created date and user & updated date and user),
 * which will be used on most pages to track create / edit actions.
 *
 * For an example of the Audit Component in use, see the Home page in Feature Casting.
 */
@Component({
  selector: 'c2c-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent {

  /** Defines the values need for the audit. Used to store created date and user as well as updated date and user. */
  @Input() public audit: AuditModel = Defaults.DEFAULT_AUDIT;

  constructor() { }

}
