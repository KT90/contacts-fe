import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {NgIf} from "@angular/common";
import {ContactsService} from "../../services/contacts.service";
import {Contact} from "../../model/Contact";

@Component({
  selector: 'app-contact-add',
  standalone: true,
  imports: [
    RouterOutlet, MatInputModule, MatButton, MatTableModule, MatGridListModule,
    MatCardModule, MatMenuModule, RouterLink, NgIf, ReactiveFormsModule,
  ],
  templateUrl: './contact-add.component.html',
  styleUrl: './contact-add.component.scss'
})
export class ContactAddComponent {

  constructor(private contactsService: ContactsService, private route: ActivatedRoute,
              private router: Router,) {
  }

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    codeName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
  });

  addContact(): void {
    this.contactsService.addContact((this.contactForm.value) as Contact).subscribe(contact => {
      this.router.navigate(['..'], {relativeTo: this.route});
    });
  }

}
