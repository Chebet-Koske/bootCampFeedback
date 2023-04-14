const server = "http://localhost:3000/";
async function fetchFeedback() {
    let response = await fetch(server + "getstudents", { method: "GET" });
    let data = await response.text();

    var a = 0,
        b = 0,
        c = 0,
        d = 0,
        e = 0,
        f = 0,
        g = 0;
    jsondata = JSON.parse(data);
    for (i = 0; i < jsondata.length; i++) {
        if (jsondata[i].a) {
            a++;
        }
        if (jsondata[i].b) {
            b++;
        }
        if (jsondata[i].c) {
            c++;
        }
        if (jsondata[i].d) {
            d++;
        }
        if (jsondata[i].e) {
            e++;
        }
        if (jsondata[i].f) {
            f++;
        }
        if (jsondata[i].g) {
            g++;
        }
    }
    var input_values = [a, b, c, d, e, f, g];
    var xValues = ["1", "2", "3", "4", "5", "6", "7" ]
    var barColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    new Chart("graph", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                borderWidth: 5,
                data: input_values,
            }, ],
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },

                }, ],
            },

        },
    });
}

fetchFeedback();
//create function of uncheck /disable checkbox 7
function disableAll() {
    var inputs = document.querySelectorAll("[checker]");
    if(document.querySelector("[uncheck]").checked){
        for(var i = 0; i < inputs.length; i++){
            inputs[i].checked = false;
            inputs[i].disabled = true;                
            }
    }
        else{
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].disabled = false;
            }
        }
    }

var c1 = document.getElementById("chk1");
var c2 = document.getElementById("chk2");
var c3 = document.getElementById("chk3");
var c4 = document.getElementById("chk4");
var c5 = document.getElementById("chk5");
var c6 = document.getElementById("chk6");
var c7 = document.getElementById("chk7");

async function submit() {
    const url = server + "students";
    const student = {
        a: chk1,
        b: chk2,
        c: chk3,
        d: chk4,
        e: chk5,
        f: chk6,
        g: chk7,
    };

    if (c1.checked) {
        student.a = "The technologies used";
    } else {
        student.a = null;
    }
    if (c2.checked) {
        student.b = "The skills acquired";
    } else {
        student.b = null;
    }
    if (c3.checked) {
        student.c = "The food and drinks";
    } else {
        student.c = null;
    }
    if (c4.checked) {
        student.d = "The accommodation";
    } else {
        student.d = null;
    }
    if (c5.checked) {
        student.e = "The trainers";
    } else {
        student.e = null;
    }
    if (c6.checked) {
        student.f = "Your fellow students";
    } else {
        student.f = null;
    }
    if (c7.checked) {
        student.g = "Nothing";
    } else {
        student.g = null;
    }

    console.log(student);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
    };
    const response = await fetch(url, options);
    console.log(response);

    location.reload();
}

document.querySelector("form").addEventListener("submit", (e) => {
    if (c1.checked) {
        chk1 = c1.value;
    }
    if (c2.checked) {
        chk2 = c2.value;
    }
    if (c3.checked) {
        chk3 = c3.value;
    }
    if (c4.checked) {
        chk4 = c4.value;
    }
    if (c5.checked) {
        chk5 = c5.value;
    }
    if (c6.checked) {
        chk6 = c6.value;
    }
    if (c7.checked) {
        chk7 = c7.value;
    }
    submit();
    e.preventDefault();
});
