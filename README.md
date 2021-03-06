
Hi, thanks for taking a look at **A Full Stack of Timesheets**, a fun exercise in creating a RESTFUL API consumed by a React client.

You'll see that at the root level of this directory there are 2 repositories: `timesheets-backend-repo` & `timesheets-client-repo`.

Please cd into the backend repository and at the root level of that repository run `npm install` to grab all neded node modules. Then, use the `npm start` command, which will initiate the `server.js` entrypoint file and will begin serving on Port 8080 (and will show `Now up and running on port 8080` and `DB is up!!` in the console).

(Please note that development was done making use of a local MongoDB instance and that there is a fallback URL for local after the Mongo Atlas instance I'm making use of for demo purposes. If there's any issue with this please let me know!).

Should everything look good on the backend, make your way into the `timesheets-client-repo`, and run `npm install` on that repository's root level, and once dependencies are installed, run `npm start` which should open up a new browser tab (or window) with the the frontend portion of the app being served on Port 3000.

You should see a UI header with 2 links, a search bar and text below that, a table rendering all legal entries in the `timesheets` collection (the blank documents as a result of alternating rows are filtered out) and a small footer below.

If you click `Add new entry`, you should be taken to another page where you can add information to the form there and see it in the database when revisiting the homepage or by searching the client name put in.

*****************

I really enjoyed working on this and likely will keep working on it (curious about adding Regex for better searching; some CSS additions even though I've been on a minimalist aesthetic kick lately), but with respect to time wanted to focus on what was called for. Much appreciated!!
