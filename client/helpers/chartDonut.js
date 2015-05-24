
    function drawChartDonut(){
                var data = [
            {
                value: 300,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }
        ]   
             
        var ctx = $("#chartDonut").get(0).getContext("2d");
        var myDoughnutChart = new Chart(ctx);
        new Chart(ctx).Doughnut(data);
    };
    

    Template.donutChart.rendered = function(){ drawChartDonut();};
    
