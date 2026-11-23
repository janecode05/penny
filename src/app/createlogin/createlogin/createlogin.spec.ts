import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Createlogin } from './createlogin';

describe('Createlogin', () => {
  let component: Createlogin;
  let fixture: ComponentFixture<Createlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createlogin],
    }).compileComponents();

    fixture = TestBed.createComponent(Createlogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
