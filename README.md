## Watch files

When a file is:
	changed: emmits the `change` event
	renamed: emmits the `rename` event
	deleted: emmits the `rename` event
	created: emmits the `rename` event

Clone this repo, and run
```sh
npm start

# or

node index.js
```

Print screen
![print screen showing logs in the terminal, while I edit the files in the watched directory](assets/print-001.png)
