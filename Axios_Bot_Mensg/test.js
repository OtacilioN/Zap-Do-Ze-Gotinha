const { Firestore } = require('@google-cloud/firestore');

// Create a new client
const firestore = new Firestore();

async function quickstart() {
  // Obtain a document reference.
  const document = firestore.doc('dialogflow/pipoco');

  // Read the document.
  let doc = await document.get();
  console.log(doc._fieldsProto)
  return doc._fieldsProto;
}
quickstart();
