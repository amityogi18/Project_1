import { Component, Input, ViewEncapsulation, Output, EventEmitter, SimpleChanges, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EditorConfig } from '../../../services/config/editor.config';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { SaveButtonModel } from '../../../models/button/save-button/save-button.model';
import { CancelButtonModel } from '../../../models/button/cancel-button/cancel-button.model';

/**
 * The Note Component
 *
 * Common component for displaying RTE and plain text note fields in the UI.
 * We are utilizing the third-party component, {@link https://www.tinymce.com/ tinymce} for the RTE functionality.
 *
 * In order to work with Reactive Forms, this component needs to implement the ControlValueAccessor class.
 */
@Component({
  selector: 'c2c-note',
  templateUrl: './note.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./note.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NoteComponent),
    multi: true
  }]
})
export class NoteComponent implements ControlValueAccessor, OnChanges {
  /** Determines the editor configuration to use. */
  public editorConfig;

  /** Defines the event passed to emit function. Event is which button in modal was clicked. */
  public event: string;

  /** Options used for the modal window that contains the notes field. */
  private modalOptions: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    size: 'lg',
    windowClass: 'modal-xl'
  };

  /** Determines whether to open a modal containing the RTE or a plain textarea. */
  @Input() useRTE: boolean = true;

  /** Sets the max length of the note editor. */
  @Input() maxlength: string = '2500';

  /** Sets the starting number of rows (height) that the text field should be. */
  @Input() rows: string = '6';

  /** Defines the options of the Save Button. Used for configuring the Save Button. */
  @Input() public saveButtonOptions: SaveButtonModel;

  /** Defines the options of the Cancel Button. Used for configuring the Cancel Button. */
  @Input() public cancelButtonOptions: CancelButtonModel;

  /** Defines whether or not the notes are populated and should be displayed differently. */
  @Input() notesExist: boolean = false;

  /** Defines the default value of the text editor. Used for configuring the default value to be displayed. */
  @Input('value') public _value: string;

  /** Defines the tabbing sequence setting. */
  @Input() public tabIndex;

  /** Defines the tooltip text to display when the note icon is hovered. */
  @Input() public tooltip: string;

  /** Outputs an event when the save button is clicked. Used to provide the value to the UI. */
  @Output() valueEvent = new EventEmitter<any>();

  /** Fired when any changes to the model are detected */
  public onChange: any = () => { };

  /** Fired when the component is blurred. TODO: This currently doesn't work - need to figure out why and fix it */
  public onTouched: any = () => { };

  /** Getter for the value property */
  get value() {
    return this._value;
  }

  /** Setter for the value property */
  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  /**
   * Constructor for the Note
   *
   * Defines the editorConfig used by the RTE Note.
   *
   * @param editorConfig The configuration used to build the RTE editor (style/functionality).
   * @param modalService The service to handle all events related to the Modal.
   */
  constructor(editorConfig: EditorConfig, private modalService: NgbModal) {
    this.editorConfig =  editorConfig;
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (this.event === 'CANCEL') {
      this.value = changes.value.previousValue;
    }
  }

  /**
   * This is called when the Note icon is clicked.
   * Performs the action of opening up the modal window by triggering the event open().
   *
   * @param content The content
   */
  openModal(content) {
    this.modalService.open(content, this.modalOptions);
  }

  /**
   * This is called when the Save icon is clicked within the Note modal window.
   */
  save() {
    alert('save clicked');
  }

  /**
   * Implementation of the writeValue function given through the ControlValueAccessor class.
   * Writes the note value to the element.
   *
   * @param value The value to write.
   */
  writeValue(value: any): void {
    this.value = value;
  }

  /**
   * Implementation of the registerOnChange function given through the ControlValueAccessor class.
   * Registers the onChange callback to this.onChange().
   *
   * @param fn The callback function.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Implementation of the registerOnTouched function given through the ControlValueAccessor class.
   * Registers the onTouched callback to this.onTouched().
   *
   * @param fn The callback function.
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Emits the value of the text editor when the save button is clicked.
   */
  emitValue(event) {
    this.event = event;
    this.value = event === 'CANCEL' ? null : this.value;
    this.valueEvent.emit({ value: this.value, action: event });
  }
}
