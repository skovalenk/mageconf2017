## Installation

{MageConfCheckout.patch} - this file is responsible for adding module, that shows how to avoid session, db and frontend modifications 
in generic way.


### Components
New module is presented by 3 components: 
`Transaction` plugin which rollback transaction each time we click "Place Order" button
`Session` plugin which do not allow to modify session
`default.js` payment file, that is responsible for Placing Order on store front
