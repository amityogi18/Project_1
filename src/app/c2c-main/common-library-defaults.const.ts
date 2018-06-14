import { ImageComponent } from '../modules/elements/grid/custom-cells/image/image.component';
import { ListComponent } from '../modules/elements/grid/custom-cells/list/list.component';
import { ListEditorComponent } from '../modules/elements/grid/custom-cells/list-editor/list-editor.component';
import { LinkComponent } from '../modules/elements/grid/custom-cells/link/link.component';
import { ColDef, Column } from 'ag-grid';
import { ColumnDefModel } from '../models/grid/column-def.model';
import { ListParamsModel } from '../models/grid/list-params.model';
import { ImageParamsModel } from '../models/grid/image-params.model';
import { TitlesParamsModel } from '../models/grid/titles-params.model';
import { LinkParamsModel } from '../models/grid/link-params.model';
import { GridPageOptionsModel } from '../models/grid/grid-page-options.model';
import { SidebarModel } from '../models/sidebar/sidebar.model';
import { AuditModel } from '../models/audit/audit.model';
import { DropdownModel } from '../models/dropdown/dropdown.model';
import { RadioButtonModel } from '../models/radio-button/radio-button.model';
import { CheckboxModel } from '../models/checkbox/checkbox.model';
import { GridIconParamsModel } from '../models/grid/grid-icon-params.model';
import { GridLinkParamsModel } from '../models/grid/grid-link-params.model';

// @dynamic

/**
 * The Common Library Defaults
 *
 * Defaults for the Common Components in the library.
 * This is just test data, and should not be exported with the package.
 */
export class Defaults {
  /*
   * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
   *                  The Sidebar Defaults
   * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
   */
  public static readonly DEFAULT_NAV_ITEMS: Array<SidebarModel> = [
    new SidebarModel('HOME', 1.0, 'testLink1', true),
    new SidebarModel('TEST SUB LINK', 1.1, 'testSubLink', false),
    new SidebarModel('TALENT', 2.0, 'testLinkTwo', true),
    new SidebarModel('REPRESENTATION', 3.0, 'testLinkThree', true),
    new SidebarModel('POWER SEARCH', 4.0, 'testLinkFour', true),
    new SidebarModel('REPORTS', 5.0, 'testLinkThree', true)
  ];

  public static readonly DEFAULT_VERSION: string = '1.0.2-DEFAULT';

  /*
   * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
   *                   The Header Defaults
   * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
   */
  public static readonly DEFAULT_MODULE_NAME: string = 'C2C Common';

  /*
   * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
   *                  The Form Defaults
   * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
   */
  public static readonly DEFAULT_INPUT_PLACEHOLDER: string = 'C2C Input Placeholder';
  public static readonly DEFAULT_LABEL_VALUE: string = 'C2C Label';

  /*
   * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
   *                  The Audit Defaults
   * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
   */
  public static readonly DEFAULT_AUDIT: AuditModel =
    new AuditModel('2018-05-05T14:08:00', 'C2CEnterUser', '2018-12-25T20:20:10', 'C2CUpdateUser');

  public static readonly DEFAULT_WIZARD_AUDIT: AuditModel =
    new AuditModel(null, null, '2018-01-01T01:01:01', 'C2CUpdateUser')

  /*
   * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
   *                   The Dropdown Defaults
   * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
   */
  public static readonly DEFAULT_DROPDOWN_OPTIONS: DropdownModel =
    new DropdownModel('', 'Default Title', '', '', [
      {value: 'Default Choice 1', route: ''},
      {value: 'Default Choice 2', route: ''},
      {value: 'Default Choice 3', route: ''}
    ]);

    /*
   * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
   *                   The Radio Button Defaults
   * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
   */
  public static readonly DEFAULT_RADIO_BUTTON_OPTIONS: RadioButtonModel =
  new RadioButtonModel('thisRadioTitle', [
    {title: 'Option 1', checkedByDefault: false, disabled: false, showTitle: true},
    {title: 'Option 2', checkedByDefault: false, disabled: false, showTitle: true},
    {title: 'Option 3', checkedByDefault: false, disabled: false, showTitle: true},
    {title: 'checked by default', checkedByDefault: true, disabled: false, showTitle: true},
    {title: 'disabled by default', checkedByDefault: false, disabled: true, showTitle: true}
  ]);

  /*
   * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
   *                   The Checkbox Defaults
   * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
   */
  public static readonly DEFAULT_CHECKBOX_OPTIONS: CheckboxModel =
  new CheckboxModel('thisId', 'thisName', [
    {value: 'v1', label: 'Value 1', checked: false, showTitle: true},
    {value: 'v2', label: 'Value 2', checked: false, showTitle: true},
    {value: 'v3', label: 'Value 3', checked: false, showTitle: true},
    {value: 'v4', label: 'Value 4 (checked by default)', checked: true, showTitle: true}
  ]);

  /*
   * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
   *                  The Form List Defaults
   * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
   */

  public static readonly DEFAULT_LIST_HEADERS: Array<string> = ['Production Company', 'Union', 'Signatory', 'Title', 'Primary'];

  public static readonly DEFAULT_DATA_ELEMENTS: any[] = [
    {
      productionCompany: { type: 'input', value: 'Test 1' },
      union: { type: 'dropdown', value: 'Union' },
      signatory: { type: 'dropdown', value: 'John Doe' },
      title: { type: 'dropdown', value: 'Test Title 1' },
      primary: { type: 'radio', value: true}
    },
    {
      productionCompany: { type: 'input', value: 'Test 2' },
      union: { type: 'dropdown', value: 'Union' },
      signatory: { type: 'dropdown', value: 'John Doe' },
      title: { type: 'dropdown', value: 'Test Title 2' },
      primary: { type: 'radio', value: true}
    },
    {
      productionCompany: { type: 'input', value: 'Test 3' },
      union: { type: 'dropdown', value: 'Union' },
      signatory: { type: 'dropdown', value: 'John Doe' },
      title: { type: 'dropdown', value: 'Test Title 3' },
      primary: { type: 'radio', value: true}
    },
  ];

  public static readonly DEFAULT_DATA_OBJECT: any = {
    productionCompany: { type: 'input', value: 'Test 4' },
    union: { type: 'dropdown', value: 'Non-union' },
    signatory: { type: 'dropdown', value: 'Jane Doe' },
    title: { type: 'dropdown', value: 'Test Title 4' },
    primary: { type: 'radio', value: true}
  };

  /*
   * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
   *                   The Wizard Defaults
   * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
   */
  public static readonly DEFAULT_WIZARD_TITLE: string = 'C2C Wizard Title';

  public static readonly DEFAULT_WIZARD_SUBTITLE: Array<string> = ['Title Project', '01/01/2018', 'Performer Name'];

  public static readonly DEFAULT_WIZARD_SECTIONS: any = [
    { page: 'Names / Project Details', status: 'complete', route: 'nameProjectDetails' },
    { page: 'Opening Paragraph', status: 'complete', route: 'openingParagraph' },
    { page: 'Loanout', status: 'complete', route: 'loanout' },
    { page: 'Term', status: null, route: 'term' },
    { page: 'Notices and Payments', status: 'not-applicable', route: 'noticesPayments'},
    { page: 'Guarantee', status: 'complete', route: 'guarantee' },
    { page: 'Perqs', status: null, route: 'perqs' },
    { page: 'Other Terms', status: 'incomplete', route: 'otherTerms' },
    { page: 'Fixed Compensation', status: 'not-applicable', route: 'fixedCompensation' },
    { page: 'Contingent Compensation', status: 'incomplete', route: 'contingentCompensation' },
    { page: 'Credit', status: 'incomplete', route: 'credit' },
    { page: 'Summary', status: null, route: 'summary' },
  ];

  /*
   * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
   *                   The Grid Defaults
   * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
   */
  public static readonly DEFAULT_PAGE_OPTIONS: GridPageOptionsModel = new GridPageOptionsModel(
    true,
    'Default title',
    true,
    true,
    true,
    true,
    true
  );

  public static readonly DEFAULT_COL_DEFS_IMAGE: ColumnDefModel[] = [
    new ColumnDefModel(
      'Name',
      'talent',
      {
        name: 'imageComponent',
        params: new ImageParamsModel('talent', 'akaNames', [
          'firstName',
          'lastName',
      ])
      },
      {
        name: 'lastNameComparator',
        dataToParse: { field1: 'talent', field2: 'lastName' }
      }
    ),
    new ColumnDefModel('Projects', 'projectName', {
      name: 'listComponent',
      params: new ListParamsModel('projects', null, true, true)
    }),
    new ColumnDefModel('ID #', 'id', null, null, {
      name: 'ssnFormatter',
      field: 'id'
    }),
    new ColumnDefModel('Representative', 'representative'),
    new ColumnDefModel('Company', 'company'),
    new ColumnDefModel('Date', 'date', null, null, {
      name: 'dateFormatter',
      field: 'talent.date'
    })
  ];

  public static readonly DEFAULT_ROW_DATA_IMAGE: any[] = [
    {
      talent: {
        firstName: 'Leonardo',
        lastName: 'DiCaprio',
        akaNames: ['Leo DiCaprio'],
        routeUrl : 'talentGrid/talentDetails',
        date: '2018-05-07T20:39:25',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg',
        minor: false
      },
      projects: [
        { projectName: 'The Revenant 14: The Bear finally kills him' },
        { projectName: 'Live By Night' },
        { projectName: 'The Wolf of Wall Streeeeeeeeeeeeet' },
        { projectName: 'The Great Gatsby' },
        { projectName: 'Red Riding Hood' },
        { projectName: 'The Titanic' },
        { projectName: 'Inception' }
      ],
      id: '382654325',
      representative: 'Rick Yorn',
      company: 'LBI Entertainment',
      date: '2018-05-07T20:39:25'
    },
    {
      talent: {
        firstName: 'Scott',
        lastName: 'Diggs (K)',
        akaNames: ['Taye Diggs', 'T Diggs'],
        date: '2015-09-30T18:22:00',
        image:
          'http://images2.fanpop.com/images/photos/2700000/Taye-Diggs-taye-diggs-2709366-1923-2560.jpg',
        minor: false
      },
      projects: [
        { projectName: 'Empire' },
        { projectName: 'Murder in the First' },
        { projectName: 'Opening Night' },
        { projectName: 'NCIS' },
        { projectName: 'Rosewood' }
      ],
      id: '123985467',
      representative: 'Tom Bradenton',
      company: 'GRC Creative',
      date: '2015-09-30T18:22:00'
    },
    {
      talent: {
        firstName: 'Maggie',
        lastName: 'Gyllenhaal',
        akaNames: null,
        date: '2018-08-15T09:41:28',
        image:
          'http://amominredhighheels.com/wp-content/uploads/2008/07/maggie_gyllenhaal.jpg',
        minor: false
      },
      projects: [
        { projectName: 'The Deuce' },
        { projectName: '' },
        { projectName: 'Home' },
        { projectName: 'The New Empress' },
        { projectName: 'Beauty Mark' },
        { projectName: 'The Dark Knight' }
      ],
      id: '213526644',
      representative: 'Sam Tavitz',
      company: 'Gavern Entertainment',
      date: '2018-08-15T09:41:28'
    },
    {
      talent: {
        firstName: 'Kirsten',
        lastName: 'Dunst',
        akaNames: null,
        date: '2013-11-19T13:05:25',
        image:
          'https://ia.media-imdb.com/images/M/MV5BMTQ3NzkwNzM1MV5BMl5BanBnXkFtZTgwMzE2MTQ3MjE@._V1_UY317_CR12,0,214,317_AL_.jpg',
        minor: true
      },
      projects: [
        { projectName: 'The Bell Jar 2: Revenge of the Jars!' },
        { projectName: 'Midnight Special' },
        { projectName: 'Porlandia' },
        { projectName: 'Upside Down' },
        { projectName: 'Melancholia' },
        { projectName: 'Spider Man 1' },
        { projectName: 'Spider Man 2' },
        { projectName: 'Spider Man 3' }
      ],
      id: '527663987',
      representative: 'Alec Nimitz',
      company: 'GRC Creative',
      date: '2013-11-19T13:05:25'
    },
    {
      talent: {
        firstName: 'Andy',
        lastName: 'Garcia',
        akaNames: ['Andrés Arturo García Menéndez'],
        date: '2018-05-11T22:22:22',
        image:
          'http://www.independent.org/images/bios_hirez/garcia_andy_700.jpg',
        minor: false
      },
      projects: [
        { projectName: 'What about Love' },
        { projectName: 'Max Steel' },
        { projectName: 'The Pink Panther 2' }
      ],
      id: '192933353',
      representative: 'Luke Ovitz',
      company: 'Creative Artists Agency',
      date: '2018-05-11T22:22:22'
    }
  ];

  public static readonly DEFAULT_COL_DEFS_PROJECTS: ColumnDefModel[] = [
    new ColumnDefModel('Title', 'title', {
      name: 'titlesComponent',
      params: new LinkParamsModel(['title', 'akaNames'], '/projectDetails', [
        'id'
      ])
    }),
    new ColumnDefModel(
      'Performer',
      'performer',
      {
        name: 'listComponent',
        params: new ListParamsModel('deals', ['firstName', 'lastName'], true, null, null, 'performer.agencyName', '/wizard', 'deals.id', 'summary')
      },
      {
        name: 'lastNameComparator',
        dataToParse: {
          field1: 'deals',
          field2: 'performer',
          field3: 'lastName'
        }
      }
    ),
    new ColumnDefModel('Role', 'performerRole', {
      name: 'listComponent',
      params: new ListParamsModel('deals', null, null, null, null, 'performer.agencyName')
    }),
    new ColumnDefModel('Agency', 'performer', {
      name: 'listComponent',
      params: new ListParamsModel('deals', ['agencyName'], null, null, true)
    }),
    new ColumnDefModel('Union', 'unionLookup', {
      name: 'listComponent',
      params: new ListParamsModel('deals', ['name'], null, null, null, 'performer.agencyName')
    }),
    new ColumnDefModel('SAP/GL Code', 'sapCode', {
      name: 'gridLinkComponent',
      params: new GridLinkParamsModel('/welcome', 'sapCode')
    })
    // new ColumnDefModel('SAP/GL Code', 'sapCode')
  ];

  public static readonly DEFAULT_ROW_DATA_PROJECTS: any[] = [
    {
      title: 'COWBOY WAY',
      akaNames: ['PISTOLLERS', 'COWBOYS'],
      sapCode: 100,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Sir Dinglebop Castlebard the Seventy-Seventh',
          performer: {
            firstName: 'EggsBenedict',
            middleName: null,
            lastName: 'Cucumberpatch',
            agencyName: ['ROW1', 'ROW1'],
            partyId: null
          },
          id: 43
        },
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 31',
          performer: {
            firstName: 'This is a really long name',
            middleName: null,
            lastName: 'Williams',
            agencyName: ['ROW2'],
            partyId: null
          },
          id: 44
        },
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 31',
          performer: {
            firstName: 'Jackie',
            middleName: null,
            lastName: 'Bridges',
            agencyName: ['ROW3', 'ROW3', 'ROW3'],
            partyId: null
          },
          id: 45
        },
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 31',
          performer: {
            firstName: 'Thomas',
            middleName: null,
            lastName: 'Joseph',
            agencyName: null,
            partyId: null
          },
          id: 46
        },
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 31',
          performer: {
            firstName: 'Bill',
            middleName: null,
            lastName: 'Hardy',
            agencyName: ['ROW5', 'ROW5'],
            partyId: null
          },
          id: 47
        },
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 31',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ROW6', 'ROW6'],
            partyId: null
          },
          id: 48
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010774'
        }
      },
      id: 1010774
    },
    {
      title: 'LOVERBOY',
      akaNames: ['ALL MY LOVIN\''],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010775'
        }
      },
      id: 1010775
    },
    {
      title: 'TOUGH STUFF',
      akaNames: ['MARTIAL ARTS PROJECT'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010776'
        }
      },
      id: 1010776
    },
    {
      title: 'BLIND FURY',
      akaNames: ['MEN OF THE DARK'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010777'
        }
      },
      id: 1010777
    },
    {
      title: 'MENTAL CASE',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010778'
        }
      },
      id: 1010778
    },
    {
      title: 'NO MERCY',
      akaNames: ['NM PRODUCTION PROJECT'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010779'
        }
      },
      id: 1010779
    },
    {
      title: 'BREAKTHROUGH',
      akaNames: ['NIGHTVISIONS'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010780'
        }
      },
      id: 1010780
    },
    {
      title: 'WHITE ANGEL',
      akaNames: ['CARINOSA'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010781'
        }
      },
      id: 1010781
    },
    {
      title: 'HAILSTORM',
      akaNames: ['WRIGHT BLIND PROJECT'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010782'
        }
      },
      id: 1010782
    },
    {
      title: 'OUT OF CIRCULATION',
      akaNames: ['CAMERON OPTIONAL PROJECT #1', 'LOGIE\'S FOLIES'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010783'
        }
      },
      id: 1010783
    },
    {
      title: 'PRINCIPAL, THE',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010784'
        }
      },
      id: 1010784
    },
    {
      title: 'SILENT SERVICE',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010785'
        }
      },
      id: 1010785
    },
    {
      title: 'GILLIAN',
      akaNames: ['TO GILLIAN ON HER 37TH BIRTHDAY', 'ALONG THE WAY'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010786'
        }
      },
      id: 1010786
    },
    {
      title: 'FOR KEEPS',
      akaNames: ['MAYBE BABY', 'KAZURINSKY/DECLUE BLIND PROJECT'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010787'
        }
      },
      id: 1010787
    },
    {
      title: 'END OF ETERNITY',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010788'
        }
      },
      id: 1010788
    },
    {
      title: 'SWEET HEART\'S DANCE',
      akaNames: ['A KISS IS STILL A KISS', 'STILL MARRIED'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010789'
        }
      },
      id: 1010789
    },
    {
      title: 'I LOVE YOU TO DEATH',
      akaNames: ['MOLER/WELLS/KOSTMAYER PROJECT'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010790'
        }
      },
      id: 1010790
    },
    {
      title: 'HELL TO PAY',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010791'
        }
      },
      id: 1010791
    },
    {
      title: 'GIAT BLIND PROJECT',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010792'
        }
      },
      id: 1010792
    },
    {
      title: 'HAVE I GOT A GIRL FOR YOU',
      akaNames: ['CRAZY DATE'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010793'
        }
      },
      id: 1010793
    },
    {
      title: 'THREE DADS',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010794'
        }
      },
      id: 1010794
    },
    {
      title: 'CHANCES ARE',
      akaNames: [
        'PREVIOUSLY YOURS',
        'NOW AND FOREVER',
        'LIFE AFTER LIFE',
        'MIRACLE IN GEORGETOWN',
        'UNFORGETTABLE'
      ],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010795'
        }
      },
      id: 1010795
    },
    {
      title: 'ANIMAL PASSION',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010796'
        }
      },
      id: 1010796
    },
    {
      title: 'BLUE CHAIR, THE',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010797'
        }
      },
      id: 1010797
    },
    {
      title: 'NOTHING BUT THE BEST',
      akaNames: ['NEVER SAY DIE'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010798'
        }
      },
      id: 1010798
    },
    {
      title: 'BLUE MAAGA',
      akaNames: ['BOBSLED PROJECT', 'DRED SLED'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010799'
        }
      },
      id: 1010799
    },
    {
      title: 'EXECUTIVE PRIVILEGE',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010800'
        }
      },
      id: 1010800
    },
    {
      title: 'SWAYZE, PATRICK UNTITLED',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010801'
        }
      },
      id: 1010801
    },
    {
      title: 'THIRD PARTY',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010802'
        }
      },
      id: 1010802
    },
    {
      title: 'FRANCINE LEFRAK BALLROOM PROJECT',
      akaNames: ['JIVE BABY'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010803'
        }
      },
      id: 1010803
    },
    {
      title: 'BAILOUT',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010804'
        }
      },
      id: 1010804
    },
    {
      title: 'COMPANY OF HEROES',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010805'
        }
      },
      id: 1010805
    },
    {
      title: 'DEAD MAN DOWN',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010806'
        }
      },
      id: 1010806
    },
    {
      title: 'CROOKED ARROWS',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010807'
        }
      },
      id: 1010807
    },
    {
      title: 'MYSTERIOUS MR. SPINES, THE',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010808'
        }
      },
      id: 1010808
    },
    {
      title: 'X-MAS GAMES',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010809'
        }
      },
      id: 1010809
    },
    {
      title: 'STERN, DAVID UNTITLED PROJECT',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010810'
        }
      },
      id: 1010810
    },
    {
      title: 'TENTATIVE LIES (CHINA)',
      akaNames: ['ROMANITC LIES'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010811'
        }
      },
      id: 1010811
    },
    {
      title: 'MERMAID',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010812'
        }
      },
      id: 1010812
    },
    {
      title: 'AFFLICTED',
      akaNames: ['ENDS OF THE EARTH'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010813'
        }
      },
      id: 1010813
    },
    {
      title: 'CAT BALLOU MUSICAL',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/3010892'
        }
      },
      id: 3010892
    },
    {
      title: 'DON\'T BE AFRAID OF THE DARK',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/3010893'
        }
      },
      id: 3010893
    },
    {
      title: 'LOOPER',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/3010894'
        }
      },
      id: 3010894
    },
    {
      title: 'MOM\'S NIGHT OUT',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/3010895'
        }
      },
      id: 3010895
    },
    {
      title: 'INSIDIOUS 2',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/3010896'
        }
      },
      id: 3010896
    },
    {
      title: 'ANDERSON TAPES',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/11'
        }
      },
      id: 11
    },
    {
      title: 'BAD TEACHER',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/55'
        }
      },
      id: 55
    },
    {
      title: 'AMERICAN HUSTLE',
      akaNames: ['AMERICAN BULLSHIT', 'ABSCAM'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/135'
        }
      },
      id: 135
    },
    {
      title: 'EMERALD CITY',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/493'
        }
      },
      id: 493
    },
    {
      title: 'MASTERS OF THE UNIVERSE',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/655'
        }
      },
      id: 655
    },
    {
      title: 'SKULL, THE',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1030'
        }
      },
      id: 1030
    },
    {
      title: 'GANIS GOVERNESS PROJECT',
      akaNames: ['GOVERNESS PROJECT'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1391'
        }
      },
      id: 1391
    },
    {
      title: 'HOTEL TRANSYLVANIA',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1821'
        }
      },
      id: 1821
    },
    {
      title: 'LOVE HUNTER',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1909'
        }
      },
      id: 1909
    },
    {
      title: 'PRINCE OF 47TH STREET',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/2032'
        }
      },
      id: 2032
    },
    {
      title: 'RECOIL',
      akaNames: ['JACKALS'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/2046'
        }
      },
      id: 2046
    },
    {
      title: 'SKYFALL',
      akaNames: ['BOND 23'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/3044'
        }
      },
      id: 3044
    },
    {
      title: 'TAP',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/3444'
        }
      },
      id: 3444
    },
    {
      title: 'SWITCHING CHANNELS',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/3445'
        }
      },
      id: 3445
    },
    {
      title: 'SEE NO EVIL, HEAR NO EVIL',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/3448'
        }
      },
      id: 3448
    },
    {
      title: 'THE FRESHMAN',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/3450'
        }
      },
      id: 3450
    },
    {
      title: 'THE MONUMENTS MEN',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/3524'
        }
      },
      id: 3524
    },
    {
      title: 'CLOUDY 2:REVENGE OF THE LEFTOVERS',
      akaNames: [],
      sapCode: null,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 31',
          performer: {
            firstName: 'Donny',
            middleName: null,
            lastName: 'Smith',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 43
        },
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 31',
          performer: {
            firstName: 'Rae',
            middleName: null,
            lastName: 'Williams',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 43
        },
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 31',
          performer: {
            firstName: 'Jackie',
            middleName: null,
            lastName: 'Bridges',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 43
        },
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 31',
          performer: {
            firstName: 'Thomas',
            middleName: null,
            lastName: 'Joseph',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 43
        },
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 31',
          performer: {
            firstName: 'Bill',
            middleName: null,
            lastName: 'Hardy',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 43
        },
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 31',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 43
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/3865'
        }
      },
      id: 3865
    },
    {
      title: 'OXFORD',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/4349'
        }
      },
      id: 4349
    },
    {
      title: 'RAID, THE (REMAKE)',
      akaNames: ['RAID 2:  BERANDAL, THE', 'RAID (REMAKE), THE', 'RAID 2'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/4351'
        }
      },
      id: 4351
    },
    {
      title: 'GIRL IN THE SPIDER\'S WEB',
      akaNames: ['THE GIRL IN THE SPIDER\'S WEB'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/8628'
        }
      },
      id: 8628
    },
    {
      title: 'THE WALK',
      akaNames: ['TO REACH THE CLOUDS'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/274250'
        }
      },
      id: 274250
    },
    {
      title: 'THE LADY IN THE VAN',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/328450'
        }
      },
      id: 328450
    },
    {
      title: 'MUNIC BLIND SCRIPT',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010720'
        }
      },
      id: 1010720
    },
    {
      title: 'FATAL BEAUTY',
      akaNames: ['EXTREME MEASURES'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010771'
        }
      },
      id: 1010771
    },
    {
      title: 'SIXTH FAMILY',
      akaNames: ['MADE IN THE SHADE'],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010772'
        }
      },
      id: 1010772
    },
    {
      title: 'RESCUE (1988)',
      akaNames: [],
      sapCode: null,
      deals: [],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1010773'
        }
      },
      id: 1010773
    },
    {
      title: 'No Wrap title',
      akaNames: [],
      sapCode: 7,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 1
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012348'
        }
      },
      id: 1012348
    },
    {
      title: 'Wrapping Title NO AkA xxxxxxxxxxxxxxxx',
      akaNames: [],
      sapCode: '21',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486642,
          performerRole: 'Doctor',
          performer: {
            firstName: 'Panorama Media LLC as agent for',
            middleName: null,
            lastName: 'White Dog Productions LLC',
            agencyName: '',
            partyId: null
          },
          id: 2
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012349'
        }
      },
      id: 1012349
    },
    {
      title: 'No Wrap title1',
      akaNames: ['AKA1'],
      sapCode: '32',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 3
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012350'
        }
      },
      id: 1012350
    },
    {
      title: 'Wrapping Title Wrap AKAxxxxxxxxxxxx',
      akaNames: ['AKA for Wrapping Title Wrap AKAxxxxxxxx'],
      sapCode: 242,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486642,
          performerRole: 'Doctor',
          performer: {
            firstName: 'Panorama Media LLC as agent for',
            middleName: null,
            lastName: 'White Dog Productions LLC',
            agencyName: '',
            partyId: null
          },
          id: 5
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012351'
        }
      },
      id: 1012351
    },
    {
      title: 'title',
      akaNames: ['AKA1', 'aka2'],
      sapCode: 323,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486645,
          performerRole: 'Lawyer',
          performer: {
            firstName: 'Michael',
            middleName: null,
            lastName: 'Brady',
            agencyName: '',
            partyId: null
          },
          id: 8
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012352'
        }
      },
      id: 1012352
    },
    {
      title: 'Project Title 1',
      akaNames: [
        'Project Title 1 AKA Wrap 2 xxxxxxxxxx',
        'Project Title 1 AKA Wrap 1 xxxxxxxxxx'
      ],
      sapCode: 2321,
      deals: [
        {
          unionLookup: {
            name: 'Union that wraps its name in the column',
            type: 'UNION',
            displayOrder: null,
            id: 26
          },
          performerPartyId: 3486790,
          performerRole: 'Doctor',
          performer: {
            firstName: null,
            middleName: null,
            lastName: null,
            agencyName: null,
            partyId: null
          },
          id: 12
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012353'
        }
      },
      id: 1012353
    },
    {
      title: 'Test Title_migrate 1',
      akaNames: [],
      sapCode: '1',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 1',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 13
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012354'
        }
      },
      id: 1012354
    },
    {
      title: 'Test Title_migrate 2',
      akaNames: [],
      sapCode: '2',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 2',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 14
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012355'
        }
      },
      id: 1012355
    },
    {
      title: 'Test Title_migrate 3',
      akaNames: [],
      sapCode: '3',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 3',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 15
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012356'
        }
      },
      id: 1012356
    },
    {
      title: 'Test Title_migrate 4',
      akaNames: [],
      sapCode: '4',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 4',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 16
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012357'
        }
      },
      id: 1012357
    },
    {
      title: 'Test Title_migrate 5',
      akaNames: [],
      sapCode: '5',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 5',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 17
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012358'
        }
      },
      id: 1012358
    },
    {
      title: 'Test Title_migrate 6',
      akaNames: [],
      sapCode: '6',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 6',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 18
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012359'
        }
      },
      id: 1012359
    },
    {
      title: 'Test Title_migrate 7',
      akaNames: [],
      sapCode: '7',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 7',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM'],
            partyId: null
          },
          id: 19
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012360'
        }
      },
      id: 1012360
    },
    {
      title: 'Test Title_migrate 8',
      akaNames: [],
      sapCode: '8',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 8',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 20
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012361'
        }
      },
      id: 1012361
    },
    {
      title: 'Test Title_migrate 9',
      akaNames: [],
      sapCode: '9',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 9',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 21
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012362'
        }
      },
      id: 1012362
    },
    {
      title: 'Test Title_migrate 10',
      akaNames: [],
      sapCode: '10',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 10',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 22
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012363'
        }
      },
      id: 1012363
    },
    {
      title: 'Test Title_migrate 11',
      akaNames: [],
      sapCode: '11',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 11',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 23
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012364'
        }
      },
      id: 1012364
    },
    {
      title: 'Test Title_migrate 12',
      akaNames: [],
      sapCode: '12',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 12',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 24
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012365'
        }
      },
      id: 1012365
    },
    {
      title: 'Test Title_migrate 13',
      akaNames: [],
      sapCode: '13',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 13',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 25
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012366'
        }
      },
      id: 1012366
    },
    {
      title: 'Test Title_migrate 14',
      akaNames: [],
      sapCode: '14',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 14',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 26
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012367'
        }
      },
      id: 1012367
    },
    {
      title: 'Test Title_migrate 15',
      akaNames: [],
      sapCode: '15',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 15',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 27
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012368'
        }
      },
      id: 1012368
    },
    {
      title: 'Test Title_migrate 16',
      akaNames: [],
      sapCode: '16',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 16',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 28
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012369'
        }
      },
      id: 1012369
    },
    {
      title: 'Test Title_migrate 17',
      akaNames: [],
      sapCode: '17',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 17',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 29
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012370'
        }
      },
      id: 1012370
    },
    {
      title: 'Test Title_migrate 18',
      akaNames: [],
      sapCode: '18',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 18',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 30
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012371'
        }
      },
      id: 1012371
    },
    {
      title: 'Test Title_migrate 19',
      akaNames: [],
      sapCode: '19',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 19',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 31
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012372'
        }
      },
      id: 1012372
    },
    {
      title: 'Test Title_migrate 20',
      akaNames: [],
      sapCode: '20',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 20',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 32
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012373'
        }
      },
      id: 1012373
    },
    {
      title: 'Test Title_migrate 21',
      akaNames: [],
      sapCode: '21',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 21',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 33
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012374'
        }
      },
      id: 1012374
    },
    {
      title: 'Test Title_migrate 22',
      akaNames: [],
      sapCode: '22',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 22',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 34
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012375'
        }
      },
      id: 1012375
    },
    {
      title: 'Test Title_migrate 23',
      akaNames: [],
      sapCode: '23',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 23',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 35
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012376'
        }
      },
      id: 1012376
    },
    {
      title: 'Test Title_migrate 24',
      akaNames: [],
      sapCode: '24',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 24',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 36
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012377'
        }
      },
      id: 1012377
    },
    {
      title: 'Test Title_migrate 25',
      akaNames: [],
      sapCode: '25',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 25',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 37
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012378'
        }
      },
      id: 1012378
    },
    {
      title: 'Test Title_migrate 26',
      akaNames: [],
      sapCode: '26',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 26',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 38
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012379'
        }
      },
      id: 1012379
    },
    {
      title: 'Test Title_migrate 27',
      akaNames: [],
      sapCode: '27',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 27',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 39
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012380'
        }
      },
      id: 1012380
    },
    {
      title: 'Test Title_migrate 28',
      akaNames: [],
      sapCode: '28',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 28',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 40
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012381'
        }
      },
      id: 1012381
    },
    {
      title: 'Test Title_migrate 29',
      akaNames: [],
      sapCode: '29',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 29',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 41
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012382'
        }
      },
      id: 1012382
    },
    {
      title: 'Test Title_migrate 30',
      akaNames: [],
      sapCode: '30',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 30',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 42
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012383'
        }
      },
      id: 1012383
    },
    {
      title: 'Test Title_migrate 31',
      akaNames: [],
      sapCode: '31',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 31',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 43
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012384'
        }
      },
      id: 1012384
    },
    {
      title: 'Test Title_migrate 32',
      akaNames: [],
      sapCode: '32',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 32',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 44
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012385'
        }
      },
      id: 1012385
    },
    {
      title: 'Test Title_migrate 33',
      akaNames: [],
      sapCode: '33',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 33',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 45
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012386'
        }
      },
      id: 1012386
    },
    {
      title: 'Test Title_migrate 34',
      akaNames: [],
      sapCode: '34',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 34',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 46
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012387'
        }
      },
      id: 1012387
    },
    {
      title: 'Test Title_migrate 35',
      akaNames: [],
      sapCode: '35',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 35',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 47
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012388'
        }
      },
      id: 1012388
    },
    {
      title: 'Test Title_migrate 36',
      akaNames: [],
      sapCode: '36',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 36',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 48
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012389'
        }
      },
      id: 1012389
    },
    {
      title: 'Test Title_migrate 37',
      akaNames: [],
      sapCode: '37',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 37',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 49
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012390'
        }
      },
      id: 1012390
    },
    {
      title: 'Test Title_migrate 38',
      akaNames: [],
      sapCode: '38',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 38',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 50
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012391'
        }
      },
      id: 1012391
    },
    {
      title: 'Test Title_migrate 39',
      akaNames: [],
      sapCode: '39',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 39',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 51
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012392'
        }
      },
      id: 1012392
    },
    {
      title: 'Test Title_migrate 40',
      akaNames: [],
      sapCode: '40',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 40',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 52
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012393'
        }
      },
      id: 1012393
    },
    {
      title: 'Test Title_migrate 41',
      akaNames: [],
      sapCode: '41',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 41',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 53
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012394'
        }
      },
      id: 1012394
    },
    {
      title: 'Test Title_migrate 42',
      akaNames: [],
      sapCode: '42',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 42',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 54
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012395'
        }
      },
      id: 1012395
    },
    {
      title: 'Test Title_migrate 43',
      akaNames: [],
      sapCode: '43',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 43',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 55
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012396'
        }
      },
      id: 1012396
    },
    {
      title: 'Test Title_migrate 44',
      akaNames: [],
      sapCode: '44',
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 44',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 56
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012397'
        }
      },
      id: 1012397
    },
    {
      title: 'Test Title_migrate 45',
      akaNames: [],
      sapCode: 45,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 45',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 57
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012398'
        }
      },
      id: 1012398
    },
    {
      title: 'Test Title_migrate 46',
      akaNames: [],
      sapCode: 46,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 46',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 58
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012399'
        }
      },
      id: 1012399
    },
    {
      title: 'Test Title_migrate 47',
      akaNames: [],
      sapCode: 47,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 47',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 59
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012400'
        }
      },
      id: 1012400
    },
    {
      title: 'Test Title_migrate 48',
      akaNames: [],
      sapCode: 48,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 48',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 60
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012401'
        }
      },
      id: 1012401
    },
    {
      title: 'Test Title_migrate 49',
      akaNames: [],
      sapCode: 49,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 49',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 61
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012402'
        }
      },
      id: 1012402
    },
    {
      title: 'Test Title_migrate 50',
      akaNames: [],
      sapCode: 50,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 50',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 62
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012403'
        }
      },
      id: 1012403
    },
    {
      title: 'Test Title_migrate 51',
      akaNames: [],
      sapCode: 51,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 51',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 63
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012404'
        }
      },
      id: 1012404
    },
    {
      title: 'Test Title_migrate 52',
      akaNames: [],
      sapCode: 52,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 52',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 64
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012405'
        }
      },
      id: 1012405
    },
    {
      title: 'Test Title_migrate 53',
      akaNames: [],
      sapCode: 53,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 53',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 65
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012406'
        }
      },
      id: 1012406
    },
    {
      title: 'Test Title_migrate 54',
      akaNames: [],
      sapCode: 54,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 54',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 66
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012407'
        }
      },
      id: 1012407
    },
    {
      title: 'Test Title_migrate 55',
      akaNames: [],
      sapCode: 55,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 55',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 67
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012408'
        }
      },
      id: 1012408
    },
    {
      title: 'Test Title_migrate 56',
      akaNames: [],
      sapCode: 56,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 56',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 68
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012409'
        }
      },
      id: 1012409
    },
    {
      title: 'Test Title_migrate 57',
      akaNames: [],
      sapCode: 57,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 57',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 69
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012410'
        }
      },
      id: 1012410
    },
    {
      title: 'Test Title_migrate 58',
      akaNames: [],
      sapCode: 58,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 58',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 70
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012411'
        }
      },
      id: 1012411
    },
    {
      title: 'Test Title_migrate 59',
      akaNames: [],
      sapCode: 59,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 59',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 71
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012412'
        }
      },
      id: 1012412
    },
    {
      title: 'Test Title_migrate 60',
      akaNames: [],
      sapCode: 60,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 60',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 72
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012413'
        }
      },
      id: 1012413
    },
    {
      title: 'Test Title_migrate 61',
      akaNames: [],
      sapCode: 61,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 61',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 73
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012414'
        }
      },
      id: 1012414
    },
    {
      title: 'Test Title_migrate 62',
      akaNames: [],
      sapCode: 62,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 62',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 74
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012415'
        }
      },
      id: 1012415
    },
    {
      title: 'Test Title_migrate 63',
      akaNames: [],
      sapCode: 63,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 63',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 75
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012416'
        }
      },
      id: 1012416
    },
    {
      title: 'Test Title_migrate 64',
      akaNames: [],
      sapCode: 64,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 64',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 76
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012417'
        }
      },
      id: 1012417
    },
    {
      title: 'Test Title_migrate 65',
      akaNames: [],
      sapCode: 65,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 65',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 77
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012418'
        }
      },
      id: 1012418
    },
    {
      title: 'Test Title_migrate 66',
      akaNames: [],
      sapCode: 66,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 66',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 78
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012419'
        }
      },
      id: 1012419
    },
    {
      title: 'Test Title_migrate 67',
      akaNames: [],
      sapCode: 67,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 67',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 79
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012420'
        }
      },
      id: 1012420
    },
    {
      title: 'Test Title_migrate 68',
      akaNames: [],
      sapCode: 68,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 68',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 80
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012421'
        }
      },
      id: 1012421
    },
    {
      title: 'Test Title_migrate 69',
      akaNames: [],
      sapCode: 69,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 69',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 81
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012422'
        }
      },
      id: 1012422
    },
    {
      title: 'Test Title_migrate 70',
      akaNames: [],
      sapCode: 70,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 70',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 82
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012423'
        }
      },
      id: 1012423
    },
    {
      title: 'Test Title_migrate 71',
      akaNames: [],
      sapCode: 71,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 71',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 83
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012424'
        }
      },
      id: 1012424
    },
    {
      title: 'Test Title_migrate 72',
      akaNames: [],
      sapCode: 72,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 72',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 84
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012425'
        }
      },
      id: 1012425
    },
    {
      title: 'Test Title_migrate 73',
      akaNames: [],
      sapCode: 73,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 73',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 85
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012426'
        }
      },
      id: 1012426
    },
    {
      title: 'Test Title_migrate 74',
      akaNames: [],
      sapCode: 74,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 74',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 86
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012427'
        }
      },
      id: 1012427
    },
    {
      title: 'Test Title_migrate 75',
      akaNames: [],
      sapCode: 75,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 75',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 87
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012428'
        }
      },
      id: 1012428
    },
    {
      title: 'Test Title_migrate 76',
      akaNames: [],
      sapCode: 76,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 76',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 88
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012429'
        }
      },
      id: 1012429
    },
    {
      title: 'Test Title_migrate 77',
      akaNames: [],
      sapCode: 77,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 77',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 89
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012430'
        }
      },
      id: 1012430
    },
    {
      title: 'Test Title_migrate 78',
      akaNames: [],
      sapCode: 78,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 78',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 90
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012431'
        }
      },
      id: 1012431
    },
    {
      title: 'Test Title_migrate 79',
      akaNames: [],
      sapCode: 79,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 79',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 91
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012432'
        }
      },
      id: 1012432
    },
    {
      title: 'Test Title_migrate 80',
      akaNames: [],
      sapCode: 80,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 80',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 92
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012433'
        }
      },
      id: 1012433
    },
    {
      title: 'Test Title_migrate 81',
      akaNames: [],
      sapCode: 81,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 81',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 93
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012434'
        }
      },
      id: 1012434
    },
    {
      title: 'Test Title_migrate 82',
      akaNames: [],
      sapCode: 82,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 82',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 94
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012435'
        }
      },
      id: 1012435
    },
    {
      title: 'Test Title_migrate 83',
      akaNames: [],
      sapCode: 83,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 83',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 95
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012436'
        }
      },
      id: 1012436
    },
    {
      title: 'Test Title_migrate 84',
      akaNames: [],
      sapCode: 84,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 84',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 96
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012437'
        }
      },
      id: 1012437
    },
    {
      title: 'Test Title_migrate 85',
      akaNames: [],
      sapCode: 85,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 85',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 97
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012438'
        }
      },
      id: 1012438
    },
    {
      title: 'Test Title_migrate 86',
      akaNames: [],
      sapCode: 86,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 86',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 98
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012439'
        }
      },
      id: 1012439
    },
    {
      title: 'Test Title_migrate 87',
      akaNames: [],
      sapCode: 87,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 87',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 99
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012440'
        }
      },
      id: 1012440
    },
    {
      title: 'Test Title_migrate 88',
      akaNames: [],
      sapCode: 88,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 88',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 100
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012441'
        }
      },
      id: 1012441
    },
    {
      title: 'Test Title_migrate 89',
      akaNames: [],
      sapCode: 89,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 89',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 101
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012442'
        }
      },
      id: 1012442
    },
    {
      title: 'Test Title_migrate 90',
      akaNames: [],
      sapCode: 90,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 90',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 102
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012443'
        }
      },
      id: 1012443
    },
    {
      title: 'Test Title_migrate 91',
      akaNames: [],
      sapCode: 91,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 91',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 103
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012444'
        }
      },
      id: 1012444
    },
    {
      title: 'Test Title_migrate 92',
      akaNames: [],
      sapCode: 92,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 92',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 104
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012445'
        }
      },
      id: 1012445
    },
    {
      title: 'Test Title_migrate 93',
      akaNames: [],
      sapCode: 93,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 93',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 105
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012446'
        }
      },
      id: 1012446
    },
    {
      title: 'Test Title_migrate 94',
      akaNames: [],
      sapCode: 94,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 94',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 106
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012447'
        }
      },
      id: 1012447
    },
    {
      title: 'Test Title_migrate 95',
      akaNames: [],
      sapCode: 95,
      deals: [
        {
          unionLookup: {
            name: 'SAG',
            type: 'UNION',
            displayOrder: null,
            id: 25
          },
          performerPartyId: 3486641,
          performerRole: 'Lawyer 95',
          performer: {
            firstName: 'Jeff',
            middleName: null,
            lastName: 'Daniels',
            agencyName: ['ICM', 'ICM2'],
            partyId: null
          },
          id: 107
        }
      ],
      _links: {
        self: {
          href: 'http://dev.concept2alize.com/fc/dev1/fc/api/project/1012448'
        }
      },
      id: 1012448
    }
  ];

  public static readonly DEFAULT_COL_DEFS_WORK_ACTIVITY: any[] = [
    {
      headerName: '',
      field: 'icon',
      cellRendererSelector: function(params) {
        const expandComponent = {
          component: 'expandComponent'
        };

        if (params.data.totalWork !== '1D') {
          return expandComponent;
        } else {
          return null;
        }
      },
      suppressSizeToFit: true,
      suppressResize: true,
      suppressFilter: true,
      width: 32
    },
    {
      headerName: 'Performer',
      field: 'performer',
      editable: false,
      cellRendererFramework: ImageComponent,
      width: 375
    },
    {
      headerName: 'Activity',
      field: 'activity',
      cellRendererFramework: ListComponent,
      cellEditorFramework: ListEditorComponent,
      editable: true
    },
    {
      headerName: 'Period',
      field: 'period',
      cellRendererFramework: ListComponent,
      cellEditorFramework: ListEditorComponent,
      editable: true
    },
    {
      headerName: 'Start Date',
      field: 'startDate',
      cellRendererFramework: ListComponent,
      cellEditorFramework: ListEditorComponent,
      editable: true
    },
    {
      headerName: 'Role #',
      field: 'roleNum',
      filter: 'agNumberColumnFilter'
    },
    {
      headerName: 'Role',
      field: 'role',
      floatingFilterComponentParams: { suppressFilterButton: true }
    },
    {
      headerName: 'Day Details',
      children: [
        {
          headerName: 'Grntee',
          field: 'guarantee',
          cellRendererFramework: ListComponent,
          cellEditorFramework: ListEditorComponent,
          editable: true,
          suppressFilter: true
        },
        {
          headerName: 'Princ Free',
          field: 'princFree',
          cellRendererFramework: ListComponent,
          cellEditorFramework: ListEditorComponent,
          editable: true,
          suppressFilter: true
        },
        {
          headerName: 'Post Free',
          field: 'postFree',
          cellRendererFramework: ListComponent,
          cellEditorFramework: ListEditorComponent,
          editable: true,
          suppressFilter: true
        },
        {
          headerName: 'Post Rmain',
          field: 'postRemain',
          cellRendererFramework: ListComponent,
          cellEditorFramework: ListEditorComponent,
          editable: true,
          suppressFilter: true
        },
        {
          headerName: 'Total Work',
          field: 'totalWork',
          suppressFilter: true
        },
        {
          headerName: 'Notes',
          field: 'notes',
          cellRendererFramework: ListComponent,
          cellEditorFramework: ListEditorComponent,
          editable: true,
          suppressFilter: true
        }
      ]
    }
  ];

  public static readonly DEFAULT_ROW_DATA_WORK_ACTIVITY: any[] = [
    {
      icon: '',
      performer: 'Mike Adams',
      roleNum: 888,
      role: 'Stunt',
      totalWork: '2D',
      image:
        'https://vignette.wikia.nocookie.net/mario/images/8/80/Mario_Trofeo_SSBB.jpg/revision/latest?cb=20100929153926&path-prefix=es',
      details: [
        {
          activity: 'Start/Work/Finish',
          period: '',
          startDate: '04/15/2017',
          guarantee: '1D',
          princFree: '',
          postFree: '',
          postRemain: '',
          notes: ''
        },
        {
          activity: 'Start/Work/Finish',
          period: '',
          startDate: '04/16/2017',
          guarantee: '1D',
          princFree: '',
          postFree: '',
          postRemain: '',
          notes: ''
        }
      ]
    },
    {
      icon: '',
      performer: 'James Alfonso',
      roleNum: 888,
      role: 'Stunt',
      totalWork: '7D',
      image:
        'https://vignette.wikia.nocookie.net/supermarioitalia/images/8/82/Lio.jpg/revision/latest?cb=20121229162131&path-prefix=it',
      details: [
        {
          activity: 'Start/Work/Finish',
          period: '1st',
          startDate: '02/02/2017',
          guarantee: '1D',
          princFree: '',
          postFree: '',
          postRemain: '',
          notes: ''
        },
        {
          activity: 'Start/Work/Finish',
          period: '1st',
          startDate: '02/03/2017',
          guarantee: '1D',
          princFree: '',
          postFree: '',
          postRemain: '',
          notes: 'Off-Camera'
        },
        {
          activity: 'Start/Work/Finish',
          period: '1st',
          startDate: '02/04/2017',
          guarantee: '1D',
          princFree: '',
          postFree: '',
          postRemain: '',
          notes: ''
        },
        {
          activity: 'Start/Work/Finish',
          period: '1st',
          startDate: '02/05/2017',
          guarantee: '1D',
          princFree: '',
          postFree: '',
          postRemain: '',
          notes: 'Off-Camera'
        },
        {
          activity: 'Start/Work/Finish',
          period: '1st',
          startDate: '02/06/2017',
          guarantee: '1D',
          princFree: '',
          postFree: '',
          postRemain: '',
          notes: ''
        },
        {
          activity: 'Start/Work/Finish',
          period: '1st',
          startDate: '02/07/2017',
          guarantee: '1D',
          princFree: '',
          postFree: '',
          postRemain: '',
          notes: ''
        },
        {
          activity: 'Start/Work/Finish',
          period: '1st',
          startDate: '02/08/2017',
          guarantee: '1D',
          princFree: '',
          postFree: '',
          postRemain: '',
          notes: 'Showed up late'
        }
      ]
    },
    {
      icon: '',
      performer: 'Casey Affleck',
      roleNum: 6,
      role: 'Virgil Malloy',
      totalWork: '1D',
      image:
        'https://vignette.wikia.nocookie.net/ssb/images/c/cc/Bowser_Trophy.jpg/revision/latest?cb=20090114140645',
      details: [
        {
          activity: 'Start/Work/Finish',
          period: '',
          startDate: '02/28/2017',
          guarantee: 'F',
          princFree: 5,
          postFree: 4,
          postRemain: 2,
          notes: 'Notes'
        }
      ]
    },
    {
      icon: '',
      performer: 'Newell Alexander',
      roleNum: 777,
      role: 'Voice Over',
      totalWork: '3D',
      image:
        'https://vignette.wikia.nocookie.net/ssb/images/b/bf/Toad_trophy.jpg/revision/latest?cb=20090128225949',
      details: [
        {
          activity: 'Start/Work/Finish',
          period: '1st',
          startDate: '02/25/2017',
          guarantee: '1D',
          princFree: '',
          postFree: '',
          postRemain: '',
          notes: 'Here are some notes that are a little longer.'
        },
        {
          activity: 'Start/Work/Finish',
          period: '1st',
          startDate: '02/26/2017',
          guarantee: '1D',
          princFree: '',
          postFree: '',
          postRemain: '',
          notes: ''
        },
        {
          activity: 'Start/Work/Finish',
          period: '1st',
          startDate: '02/27/2017',
          guarantee: '1D',
          princFree: '',
          postFree: '',
          postRemain: '',
          notes: 'More notes'
        }
      ]
    },
    {
      icon: '',
      performer: 'Frankie Jay Allison',
      roleNum: 57,
      role: 'High Roller Pit Boss',
      totalWork: '1D',
      image:
        'https://vignette.wikia.nocookie.net/ssb/images/3/3f/Wario_trophy_%28SSBM%29.jpg/revision/latest?cb=20090625145605',
      details: [
        {
          activity: 'Start/Work/Finish',
          period: 'Reh',
          startDate: '01/15/2017',
          guarantee: '1D',
          princFree: '',
          postFree: '',
          postRemain: '',
          notes: ''
        }
      ]
    }
  ];
}
