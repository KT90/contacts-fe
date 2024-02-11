import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule, PageEvent} from "@angular/material/paginator";
import {ContactsService} from "../../services/contacts.service";


@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    RouterOutlet, MatInputModule, MatButton, MatTableModule, MatGridListModule,
    MatCardModule, MatMenuModule, RouterLink, MatPaginatorModule
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent implements OnInit {

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'codeName', 'phoneNumber'];
  pageSize: number = 10;
  pageNumber: number = 0;
  resultCount: number = 0;

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.getContacts(this.pageSize, this.pageNumber);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onPageChange(pageEvent: PageEvent) {
    this.getContacts(pageEvent.pageSize, pageEvent.pageIndex);
  }

  getContacts(pageSize: number, pageNumber: number): void {
    this.contactsService.getContacts(pageSize, pageNumber).subscribe(contacts => {
      this.dataSource = new MatTableDataSource(contacts.content);
      this.resultCount = contacts.totalElements;
    });
  }
}
