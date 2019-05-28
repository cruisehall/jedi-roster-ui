import { Component, OnInit } from '@angular/core';
import { JediService } from '../shared/car/car.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-jedi-list',
  templateUrl: './jedi-list.component.html',
  styleUrls: ['./jedi-list.component.css']
})
export class JediListComponent implements OnInit {
  jedis: Array<any>;

  constructor(private carService: JediService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.jedis = data;
      for (const car of this.jedis) {
        this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
      }
    });
  }
}
