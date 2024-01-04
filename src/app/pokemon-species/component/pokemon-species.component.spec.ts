import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSpeciesComponent } from './pokemon-species.component';

describe('PokemonComponent', () => {
  let component: PokemonSpeciesComponent;
  let fixture: ComponentFixture<PokemonSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSpeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
