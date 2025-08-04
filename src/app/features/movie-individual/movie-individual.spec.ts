import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieIndividual } from './movie-individual';

describe('MovieIndividual', () => {
  let component: MovieIndividual;
  let fixture: ComponentFixture<MovieIndividual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieIndividual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieIndividual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
