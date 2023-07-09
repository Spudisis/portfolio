import { makeAutoObservable } from "mobx";
class Store {
	constructor() {
		makeAutoObservable(this);
	}
	statusModal = false;
	changeStatusModal(modalActive: boolean) {
		this.statusModal = modalActive;
	}
}

export const StatusModal = new Store();
