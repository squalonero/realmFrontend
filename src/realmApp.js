import Realm from 'realm';

// Invokes the shared instance of the Realm app.
// TODO: Create a Realm App instance with your Realm app ID.

const app = new Realm.App({id: 'tasktracker-blema'});

export default app;
