$(document).ready(function () {
    console.log("ready!");


    // render empty layout

    var today = new Date();
    var currTime = today.getHours();
    console.log(currTime);

    for (i = 9; i <= 17; ++i) {
        var cardBody = $('#cardBody');
        var activityGroup = $("<div class='input-group' id='activityGroup'></div>");
        var timeContainer = $("<div class='input-group-prepend mb-2' id='timeContainer'></div>");
        var time = $("<div class='btn btn-outline-secondary' style='width: 100px' id='time'>9:00 AM</div>");
        var activityDescription = $("<input class='form-control' value='' id='activityDescription'></div>");
        var actionGroup = $("<div class='input-group-append' id='actionGroup'></div>");
        var actionSave = $("<button class='btn btn-outline-success mb-2' type='button' id='actionSave'>Save</button>");
        var actionDelete = $("<button class='btn btn-outline-danger mb-2' type='button' id='actionDelete'>Delete</button>");
        var actionPriority = $("<button class='btn btn-success mb-2' type='button' id='actionPriority'> </button>");

        activityGroup.attr('id', 'activityGroup' + i);
        timeContainer.attr('id', 'timeContainer' + i);
        time.attr('id', 'time' + i);

        switch (i) {
            case 9: case 10: case 11:
                time.html(i + ':00 AM');
                break;
            case 12:
                time.html(i + ':00 PM');
                break;
            case 13: case 14: case 15: case 16: case 17:
                time.html((i - 12) + ':00 PM');
                break;
            default:
                break;
        }

        if(currTime === i){
            actionPriority.attr('class', 'btn mb-2 btn-warning' );
        } else if (currTime > i ){
            actionPriority.attr('class', 'btn mb-2 btn-danger' )
        } else {
            actionPriority.attr('class', 'btn mb-2 btn-success' )
        }

        activityDescription.attr('id', 'activityDescription' + i);
        activityDescription.html(i);
        actionGroup.attr('id', 'actionGroup' + i);
        actionSave.attr('id', 'actionSave' + i);
        actionDelete.attr('id', 'actionDelete' + i);
        timeContainer.append(time);
        activityGroup.append(timeContainer);
        activityGroup.append(activityDescription);
        activityGroup.append(actionGroup);
        //actionGroup.append(actionSave);
        //actionGroup.append(actionDelete);
        actionGroup.append(actionPriority);
        $('#cardBody').append(activityGroup);

    }

    // load exisiting activities from local storage to array

    // make changes to array

    // render activities on screen

    // save activities from array to local storage


    $("#saveTasks").click(function () {
        for (i = 9; i <= 17; ++i) {
            var task = $('#activityDescription' + i).val();
            localStorage.setItem('task' + i, task);
            console.log(task)
        }
    });

    $("#loadTasks").click(function () {
        for (i = 9; i <= 17; ++i) {
            var task = localStorage.getItem("task" + i);
            $('#activityDescription' + i).val(task);
        }
    });


});
