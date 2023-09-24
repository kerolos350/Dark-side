# Setup the Dashboard


## What to change:

### 1. In all php files:

Change `/var/www/html` with the correct path.

like
`$file = "/var/www/html/JSON/login/$usrName.json";`

to `$file = "{path}/JSON/login/$usrName.json";`.

### 2. Creat folders:
Add `Pages` that contain the `In-prog` folder.

### 3. Change permissions:
Add write pirmission of server for `JSON` folder.