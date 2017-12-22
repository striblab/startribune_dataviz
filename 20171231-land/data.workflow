; /usr/bin/drake
;
; This file describes and performs the data processing
; workflow using Drake, a Make-like format focused on data.
; https://github.com/Factual/drake
;
; Full documentation (suggested to switch to Viewing mode)
; https://docs.google.com/document/d/1bF-OKNLIG10v_lMes_m4yyaJtAaJKtdK0Jizvi_MNsg/
;
; Suggested groups/tags of tasks:
; Download, Convert, Combine, Analysis, and Export
;
; Run with: drake -w data.workflow
;


; Base directory for all inputs and output.  Note that the $BASE variable
; is not used in the task definition (first line), but for the commands,
; it is needed.
BASE=data


; EXAMPLE: Download file. Using the %download tag, we can download
; all things with drake %download
sources/population-zip-code-2010.csv, %download <- [-timecheck]
  mkdir -p $BASE/sources
  wget -O $OUTPUT "https://data.lacity.org/api/views/nxs9-385f/rows.csv?accessType=DOWNLOAD"
  echo "If you have mutliple inputs and outputs, then you can do $INPUT, $INPUT2, $OUTPUT, $OUTPUT2, etc"

sources/youth-tobacco-survey.csv, %download <- [-timecheck]
  mkdir -p $BASE/sources
  wget -O $OUTPUT "https://chronicdata.cdc.gov/api/views/4juz-x2tp/rows.csv?accessType=DOWNLOAD"


; EXAMPLE: Convert to JSON
build/population-zip-code-2010.json, %convert <- sources/population-zip-code-2010.csv
  mkdir -p $BASE/build
  csvjson $INPUT > $OUTPUT


; EXAMPLE: Raw JS processing (if more than a few lines, use a separate file)
%youth-tobacco-survey.analysis, %analysis <- sources/youth-tobacco-survey.csv [node]
  const fs = require('fs');
  const csv = require('d3-dsv').dsvFormat(',');
  let survey = csv.parse(fs.readFileSync(process.env.INPUT, 'utf-8'));
  console.log('Survey rows: ', survey.length);


; Cleanup tasks
%sources.cleanup, %cleanup, %WARNING <-
  rm -rv $BASE/sources/*
%build.cleanup, %cleanup, %WARNING <-
  rm -rv $BASE/build/*
