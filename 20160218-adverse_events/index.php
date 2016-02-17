<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Adverse Medical Events Database</title>
  <meta name="description" content="Adverse Medical Events Database">
  <meta name="author" content="Frey Hargarten - StarTribune">

  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />
  <link rel="stylesheet" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.min.css" /> 
  <link rel="stylesheet" href="//cdn.datatables.net/responsive/1.0.6/css/dataTables.responsive.css" />
  <link href="../_common_resources/charts/c3-master/c3.css" rel="stylesheet" type="text/css">
  
  <style>
     #wrapper { width:100%; }
     .dataTable { min-height:500px; }
     .dataTables_info { display:block !important; font-family: "Benton Sans",Helvetica,Arial,sans-serif; }

     @media (max-width:420px) {
    .dataTable { min-height:70px; }
     }

  </style> 
</head>

<body>
<div id="wrapper">

<div class="chartTitle">Hospitals with 6+ adverse events 2015</div>
<div id="chart"></div>

<div class="chartTitle">Database of adverse hospital events 2005-2016</div>
<table width="100%" cellspacing="0" class="display compact responsive nowrap" id="events"><thead><tr><th>Year</th><th>Hospital</th><th>City</th><th>Event</th><th>Victims</th><th>Deaths</th><th>Injuries</th><th>Type</th></tr></thead></table>
<a href='https://docs.google.com/spreadsheets/d/1jvziIFqm2fkcTgpigumWV2aM8XBPy6SjxE5_pAt9BII/pub?output=csv' target='new_'><button class='downloadButton'>&#9660; Download Data</button></a>

  </div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src='//cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js'></script>
<script src="//cdn.datatables.net/responsive/1.0.6/js/dataTables.responsive.js"></script>
<script src="../_common_resources/charts/c3-master/c3.min.js"></script>

<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1jvziIFqm2fkcTgpigumWV2aM8XBPy6SjxE5_pAt9BII&sheet=events
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1jvziIFqm2fkcTgpigumWV2aM8XBPy6SjxE5_pAt9BII&sheet=summary

// d3.json("https://script.googleusercontent.com/macros/echo?user_content_key=YLVlhBqKs8AnJ0RA7Kk4DOxium_6SN1242TDElyv-SOVFCP4PrW6BEP1wq2xyyG1SnJ18QHB-xRPB65_JYjK_YFuDETKMg2hOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6Tct0uhtdULdPODE_LKqk4kCrdCwSt6tWd9dF2eb9x36s7SRLQ5icCllZqqparZR8nGFMHuQvceYyp1w9teQfukQ&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, json) {
// d3.json("https://script.googleusercontent.com/macros/echo?user_content_key=dTXQn2m-LgaUeuOdTNltbPbJOxj2xPzPG2iJx_FjDyECT2iKsBDzy9jdjNSDaSrI94rhZnGQ47gSCG3Y5JOUfTpB9qvRZ4ZhOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6Tct0uhtdULdPODE_LKqk4kCrdCwSt6tWd9dF2eb9x36s7SRLQ5icCllZqqparZR8nzd_dgT7OAib7KV_zKQeAAA&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, json2) {

  <?php

$jsonDataEvents = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=YLVlhBqKs8AnJ0RA7Kk4DOxium_6SN1242TDElyv-SOVFCP4PrW6BEP1wq2xyyG1SnJ18QHB-xRPB65_JYjK_YFuDETKMg2hOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6Tct0uhtdULdPODE_LKqk4kCrdCwSt6tWd9dF2eb9x36s7SRLQ5icCllZqqparZR8nGFMHuQvceYyp1w9teQfukQ&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataChart = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=dTXQn2m-LgaUeuOdTNltbPbJOxj2xPzPG2iJx_FjDyECT2iKsBDzy9jdjNSDaSrI94rhZnGQ47gSCG3Y5JOUfTpB9qvRZ4ZhOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6Tct0uhtdULdPODE_LKqk4kCrdCwSt6tWd9dF2eb9x36s7SRLQ5icCllZqqparZR8nzd_dgT7OAib7KV_zKQeAAA&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

//THESE ADD THEM TO JAVASCRIPT VARIABLES WE CAN ACCESS THROUGHOUT THE DOCUMENT
var dataLoadEvents = <?php echo $jsonDataEvents; ?>;
var dataLoadChart = <?php echo $jsonDataChart; ?>;

data = dataLoadEvents.events;
dataChart = dataLoadChart.summary;

//CHART
var  padding = {
        top: 20,
        right: 40,
        bottom: 20,
        left: 270,
    };

var chartDecade = c3.generate({
        bindto: '#chart',
        size: { height: 600 },
        padding: padding,
        data: {
            json: dataChart,
            keys: {
                x: 'hospital',
                value: ['count']
            },
            names: {
              'count': 'Adverse Events'
            },
            types: {
            'count': 'bar'
            }
        },
       bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
      },
        axis: {
          rotated: true,
          y: {
            tick: {
             values: ['0', '50', '100'],
             format: d3.format('r')
            }
        },
        x: {
            type: 'category',
            tick: {
                // format: '%Y',
                multiline: false
            }
          }
        },
      subchart: { show: false },
        color: { pattern: ['#CCC'] },
    });


//TABLE
  $(document).ready(function() {

           var eventsTable = $('#events').DataTable( {
                responsive: {
        details: {
            type: 'row'
        }
    },
                "bServerSide":false,
                "bProcessing":true,
                "sAjaxDataProp": "feed.entry",
                "order": [[ 0, "desc" ]],
                // "scrollY": "300px",
                // "scrollCollapse": true,
                // "paging": false,
                "oLanguage": {"sSearch": ""},
                "sAjaxSource": "https://spreadsheets.google.com/feeds/list/1jvziIFqm2fkcTgpigumWV2aM8XBPy6SjxE5_pAt9BII/od6/public/values?&alt=json",
                "aoColumns": [                 
                    { "mDataProp": "gsx$year.$t" },
                    { "mDataProp": "gsx$hospital.$t" },
                    { "mDataProp": "gsx$city.$t" },
                    { "mDataProp": "gsx$category.$t" },
                    { "mDataProp": "gsx$number.$t" },
                    { "mDataProp": "gsx$death.$t" },
                    { "mDataProp": "gsx$injury.$t" },
                    { "mDataProp": "gsx$catcode.$t" },
                            ]
            } );

    $('.dataTables_filter input').attr("placeholder", "Enter keyword");

        } );

    $(".dataTable").removeClass("nowrap");

// });
// });
</script>

</html>