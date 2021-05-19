var dict= 
    {
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,        
    };
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart);
function throwDice()
{
    let rndNum = Math.floor(Math.random() * 6) + 1;
    console.log(rndNum);
    document.getElementById("DiceDisplay").src = "Images\\dice" + rndNum + ".png";

    dict[rndNum]++;

    document.getElementById("1-s").innerHTML = "1-s count:" + dict[1];
    document.getElementById("2-s").innerHTML = "2-s count:" + dict[2];
    document.getElementById("3-s").innerHTML = "3-s count:" + dict[3];
    document.getElementById("4-s").innerHTML = "4-s count:" + dict[4];
    document.getElementById("5-s").innerHTML = "5-s count:" + dict[5];
    document.getElementById("6-s").innerHTML = "6-s count:" + dict[6];
    drawChart();
}
function drawChart() 
{
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Dice stats'],
        ['ones-s', dict[1]],
        ['two-s', dict[2]],
        ['three-s', dict[3]],
        ['four-s', dict[4]],
        ['five-s', dict[5]],
        ['sixes', dict[6]]
      ]);
      
        // Optional; add a title and set the width and height of the chart
        var options = {'title':'Dice stats', 'width':550, 'height':400, backgroundColor: '#7c5175', is3D: true};
      
        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
}
