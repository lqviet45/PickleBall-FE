import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentOwnerComponent } from './content-owner.component';

describe('ContentOwnerComponent', () => {
  let component: ContentOwnerComponent;
  let fixture: ComponentFixture<ContentOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentOwnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
