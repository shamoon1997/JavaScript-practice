class NotesStore {
	constructor() {
		this.states = ['completed', 'active', 'others'];
		this.Notes = [];
	}
	addNote(state, name) {
		if (!name) {
			throw `Name cannot be empty`;
		}
		if (!this.states.includes(state)) {
			throw `Error: Invalid state ${state}`;
		}
		this.Notes.push({ name: name, state: state });
	}
	getNotes(state) {
		if (!this.states.includes(state)) {
			throw `Error: Invalid state ${state}`;
		}
		if (!this.Notes.filter((note) => note.state == state)) {
			return [];
		}
		let filteredNotes = this.Notes.filter((note) => {
			if (note.state == state) {
				return note.name;
			}
		});
		filteredNotes = filteredNotes.map((note) => note.name);
		return filteredNotes;
	}
}
let noteStore = new NotesStore();
noteStore.addNote('active');
