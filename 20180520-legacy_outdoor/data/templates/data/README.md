The `data/` folder is for holding data sources, intermediate building, and scripts for processing data.  This should hold the following folders:

* `data/lib/`: Scripts for data processing.  These could be bash scripts, or Javascript modules, etc.
* `data/sources/`: This is for original source data.  Overall, if the source data can be downloaded from somewhere or if the file is too large, these files should not be checked into versioning.  See the `.gitignore` to make exceptions.
* `data/build/`: Directory to store data that is processed, combined, converted, etc.  See the `.gitignore` to make exceptions.
