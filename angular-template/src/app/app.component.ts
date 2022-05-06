import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { trailingMouse } from './animation/canvas';
import { DialogComponent } from './dialog/dialog.component';
import { FormComponent } from './form/form.component';
import { ScrollService } from './service/scroll.service';
import { TableComponent } from './table/table.component';

declare const noise: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent extends FormComponent implements OnInit {


  @ViewChild(TableComponent) table: TableComponent;
  displayPrevStyle = true;


  override ngOnInit(): void {
    super.ngOnInit();
    this.innerWidth = window.innerWidth.toString().concat('px');
    this.innerHeight = window.innerHeight.toString().concat('px');
    new trailingMouse();
  }

  constructor(
    fb: FormBuilder,
    private dialog: MatDialog,
    private scrollService: ScrollService
  ) {
    super(fb);
  }

  override postFind() {
    this.result = {
      buttonToggleControl: '',
      checkboxControl: ['A'],
      inputControl: '',
      autoCompleteControl: '',
      datePickerControl: '',
      radioButtonControl: '',
      selectControl: '',
      sliderControl: 0
    }
  }

  title = 'angular-template';
  // auto-complete
  options = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
  // button-toggle
  values = [{ key: 'Bold', value: 'Bold' }, { key: 'italic', value: 'italic' }, { key: 'underline', value: 'underline' }]
  // checkbox
  checkbox = [{ key: 'A', value: 'A', check: true }, { key: 'B', value: 'B', check: false }, { key: 'C', value: 'C', check: false }]
  // menu
  menu = [{ text: 'testing menu', key: 'try1' }, { text: 'testing menu2', key: 'try2' }, { text: 'testing menu3', key: 'try3', icon: 'dialpad' }]
  // radiobutton
  radio = [{ key: 'test radio', value: 'test radio value' }, { key: 'test radio 2', value: 'test radio 2 value' }]
  // select
  select = [{ key: 'test select', value: 'test select value' }, { key: 'test radio 2', value: 'test radio 2 value' }]
  // slider
  min = 0;
  max = 100;
  // table
  tableData = [
    {
      header_1: 'value 1',
      header_2: 'value 2',
      expand: 'expand_1',
    },
    {
      header_1: 'value 1a',
      header_2: 'value 2a',
      expand: 'expand_1',
    },
    {
      header_1: 'value 1b',
      header_2: 'value 2b',
      expand: 'expand_1',
    },
    {
      header_1: 'value 1',
      header_2: 'value 2',
      expand: 'expand_1',
    },
    {
      header_1: 'value 1a',
      header_2: 'value 2a',
      expand: 'expand_1',
    },
    {
      header_1: 'value 1b',
      header_2: 'value 2b',
      expand: 'expand_1',
    }
  ]
  tableSetting = [
    {
      header: 'header_1',
      expand: 'expand 1',
    },
    {
      header: 'header_2',
      expand: 'expand 2',
    }
  ]
  tableAction = [
    {
      text: 'expand',
    },
    {
      text: 'test',
    },
  ]
  tableButton = [
    {
      key: 'approve',
      value: 'Approve',
      type: 'raised',
    },
    {
      key: 'reject',
      value: 'Reject',
      type: 'flat',
    }
  ]
  tableDisplayAction = [true, true, false, false, true, false]
  // toolbar
  toolbar = {
    left: [
      {
        type: 'button',
        style: 'icon',
        value: 'facebook',
      },
      {
        type: 'button',
        style: 'icon',
        value: 'email',
      },
    ],
    right: [
      {
        type: 'button',
        style: 'icon',
        value: 'phone',
      },
      {
        type: 'button',
        style: 'icon',
        value: 'whatsapp',
      },
      {
        type: 'button',
        style: 'icon',
        value: 'linked-in',
      }
    ]
  }
  toolbarList = this.toolbar.left.concat(this.toolbar.right)
  // spinner
  spinnerSrc = "assets/poker-card.jpeg"
  spinnerHeight = 24
  spinnerWidth = 10
  //scroll
  scrollData = [
    { color: 'white', id: 'about' },
    { color: 'white', id: 'skill' },
    { color: 'white', id: 'work' },
    // { color: 'white', id: 'about3' },
    // { color: 'white', id: 'about4' },
    // { color: 'white', id: 'about5' }
  ]
  // work
  urlUhunt = "assets/uhunt.jpeg";

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        title: 'testing dialog title',
        content: 'testing dialog content',
        action: ['No', 'Yes'],
      }
    });
  }

  menuAction(value: any) {
    console.log(value);
  }

  pageChange(value: any) {
    console.log(value);
  }

  tableButtonClick(event: any) {
    console.log(event);
  }

  toolbarAction(event: any) {
    console.log(event);
  }

  autoCompleteChange(event: any) {
    console.log(event);
  }

  spinnerClick() {

    setTimeout(() => {
      this.displayPrevStyle = !this.displayPrevStyle;
    }, 1000);
  }

  onScrollClick(event: any) {
    console.log(event);
    if (event.id) {
      this.scrollService.scrollToElementById(event.id);
    }
  }
}
