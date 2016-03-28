<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Charter School Segregation</title>
  <meta name="description" content="Charter School Segregation">
  <meta name="author" content="Jeff Hargarten - StarTribune">

  
  <link href="js/c3-master/c3.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />
  
  <style>
     .chart { margin:10px; height:300px;} }
     .demographic { font-family:"Benton Sans",Helvetica,Arial,sans-serif; }
     .chatter { padding-bottom:10px; }
     #poverty_white .c3-grid line { stroke: none; }
     #poverty_white .c3-axis-x > path.domain, #poverty_white .tick > line[x2="-6"] { visibility: hidden; }
     #poverty_minority .c3-grid line { stroke: none; }
     #poverty_minority .c3-axis-x > path.domain, #poverty_minority .tick > line[x2="-6"] { visibility: hidden; }
     #poverty_integrated .c3-grid line { stroke: none; }
     #poverty_integrated .c3-axis-x > path.domain, #poverty_integrated .tick > line[x2="-6"] { visibility: hidden; }

     #proficiency_white .c3-grid line { stroke: none; }
     #proficiency_white .c3-axis-x > path.domain, #proficiency_white .tick > line[x2="-6"] { visibility: hidden; }
     #proficiency_minority .c3-grid line { stroke: none; }
     #proficiency_minority .c3-axis-x > path.domain, #proficiency_minority .tick > line[x2="-6"] { visibility: hidden; }
     #proficiency_integrated .c3-grid line { stroke: none; }
     #proficiency_integrated .c3-axis-x > path.domain, #proficiency_integrated .tick > line[x2="-6"] { visibility: hidden; }

     .c3-line-Charters { stroke-width: 5px !important; }

     .bigTitle { width:90%; margin-left:auto; margin-right:auto; font-family:"Benton Sans",Helvetica,Arial,sans-serif; font-weight:900; font-size:1.5em; text-align:center; padding-bottom:10px; border-bottom:2px solid #ddd; }
  </style> 
</head>

<body>
  <div id="wrapper">
<div class="chartTitle">Percentage of students in racially segregated schools</div>
<div class="chatter">Charter schools have been consistently more segregated than others since they first launched in the state in 1995, although the overall percentage of charter students attending a segregated school declined slightly last year.</div>
<div class="chart" id="breakdown"></div>

<div class="chartTitle">Predominantly minority schools are most common</div>
<div class="chatter">The percentage of elementary-level charter schools in the Twin Cities, by year, divided up by whether the school was integrated, predominantly white or predominantly minority.</div>
<div class="chart" id="demographics"></div>

<div class="chartTitle">Socioeconomic segregation also common in charter schools</div>
<div class="chatter">Predominantly minority charter schools also have very high rates of poverty, according to the percentage of students on a federal free or reduced-price lunch program in the 2014-15 school year.</div>
<div class="demographic">Predominantly white schools</div>
<div class="chart" id="poverty_white"></div>
<div class="demographic">Predominantly minority schools</div>
<div class="chart" id="poverty_minority"></div>
<div class="demographic">Integrated schools</div>
<div class="chart" id="poverty_integrated"></div>

<div class="chartTitle">Charter school standardized test proficiency compared to other schools</div>
<div class="chatter">The percentage of students who were proficient on math and reading standardized tests in the 2014-15 schoolyear, by the demographic makeup and location of the schools.</div>
<div class="demographic">Predominantly white schools</div>
<div class="chart" id="proficiency_white"></div>
<div class="demographic">Predominantly minority schools</div>
<div class="chart" id="proficiency_minority"></div>
<div class="demographic">Integrated schools</div>
<div class="chart" id="proficiency_integrated"></div>


<a href='https://docs.google.com/spreadsheets/d/14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M/pub?output=xlsx' target='new_'><button class='downloadButton'>&#9660; Download Data</button></a>
</div>

</body>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="js/c3-master/c3.min.js"></script>

<script>
// $("#headerDiv").sticky({topSpacing:1});

</script>
<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M&sheet=charter_breakdown
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M&sheet=charter_demographics
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M&sheet=charters_poverty_white
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M&sheet=charters_poverty_minority
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M&sheet=charters_poverty_integrated
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M&sheet=charters_proficiency_white
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M&sheet=charters_proficiency_minority
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M&sheet=charters_proficiency_integrated

//THESE LOAD DIFFERENT TABS OF THE GOOGLE SHEET INTO SEPERATE JSON STRINGS, USING THE ACTUAL URLS
<?php

$jsonDataBreakdown = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=IyAA37ei8WZg3bN97a_XFkCwkhmmpdDw3n6AqiGEywtmb9uTQn_0_A6PGMfTqNqk1lPDdw76PUx-qcNrYwrIADV2MAMw5PxDOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TAII-ngvhBapgn5m2jpYmuJX8hhM_lhZLQqupDWBH9vvDqMlPpvlQMPv6ttTnn03tW0Ar8EAym28BrZ6Y4W6Ze4TUFkrULxsJ&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataDemographics = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=wky864XMmJMuO2fytUYLxSetvEG9z7GOrGbDIM4bbWzFeS5ulK5yIF3GbND_3DAz-brFDkBiNCz64UzPR1qngeDqGLDAubiyOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TAII-ngvhBapgn5m2jpYmuJX8hhM_lhZLQqupDWBH9vvDqMlPpvlQMPv6ttTnn03tW0Ar8EAym2-abIMBK4atXe6mzTB-34ahUzJJbpPWdOo&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataPovertyWhite = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=2lq8b1dwd7exisxs9nBy53NcR-8MCJla3cdqiONL0Nk3BjecN5w3uEuwCuqh7Z11_s0XXpPcZ3v64UzPR1qngYAvniGWeD1nOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TAII-ngvhBapgn5m2jpYmuJX8hhM_lhZLQqupDWBH9vvDqMlPpvlQMPv6ttTnn03tW0Ar8EAym2-lxiqG-a4TG-H6g1WueiLsEWzGHbYf100&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataPovertyMinority = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=xWXt-M6XS9OYFkRHsJnCa-lUkDTdGsmeDUL6QzBHgbvC4D_KAs6h-QbtKRoVk-7fkGG9l7zJ6bb64UzPR1qngdmOIyGswx1AOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TAII-ngvhBapgn5m2jpYmuJX8hhM_lhZLQqupDWBH9vvDqMlPpvlQMPv6ttTnn03tW0Ar8EAym2-lxiqG-a4TG-H6g1WueiLsPznSGBcJYr0&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataPovertyIntegrated = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=j4VMcH9WYYaLnWqCa-JVlcHUzqZ2HC8EHWriqsGFEqpBlChdusVno3gcIQ106W6-WmwO39J8RrL64UzPR1qngVkiUqdFiY2HOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TAII-ngvhBapgn5m2jpYmuJX8hhM_lhZLQqupDWBH9vvDqMlPpvlQMPv6ttTnn03tW0Ar8EAym2-lxiqG-a4TG-H6g1WueiLsnIAajl4cUR68rfeEa1wB2w&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataProficiencyWhite = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=CCB0fowADY6OpaoFAhquE8VSDPF0calCryfwpQ3pROohHLlR4n-KXHdoOw36Rkpotc8B9S82xnFKh3ZoBN0xFO-swaEA8vVpOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TAII-ngvhBapgn5m2jpYmuJX8hhM_lhZLQqupDWBH9vvDqMlPpvlQMPv6ttTnn03tW0Ar8EAym2-lxiqG-a4TG9-jwcaFjWDb9ob_nOntp7-NqqwjtD8xNw&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataProficiencyMinority = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=awW2uJpvPRAgIT7eM0W68Y-SxCeJbdArR4fV5mRikf1cXGO7QXSpJT-1a-MoIKiWe3k3O4FhD0VKh3ZoBN0xFGEs2Xi5ZF_1OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TAII-ngvhBapgn5m2jpYmuJX8hhM_lhZLQqupDWBH9vvDqMlPpvlQMPv6ttTnn03tW0Ar8EAym2-lxiqG-a4TG9-jwcaFjWDbtTyuz4K70HBHIWn5trUDLg&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataProficiencyIntegrated = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=ivr4L739zX5IQqANdqHbWa2EBKVyhvV6j5qiS3ijdNhBXgG6KXhjlkpK2DWYOUJTMRZIsNTB4yJKh3ZoBN0xFMCQuatNRzavOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TAII-ngvhBapgn5m2jpYmuJX8hhM_lhZLQqupDWBH9vvDqMlPpvlQMPv6ttTnn03tW0Ar8EAym2-lxiqG-a4TG9-jwcaFjWDbpw5wjD4v6aytEuwD72hYWw&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

//THESE ADD THEM TO JAVASCRIPT VARIABLES WE CAN ACCESS THROUGHOUT THE DOCUMENT
var dataLoadBreakdown = <?php echo $jsonDataBreakdown; ?>;
var dataLoadDemographics = <?php echo $jsonDataDemographics; ?>;
var dataLoadPovertyWhite = <?php echo $jsonDataPovertyWhite; ?>;
var dataLoadPovertyMinority = <?php echo $jsonDataPovertyMinority; ?>;
var dataLoadPovertyIntegrated = <?php echo $jsonDataPovertyIntegrated; ?>;
var dataLoadProficiencyWhite = <?php echo $jsonDataProficiencyWhite; ?>;
var dataLoadProficiencyMinority = <?php echo $jsonDataProficiencyMinority; ?>;
var dataLoadProficiencyIntegrated = <?php echo $jsonDataProficiencyIntegrated; ?>;

dataBreakdown = dataLoadBreakdown.charter_breakdown;
dataDemographics = dataLoadDemographics.charter_demographics;
dataPovertyWhite = dataLoadPovertyWhite.charters_poverty_white;
dataPovertyMinority = dataLoadPovertyMinority.charters_poverty_minority;
dataPovertyIntegrated = dataLoadPovertyIntegrated.charters_poverty_integrated;
dataProficiencyWhite = dataLoadProficiencyWhite.charters_proficiency_white;
dataProficiencyMinority = dataLoadProficiencyMinority.charters_proficiency_minority;
dataProficiencyIntegrated = dataLoadProficiencyIntegrated.charters_proficiency_integrated;

</script>

<script>

//St. Paul: '#7d7373'
//Suburbs: #c7c7c7'
//Charters: '#ad1625'
//Minneapolis: '#3c4646'

var padding = {
        top: 40,
        right: 40,
        bottom: 30,
        left: 60
    };

var padding_bars = {
        left: 80
    };

var chart_segregated = c3.generate({
        bindto: '#breakdown',
        padding: padding,
        data: {
            json: dataBreakdown,
            keys: {
                x: 'year', // it's possible to specify 'x' when category axis
                value: ["Charters","Minneapolis","St._Paul","Inner_Suburbs","Outer_Suburbs"]
            },
          types: {
              'Charters': 'line',
              'Minneapolis': 'line',
              'St._Paul': 'line',
              'Inner_Suburbs': 'line',
              'Outer_Suburbs': 'line'
          },
            names: {
              'Charters': 'Charters',
              'Minneapolis': 'Minneapolis',
              'St._Paul': 'St. Paul',
              'Inner_Suburbs': 'Inner Suburbs',
              'Outer_Suburbs': 'Outer Suburbs'
            }
        },  
        color: { pattern: ['#ad1625', '#3c4646', '#7d7373', '#959595', '#c7c7c7'] },
        axis: {
            x: {
               // type: 'category',
               tick: { fit: true, values: ['1995', '1999', '2003', '2008', '2015'] }
            },
            y : {
            tick: { format: d3.format("%"), count: 6 },
            padding: {top: 5, bottom: 0} 
        }
       }
    });

var chart_demographics = c3.generate({
        bindto: '#demographics',
        padding: padding,
        data: {
            json: dataDemographics,
            keys: {
                x: 'YEAR', // it's possible to specify 'x' when category axis
                value: ["minority_pct","white_pct","integrated_pct"]
            },
            type: 'bar',
            groups: [ ['minority_pct', 'white_pct', 'integrated_pct'] ],
            names: {
              'integrated_pct': 'Integrated',
              'minority_pct': 'Segregated Minority',
              'white_pct': 'Segregated White',
            }
        }, 
        bar: { width: { ratio: 0.2 } },  
        color: { pattern: ['#8C101C', '#E71D32', '#FFA5B4'] },
        axis: {
            x: {
               // type: 'category',
               tick: { fit: true, values: ['1995', '1999', '2003', '2008', '2015'] }
            },
            y : {
              tick: { format: d3.format("%"), count: 6 },
              padding: {top: 0, bottom: 0} 
        }
       }
    });

var chart_poverty_white = c3.generate({
                bindto: '#poverty_white',
                padding: padding_bars,
                size: { height: 150 },
                bar: { width: 40 },
                data: {
                    json: dataPovertyWhite,
                    keys: {
                      x: 'category',
                      value: ["poverty"]
                    },
                    names: { 'poverty': 'Students in poverty', },
                    type: 'bar',
                    color: function(inColor, data) {
                        var colors = ['#3c4646', '#ad1625', '#c7c7c7'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                bar: { width: { ratio: 0.5  } },  
                color: { pattern: ['#3c4646', '#ad1625', '#c7c7c7'] }, 
                axis: {
                    rotated: true,
                    x: { type: 'category', tick: { multiline:false } },
                    y: { tick: { format: d3.format("%"), count: 6 }, padding: {top: 1970, bottom: 0}  }
                },
                tooltip: { grouped: false },
                legend: { show: false }
            });

var chart_poverty_minority = c3.generate({
                bindto: '#poverty_minority',
                padding: padding_bars,
                size: { height: 150 },
                bar: { width: 40 },
                data: {
                    json: dataPovertyMinority,
                    keys: {
                      x: 'category',
                      value: ["poverty"]
                    },
                    names: { 'poverty': 'Students in poverty', },
                    type: 'bar',
                    color: function(inColor, data) {
                        var colors = ['#c7c7c7', '#3c4646', '#7d7373', '#ad1625'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                bar: { width: { ratio: 0.5  } },  
                color: { pattern: ['#c7c7c7', '#3c4646', '#7d7373', '#ad1625'] },   
                axis: {
                    rotated: true,
                    x: { type: 'category', tick: { multiline:false } },
                    y: { tick: { format: d3.format("%"), count: 6 }, padding: {top: 45, bottom: 0}  }
                },
                tooltip: { grouped: false },
                legend: { show: false }
            });

var chart_poverty_integrated = c3.generate({
                bindto: '#poverty_integrated',
                padding: padding_bars,
                size: { height: 150 },
                bar: { width: 40 },
                data: {
                    json: dataPovertyIntegrated,
                    keys: {
                      x: 'category',
                      value: ["poverty"]
                    },
                    names: { 'poverty': 'Students in poverty', },
                    type: 'bar',
                    color: function(inColor, data) {
                        var colors = ['#ad1625', '#c7c7c7', '#7d7373', '#3c4646'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                bar: { width: { ratio: 0.5  } },  
                color: { pattern: ['#ad1625', '#c7c7c7', '#7d7373', '#3c4646'] },   
                axis: {
                    rotated: true,
                    x: { type: 'category', tick: { multiline:false } },
                    y: { tick: { format: d3.format("%"), count: 6 }, padding: {top: 515, bottom: 0}  }
                },
                tooltip: { grouped: false },
                legend: { show: false }
            });

var chart_proficiency_white = c3.generate({
                bindto: '#proficiency_white',
                padding: padding_bars,
                size: { height: 150 },
                bar: { width: 40 },
                data: {
                    json: dataProficiencyWhite,
                    keys: {
                      x: 'category',
                      value: ["pct_proficient"]
                    },
                    names: { 'pct_proficient': 'Percent proficient', },
                    type: 'bar',
                    color: function(inColor, data) {
                        var colors = ['#ad1625', '#c7c7c7', '#3c4646'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                bar: { width: { ratio: 0.5  } },  
                color: { pattern: ['#ad1625', '#c7c7c7', '#3c4646'] },   
                axis: {
                    rotated: true,
                    x: { type: 'category', tick: { multiline:false } },
                    y: { tick: { format: d3.format("%"), count: 6 }, padding: {top: 75, bottom: 0}  }
                },
                tooltip: { grouped: false },
                legend: { show: false }
            });

var chart_proficiency_minority = c3.generate({
                bindto: '#proficiency_minority',
                padding: padding_bars,
                size: { height: 150 },
                bar: { width: 40 },
                data: {
                    json: dataProficiencyMinority,
                    keys: {
                      x: 'category',
                      value: ["pct_proficient"]
                    },
                    names: { 'pct_proficient': 'Percent proficient', },
                    type: 'bar',
                    color: function(inColor, data) {
                        var colors = ['#3c4646', '#7d7373', '#ad1625', '#c7c7c7'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                bar: { width: { ratio: 0.5  } },  
                color: { pattern: ['#3c4646', '#7d7373', '#ad1625', '#c7c7c7'] },   
                axis: {
                    rotated: true,
                    x: { type: 'category', tick: { multiline:false } },
                    y: { tick: { format: d3.format("%"), count: 6 }, padding: {top: 720, bottom: 0}  }
                },
                tooltip: { grouped: false },
                legend: { show: false }
            });

var chart_proficiency_integrated = c3.generate({
                bindto: '#proficiency_integrated',
                padding: padding_bars,
                size: { height: 150 },
                bar: { width: 40 },
                data: {
                    json: dataProficiencyIntegrated,
                    keys: {
                      x: 'category',
                      value: ["pct_proficient"]
                    },
                    names: { 'pct_proficient': 'Percent proficient', },
                    type: 'bar',
                    color: function(inColor, data) {
                        var colors = ['#3c4646', '#7d7373', '#ad1625', '#c7c7c7'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                bar: { width: { ratio: 0.5  } },  
                color: { pattern: ['#3c4646', '#7d7373', '#ad1625', '#c7c7c7'] },   
                axis: {
                    rotated: true,
                    x: { type: 'category', tick: { multiline:false } },
                    y: { tick: { format: d3.format("%"), count: 6 }, padding: {top: 210, bottom: 0}  }
                },
                tooltip: { grouped: false },
                legend: { show: false }
            });
</script>

</html>