import PouchDB from "pouchdb";
import PouchDbFind from "pouchdb-find";

PouchDB.plugin(PouchDbFind)

const DATABASE_NAME = "notes"

// PouchDB.debug.enable('*');

const pouch = new PouchDB(DATABASE_NAME)

export default pouch