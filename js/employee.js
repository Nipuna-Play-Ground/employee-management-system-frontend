getAllEmployee();

function saveEmployee(){
    let empName = $('#empNameControl').val();
    let empAddress = $('#empAddressControl').val();
    let empMobileNumber = $('#empMobileNumberControl').val();

$.ajax({
    method: "POST",
    contentType: "application/json",
    url: "http://localhost:8080/api/v1/employee/saveEmployee",
    async: true,
    data: JSON.stringify({
        "empId": "",
        "empName": empName,
        "empAddress":empAddress,
        "empMobileNumber": empMobileNumber
    }),
    success: function (data) {
        alert("New Employee Saved Successfully");
        getAllEmployee();
    },
    error: function (xhr, exception){
        alert("New Employee Save Failed");
    }
})
}

function updateEmployee(){
    let empId = $('#empIdControl').val();
    let empName = $('#empNameControl').val();
    let empAddress = $('#empAddressControl').val();
    let empMobileNumber = $('#empMobileNumberControl').val();

    $.ajax({
        method: "UPDATE",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/employee/updateEmployee",
        async: true,
        data: JSON.stringify({
            "empId": empId,
            "empName": empName,
            "empAddress":empAddress,
            "empMobileNumber": empMobileNumber
        }),
        success: function (data) {
            alert("Employee Updated Successfully");
            getAllEmployee();
        },
        error: function (xhr, exception){
            alert("Employee Update Failed");
        }
    })
}

function deleteEmployee(){
    let empId = $('#empIdControl').val();

    $.ajax({
        method: "DELETE",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/employee/deleteEmployeeById"+empId,
        async: true,
        success: function (data) {
            alert("Employee Deleted Successfully");
            getAllEmployee();
        },
        error: function (xhr, exception){
            alert("Employee Delete Failed");
        }
    })
}

function getAllEmployee(){

    $.ajax({
        method: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/employee/getAllEmployees",
        async: true,
        success: function (data) {
            if (data.code==="00"){
                $('#empTable').empty();
                for (let emp in date.content){
                    let empId = emp.empId;
                    let empName = emp.empName;
                    let empAddress = emp.empAddress;
                    let empMobileNumber = emp.empMobileNumber;

                    var row = `<tr><td>${empId}</td><td>${empName}</td><td>${empAddress}</td><td>${empMobileNumber}</td></tr>`
                    $('#empTable').append(row);
                }
            }
        },
        error: function (xhr, exception){
            alert("Employee save failed");
        }
    })
}