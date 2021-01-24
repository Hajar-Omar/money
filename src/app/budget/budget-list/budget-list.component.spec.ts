import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from 'src/app/testing/testing.module';

import { BudgetListComponent } from './budget-list.component';

describe('BudgetListComponent', () => {
  let component: BudgetListComponent;
  let fixture: ComponentFixture<BudgetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[TestingModule],
      declarations: [ BudgetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
