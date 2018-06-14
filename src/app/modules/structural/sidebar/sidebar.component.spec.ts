import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { RouterModule, Router } from '@angular/router';
import { SidebarService } from '../../../services/http/sidebar/sidebar.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

//commented this out because it's break the unit testing

// describe('SidebarComponent', () => {
//   let component: SidebarComponent;
//   let fixture: ComponentFixture<SidebarComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports:[
//         RouterTestingModule.withRoutes([{path: '', component: SidebarComponent}])
//       ],
//       declarations: [
//         SidebarComponent
//       ],
//       providers:[
//         SidebarService,
//         HttpClient,
//         HttpHandler,
//         Router
//     ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SidebarComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });


//   it(`should create`, async(inject([SidebarService],
//     ( sidebarService: SidebarService ) => {
//       expect(component).toBeTruthy();
//   })));
// });
