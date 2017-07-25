# Star Tribune - Signs point to a growing economy

Created by [Frey Hargarten](https://github.com/jeffhargarten).

## Data

Source data can be found in `builds/development/data/_raw`.

### Processing

In order to process the data and get to the form that is used in the visual piece:

1. Convert to CSV: `in2csv --sheet="<name of sheet you want here>" builds/development/data/maindata.xlsx | tail -n +4 > builds/development/data/maindata.csv`
2. Parse and compress: `node builds/development/data/maindata.js`
    * This will output: `builds/development/data/maindata.json`
    Or just use something like [Mister Data Converter](https://shancarter.github.io/mr-data-converter/) to spit out JSON from tabular data

## Development

Most commands are assumed to be on the command line (Terminal on a Mac).

### Prerequisites

The following are probably already installed on your computer if you have worked on similar projects.

1. Install Git
    * On a Mac, install Homebrew, then: `brew install git`
2. Install NodeJS
    * On a Mac: `brew install node`
3. Install global Node dependencies: `npm install -g gulp`

### Install

1. Get code and enter project: `git clone https://github.com/striblab/20150111-econ.git && cd 20150111-econ.git`
2. Install local dependencies: `npm install`

### Local development

1. Run `gulp` to build the code and run a local webserver at `http://localhost:3000`.
2. Make changes to the code and the changes should be automatically updated in your browser.

### Project structure and editing

* `builds/development`: Main project here.
    * `index.html`: Edit HTML here.
* `components`: Helpful bits of code to be used in the project if desired.
    * `sass/style.scss`: SASS that gets built into `builds/development/css/style.css`
    * `scripts/st_script.js`: JS that gets compiled into `builds/development/js/script.css`


## Deployment

Deployment is managed in specific repositories:

* [Data Drop](https://github.com/striblab/datadrop)
* [General visuals](https://github.com/striblab/startribune_dataviz)
* [Elections](https://github.com/striblab/2016election)

The following will change based on which deployment repo this is going to and where you have that repository locally.

1. Build the production version: `NODE_ENV=production gulp`
2. Copy files (update path as needed): `mkdir -p ../20150111-econ/ && rsync -rav ./ ../20150111-econ/ --exclude=".git" --exclude="node_modules" --exclude=".sass-cache" --delete-after`
3. Update the relevant deployment repo.

## Credits

Built using [NVD3](http://nvd3.org/) and [jQuery](https://github.com/jquery/jquery).