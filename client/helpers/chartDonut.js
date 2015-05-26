
    function drawChartDonut(){
                var data = [
            {
                value: 20,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Mail Order Sales"
            },
            {
                value: 30,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "In Store Sales"
            },
            {
                value: 12,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Download Sales"
            }
        ]   
             
        var ctx = $("#chartDonut").get(0).getContext("2d");
        var myDoughnutChart = new Chart(ctx);
        new Chart(ctx).Doughnut(data);
    };
    

    Template.donutChart.rendered = function(){ drawChartDonut();};
    
