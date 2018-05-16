<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>首页</title>
    <!-- bootstrap -->
    <link href="../css/bootstrap/bootstrap.css" rel="stylesheet"/>
    <link href="../css/bootstrap/bootstrap-responsive.css" rel="stylesheet"/>
    <link href="../css/bootstrap/bootstrap-overrides.css" type="text/css" rel="stylesheet"/>

    <!-- libraries -->
    <link href="../css/lib/jquery-ui-1.10.2.custom.css" rel="stylesheet" type="text/css"/>
    <link href="../css/lib/font-awesome.css" type="text/css" rel="stylesheet"/>

    <!-- global styles -->
    <link rel="stylesheet" type="text/css" href="../css/layout.css"/>
    <link rel="stylesheet" type="text/css" href="../css/elements.css"/>
    <link rel="stylesheet" type="text/css" href="../css/icons.css"/>

    <!-- this page specific styles -->
    <link rel="stylesheet" href="../css/compiled/index.css" type="text/css" media="screen"/>

    <!-- open sans font -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
          rel='stylesheet' type='text/css'/>

    <!-- lato font -->
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900,300italic,400italic,700italic,900italic'
          rel='stylesheet' type='text/css'/>


</head>
<body>
<!-- 顶部 -->
<div class="navbar navbar-inverse">
    <jsp:include page="top.jsp"></jsp:include>
</div>
<!-- 左边框 -->
<div id="sidebar-nav">
    <jsp:include page="nav.jsp"></jsp:include>
</div>


<div class="content">

    <!-- settings changer -->
    <div class="skins-nav">
        <a href="#" class="skin first_nav selected">
            <span class="icon"></span><span class="text">Default skin</span>
        </a>
        <a href="#" class="skin second_nav" data-file="css/skins/dark.css">
            <span class="icon"></span><span class="text">Dark skin</span>
        </a>
    </div>

    <div class="container-fluid">

        <!-- upper main stats -->
        <div id="main-stats">
            <div class="row-fluid stats-row">
                <div class="span3 stat">
                    <div class="data">
                        <span class="number">2457</span>
                        visits
                    </div>
                    <span class="date">Today</span>
                </div>
                <div class="span3 stat">
                    <div class="data">
                        <span class="number">3240</span>
                        users
                    </div>
                    <span class="date">February 2014</span>
                </div>
                <div class="span3 stat">
                    <div class="data">
                        <span class="number">322</span>
                        orders
                    </div>
                    <span class="date">This week</span>
                </div>
                <div class="span3 stat last">
                    <div class="data">
                        <span class="number">$2,340</span>
                        sales
                    </div>
                    <span class="date">last 30 days</span>
                </div>
            </div>
        </div>
        <!-- end upper main stats -->

        <div id="pad-wrapper">

            <!-- statistics chart built with jQuery Flot -->
            <div class="row-fluid chart">
                <h4>
                    Statistics
                    <div class="btn-group pull-right">
                        <button class="glow left">DAY</button>
                        <button class="glow middle active">MONTH</button>
                        <button class="glow right">YEAR</button>
                    </div>
                </h4>
                <div class="span12">
                    <div id="statsChart"></div>
                </div>
            </div>
            <!-- end statistics chart -->

            <!-- UI Elements section -->
            <div class="row-fluid section ui-elements">
                <div class="row-fluid chart">
                    <h4>
                        Statistics
                        <div class="btn-group pull-right">
                            <button class="glow left">DAY</button>
                            <button class="glow middle active">MONTH</button>
                            <button class="glow right">YEAR</button>
                        </div>
                    </h4>
                    <div class="span12">
                        <div id="statsChart" style="padding: 0px; position: relative;">
                            <canvas class="flot-base" width="1586" height="250"
                                    style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 1586px; height: 250px;"></canvas>
                            <div class="flot-text flot-y-axis flot-y1-axis yAxis y1Axis"
                                 style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; display: block;">
                                <div style="position: absolute; top: 219px; font-style: normal; font-variant: normal; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, sans-serif; color: rgb(157, 163, 169); left: 14px;">
                                    0
                                </div>
                                <div style="position: absolute; top: 146px; font-style: normal; font-variant: normal; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, sans-serif; color: rgb(157, 163, 169); left: 7px;">
                                    50
                                </div>
                                <div style="position: absolute; top: 73px; font-style: normal; font-variant: normal; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, sans-serif; color: rgb(157, 163, 169); left: 0px;">
                                    100
                                </div>
                                <div style="position: absolute; top: 0px; font-style: normal; font-variant: normal; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, sans-serif; color: rgb(157, 163, 169); left: 0px;">
                                    150
                                </div>
                            </div>
                            <div class="flot-text flot-x-axis flot-x1-axis xAxis x1Axis"
                                 style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; display: block;">
                                <div style="position: absolute; top: 233px; font-style: normal; font-variant: small-caps; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, Arial; color: rgb(105, 118, 149); left: 16px;">
                                    JAN
                                </div>
                                <div style="position: absolute; top: 233px; font-style: normal; font-variant: small-caps; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, Arial; color: rgb(105, 118, 149); left: 156px;">
                                    FEB
                                </div>
                                <div style="position: absolute; top: 233px; font-style: normal; font-variant: small-caps; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, Arial; color: rgb(105, 118, 149); left: 294px;">
                                    MAR
                                </div>
                                <div style="position: absolute; top: 233px; font-style: normal; font-variant: small-caps; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, Arial; color: rgb(105, 118, 149); left: 436px;">
                                    APR
                                </div>
                                <div style="position: absolute; top: 233px; font-style: normal; font-variant: small-caps; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, Arial; color: rgb(105, 118, 149); left: 576px;">
                                    MAY
                                </div>
                                <div style="position: absolute; top: 233px; font-style: normal; font-variant: small-caps; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, Arial; color: rgb(105, 118, 149); left: 718px;">
                                    JUN
                                </div>
                                <div style="position: absolute; top: 233px; font-style: normal; font-variant: small-caps; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, Arial; color: rgb(105, 118, 149); left: 860px;">
                                    JUL
                                </div>
                                <div style="position: absolute; top: 233px; font-style: normal; font-variant: small-caps; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, Arial; color: rgb(105, 118, 149); left: 997px;">
                                    AUG
                                </div>
                                <div style="position: absolute; top: 233px; font-style: normal; font-variant: small-caps; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, Arial; color: rgb(105, 118, 149); left: 1141px;">
                                    SEP
                                </div>
                                <div style="position: absolute; top: 233px; font-style: normal; font-variant: small-caps; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, Arial; color: rgb(105, 118, 149); left: 1279px;">
                                    OCT
                                </div>
                                <div style="position: absolute; top: 233px; font-style: normal; font-variant: small-caps; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, Arial; color: rgb(105, 118, 149); left: 1419px;">
                                    NOV
                                </div>
                                <div style="position: absolute; top: 233px; font-style: normal; font-variant: small-caps; font-weight: 400; font-stretch: normal; font-size: 12px; line-height: normal; font-family: &quot;Open Sans&quot;, Arial; color: rgb(105, 118, 149); left: 1561px;">
                                    DEC
                                </div>
                            </div>
                            <canvas class="flot-overlay" width="1586" height="250"
                                    style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 1586px; height: 250px;"></canvas>
                            <div class="legend">
                                <div style="position: absolute; width: 67px; height: 44px; top: 14px; right: 18px; background-color: rgb(255, 255, 255); opacity: 0.85;"></div>
                                <table style="position:absolute;top:14px;right:18px;;font-size:smaller;color:#545454">
                                    <tbody>
                                    <tr>
                                        <td class="legendColorBox">
                                            <div style="border:1px solid #fff;padding:1px">
                                                <div style="width:4px;height:0;border:5px solid rgb(167,181,197);overflow:hidden"></div>
                                            </div>
                                        </td>
                                        <td class="legendLabel">Signups</td>
                                    </tr>
                                    <tr>
                                        <td class="legendColorBox">
                                            <div style="border:1px solid #fff;padding:1px">
                                                <div style="width:4px;height:0;border:5px solid rgb(48,160,235);overflow:hidden"></div>
                                            </div>
                                        </td>
                                        <td class="legendLabel">Visits</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end UI elements section -->

            <!-- table sample -->
            <!-- the script for the toggle all checkboxes from header is located in js/theme.js -->
            <div class="table-products section">
                <div class="row-fluid head">
                    <div class="span12">
                        <h4>Products
                            <small>Table sample</small>
                        </h4>
                    </div>
                </div>

                <div class="row-fluid filter-block">
                    <div class="pull-right">
                        <div class="ui-select">
                            <select>
                                <option/>
                                Filter users
                                <option/>
                                Signed last 30 days
                                <option/>
                                Active users
                            </select>
                        </div>
                        <input type="text" class="search"/>
                        <a class="btn-flat new-product">+ Add product</a>
                    </div>
                </div>

                <div class="row-fluid">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th class="span3">
                                <input type="checkbox"/>
                                Product
                            </th>
                            <th class="span3">
                                <span class="line"></span>Description
                            </th>
                            <th class="span3">
                                <span class="line"></span>Status
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <!-- row -->
                        <tr class="first">
                            <td>
                                <input type="checkbox"/>
                                <div class="img">
                                    <img src="../img/table-img.png"/>
                                </div>
                                <a href="#">There are many variations </a>
                            </td>
                            <td class="description">
                                if you are going to use a passage of Lorem Ipsum.
                            </td>
                            <td>
                                <span class="label label-success">Active</span>
                                <ul class="actions">
                                    <li><i class="table-edit"></i></li>
                                    <li><i class="table-settings"></i></li>
                                    <li class="last"><i class="table-delete"></i></li>
                                </ul>
                            </td>
                        </tr>
                        <!-- row -->
                        <tr>
                            <td>
                                <input type="checkbox"/>
                                <div class="img">
                                    <img src="../img/table-img.png"/>
                                </div>
                                <a href="#">Internet tend</a>
                            </td>
                            <td class="description">
                                There are many variations of passages.
                            </td>
                            <td>
                                <ul class="actions">
                                    <li><i class="table-edit"></i></li>
                                    <li><i class="table-settings"></i></li>
                                    <li class="last"><i class="table-delete"></i></li>
                                </ul>
                            </td>
                        </tr>
                        <!-- row -->
                        <tr>
                            <td>
                                <input type="checkbox"/>
                                <div class="img">
                                    <img src="../img/table-img.png"/>
                                </div>
                                <a href="#">Many desktop publishing </a>
                            </td>
                            <td class="description">
                                if you are going to use a passage of Lorem Ipsum.
                            </td>
                            <td>
                                <ul class="actions">
                                    <li><i class="table-edit"></i></li>
                                    <li><i class="table-settings"></i></li>
                                    <li class="last"><i class="table-delete"></i></li>
                                </ul>
                            </td>
                        </tr>
                        <!-- row -->
                        <tr>
                            <td>
                                <input type="checkbox"/>
                                <div class="img">
                                    <img src="../img/table-img.png"/>
                                </div>
                                <a href="#">Generate Lorem </a>
                            </td>
                            <td class="description">
                                There are many variations of passages.
                            </td>
                            <td>
                                <span class="label label-info">Standby</span>
                                <ul class="actions">
                                    <li><i class="table-edit"></i></li>
                                    <li><i class="table-settings"></i></li>
                                    <li class="last"><i class="table-delete"></i></li>
                                </ul>
                            </td>
                        </tr>
                        <!-- row -->
                        <tr>
                            <td>
                                <input type="checkbox"/>
                                <div class="img">
                                    <img src="../img/table-img.png"/>
                                </div>
                                <a href="#">Internet tend</a>
                            </td>
                            <td class="description">
                                There are many variations of passages.
                            </td>
                            <td>
                                <ul class="actions">
                                    <li><i class="table-edit"></i></li>
                                    <li><i class="table-settings"></i></li>
                                    <li class="last"><i class="table-delete"></i></li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="pagination">
                    <ul>
                        <li><a href="#">&#8249;</a></li>
                        <li><a class="active" href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">&#8250;</a></li>
                    </ul>
                </div>
            </div>
            <!-- end table sample -->
        </div>
    </div>
</div>


<!-- scripts -->
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script src="../js/jquery-ui-1.10.2.custom.min.js"></script>
<!-- knob -->
<script src="../js/jquery.knob.js"></script>
<!-- flot charts -->
<script src="../js/jquery.flot.js"></script>
<script src="../js/jquery.flot.stack.js"></script>
<script src="../js/jquery.flot.resize.js"></script>
<script src="../js/theme.js"></script>

<script type="text/javascript">
    $(function () {

        // jQuery Knobs
        $(".knob").knob();


        // jQuery UI Sliders
        $(".slider-sample1").slider({
            value: 100,
            min: 1,
            max: 500
        });
        $(".slider-sample2").slider({
            range: "min",
            value: 130,
            min: 1,
            max: 500
        });
        $(".slider-sample3").slider({
            range: true,
            min: 0,
            max: 500,
            values: [40, 170],
        });


        // jQuery Flot Chart
        var visits = [[1, 50], [2, 40], [3, 45], [4, 23], [5, 55], [6, 65], [7, 61], [8, 70], [9, 65], [10, 75], [11, 57], [12, 59]];
        var visitors = [[1, 25], [2, 50], [3, 23], [4, 48], [5, 38], [6, 40], [7, 47], [8, 55], [9, 43], [10, 50], [11, 47], [12, 39]];

        var plot = $.plot($("#statsChart"),
            [{data: visits, label: "Signups"},
                {data: visitors, label: "Visits"}], {
                series: {
                    lines: {
                        show: true,
                        lineWidth: 1,
                        fill: true,
                        fillColor: {colors: [{opacity: 0.1}, {opacity: 0.13}]}
                    },
                    points: {
                        show: true,
                        lineWidth: 2,
                        radius: 3
                    },
                    shadowSize: 0,
                    stack: true
                },
                grid: {
                    hoverable: true,
                    clickable: true,
                    tickColor: "#f9f9f9",
                    borderWidth: 0
                },
                legend: {
                    // show: false
                    labelBoxBorderColor: "#fff"
                },
                colors: ["#a7b5c5", "#30a0eb"],
                xaxis: {
                    ticks: [[1, "JAN"], [2, "FEB"], [3, "MAR"], [4, "APR"], [5, "MAY"], [6, "JUN"],
                        [7, "JUL"], [8, "AUG"], [9, "SEP"], [10, "OCT"], [11, "NOV"], [12, "DEC"]],
                    font: {
                        size: 12,
                        family: "Open Sans, Arial",
                        variant: "small-caps",
                        color: "#697695"
                    }
                },
                yaxis: {
                    ticks: 3,
                    tickDecimals: 0,
                    font: {size: 12, color: "#9da3a9"}
                }
            });

    });
</script>


</body>
</html>