import { computed, makeObservable, observable } from "mobx"

class ObservableAuthStore {
	email = ""
	exp = 0

	constructor() {
		makeObservable(this, {
			email: observable,
			exp: observable,
			isAuthenticated: computed,
		})
	}

	get isAuthenticated() {
		return this.email !== "" || new Date().getTime() < this.exp
	}

	load(token: string, data: AuthData) {
		localStorage.setItem("file-sharing-token", token)
		this.email = data.sub
		this.exp = data.exp
	}
}

export default new ObservableAuthStore()
export { ObservableAuthStore }
