import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})export class PersistenceService {
		constructor() { }

		set(key: string, value: any): void {
			try {
				localStorage.setItem(key, JSON.stringify(value))
			} catch (error) {
				console.error('Error Setting Item to local storage', error)
			}
		}

		get(key: string): any {
			try {
				return JSON.parse(localStorage.getItem(key))
			} catch (error) {
				console.error('Error getting Item', error)
				return null
			}
		}

}