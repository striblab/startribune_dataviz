<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Doctor Payment Database</title>
  	<meta name="description" content="Doctor Payment Database">
 	<meta name="author" content="Jeff Hargarten - StarTribune">
	<meta name="generator" content="BBEdit 10.5" />
	
	<link rel="stylesheet" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.min.css" /> 
	<link rel="stylesheet" href="//cdn.datatables.net/responsive/1.0.6/css/dataTables.responsive.css" />
    <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />

<style type="text/css">
	button:focus {outline:0 !important;}
	tr.odd td.sorting_1 { background-color: #efefef; }
	tr.even td.sorting_1 { background-color: #efefef; }
	tr.even { background-color: #fff !important; }
	tr.odd { background-color: #fff !important; }
	.dataTables_length{ display:none; }
	.dataTable{ margin-bottom:18px; }
	.dataTables_wrapper .dataTables_paginate { text-align:center; }
	.dataTables_length, .dataTables_info { display:none; }
	.dataTables_info { display:none; }
	.dataTables_scrollHead { display:none;}
	.dataTables_wrapper .dataTables_filter { float: left; }
	#events_filter input { margin:0; width:100%; height:30px; line-height:120%; font-size: 1em; -webkit-appearance: none;
    -webkit-border-radius:0; border-radius:0; box-shadow: inset 0 1px 2px rgba(0,0,0,0.1); color: rgba(0,0,0,0.75);   -webkit-transition: all 0.30s ease-in-out; -moz-transition: all 0.30s ease-in-out; -ms-transition: all 0.30s ease-in-out; -o-transition: all 0.30s ease-in-out; background-color: #fff !important; font-family: inherit; border: 1px solid #ddd !important; }
	#events_filter { width:100%; height:50px; }
	input:focus {outline:0 !important;}
	#events_filter input:focus { box-shadow: 0 0 5px #61bd1a; padding: 3px 0px 3px 3px; border: 1px solid #61bd1a; }
    td { padding: 8.88px !important; font-family:Arial; font-size:10px !important; }
	th { background: #ccc !important; font-size:1em; font-family:Popular; }
	table.dataTable.no-footer{ margin-bottom:0 !important; }
	table { font-size:12px; }
	.dataTables_scrollBody thead{ visibility:hidden;height:0 !important; }
	th.sorting_asc, th.sorting_desc { background:#333 !important; font-weight:bold; color:#fff;}
	th { display: table-cell;vertical-align: initial; }
	th { padding:5px !important; }
	table.dataTable.dtr-inline.collapsed > tbody > tr > td:first-child:before, table.dataTable.dtr-inline.collapsed > tbody > tr > th:first-child:before { height: 20px; width: 20px; display: block; color: white; border: 2px solid white; position:static !important; border-radius: 16px; text-align: center; line-height: 20px; box-shadow: 0 0 0 #444; box-sizing: content-box; content: ''; float: left; font-weight: bold; margin-right: 6px; background-color: #61bd1a; font-size: 16px; }
    #wrapper{ width:98%; }
    div.container { max-width: 1200px }

    @media only screen and (min-width:650px) {
        
    }
</style>	
	
</head>
<body> 

<div id="wrapper">

<table width="100%" cellspacing="0" class="display compact responsive nowrap" id="events"><thead><tr><th>Last</th><th>First</th><th>Address</th><th>Speciality</th><th>Payer</th><th>State</th><th>Paid</th><th>Payments</th><th>Pay Nature</th><th>Pay Form</th></tr></thead></table>


<a href='https://docs.google.com/spreadsheets/d/1XBn-4N1Ri_8VjbTNiITlBTYhB-UsL7TiHShvor3zExQ/pub?output=csv' target='new_'><button class='downloadButton'>&#9660; Download Data</button></a>
</div>

</body>


<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script src='//cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js'></script>
<script src="//cdn.datatables.net/responsive/1.0.6/js/dataTables.responsive.js"></script>


<script type="text/javascript" charset="utf-8">
<?php
// $jsonData = file_get_contents("https://spreadsheets.google.com/feeds/list/1A49qWO70uKF3qfxDHBD3KO5zDNgUbDiSGS9MTHfEgTE/oq15w3o/public/values?&alt=json");

?>

// var data = <?php echo $jsonData ?>

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
                "oLanguage": {"sSearch": ""},
                "sAjaxSource": "https://spreadsheets.google.com/feeds/list/1XBn-4N1Ri_8VjbTNiITlBTYhB-UsL7TiHShvor3zExQ/od6/public/values?&alt=json",
                "aoColumns": [                 
                    { "mDataProp": "gsx$physlname.$t" },
                    { "mDataProp": "gsx$physfname.$t" },
                    { "mDataProp": "gsx$docaddress.$t" },
                    { "mDataProp": "gsx$specialty.$t" },
                    { "mDataProp": "gsx$payer.$t" },
                    { "mDataProp": "gsx$payerstate.$t" },
                    { "mDataProp": "gsx$totalpayments.$t" },
                    { "mDataProp": "gsx$numpayments.$t" },
                    { "mDataProp": "gsx$paynature.$t" },
                    { "mDataProp": "gsx$payform.$t" },
                            ]
            } );

        } );
    </script>
</html>