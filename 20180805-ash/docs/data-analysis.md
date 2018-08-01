# Data analysis

_<Describe where data is from and include URLs.  Think about how you or someone else may come back to this in a year and will need to know what is going on and may need to recreate things. Include things like nuances in the data or why certain sources were used.>_

## Data processing

The following are prerequisite steps that only need to be performed once globally and may already be installed.

1.  Install [Drake](https://github.com/Factual/drake), a data processing alternative to `make`. See the `data.workflow` for some notes about Drake.
    * On a Mac: `brew install drake`

To perform data processing steps, run the following. Drake will tell you what steps are needed and confirm with you.

* Main data processing steps: `drake -w data.workflow`
* _(example) Cleanup data folders (will delete files): `drake -w data.workflow %cleanup`_
* _(example) Run analysis steps; does not produce any output files: `drake -w data.workflow %analysis`_

1.  _Data processing steps here._
1.  ...
