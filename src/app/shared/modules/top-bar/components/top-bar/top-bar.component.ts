import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {Store, select} from '@ngrx/store'

import {ICurrentUser} from 'src/app/shared/types/currentUser.interface'
import {
  isLoggedInSelector,
  isAnonymousSelector,
  currentUserSelector
} from 'src/app/auth/store/selectors'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<ICurrentUser | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}