import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectionBridgeComponent } from './selection-bridge.component';

describe('SelectionBridgeComponent', () => {
  let component: SelectionBridgeComponent;
  let fixture: ComponentFixture<SelectionBridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionBridgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectionBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
