import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { DataService } from '../data.service';
import { Hotel } from '../models/hotel.model';

@Component({
  selector: 'app-bodyarea',
  templateUrl: './bodyarea.component.html',
  styleUrls: ['./bodyarea.component.scss']
})
export class BodyareaComponent implements OnInit {

  displayedColumns: string[] = ['name', 'categories','city','country','province'];
  dataSource = new MatTableDataSource<Hotel>();
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private data: DataService) { 
    data.getHotelListing().subscribe((response) => {
      this.dataSource.data = response;
  });
  }

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}