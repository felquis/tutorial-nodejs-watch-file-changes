var fs = require('fs')
var path = require('path')
var util = require('util')

// https://nodejs.org/docs/latest-v5.x/api/fs.html#fs_fs_watch_filename_options_listener
fs.watch(path.resolve(__dirname, 'folder'), whenSomethingChanges)

/*
  @param event: Describes what happened to filename, change, rename
  @param filename
*/
function whenSomethingChanges(event, filename) {
	if (filename) {
		util.log(`${event} - ${filename}`)
	} else {
		util.log('something happened', event)
	}
}
