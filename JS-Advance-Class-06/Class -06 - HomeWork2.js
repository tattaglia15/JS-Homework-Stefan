$("button").first().on("click", function(){
    $.ajax({
        url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
        success: function(data){
            let parsedData = JSON.parse(data)
            let gradeAverage = parsedData.filter(allStudentsWithGrade)
            console.log(gradeAverage)
            let femaleStudentsWithAverageGrade = parsedData.filter(f => f.averageGrade == 5 && f.gender == "Female").map(p => p.firstName)
            console.log(`All Female Students With Average Grade 5 ${femaleStudentsWithAverageGrade}`)
            let maleStudents = parsedData.filter(m => m.age > 18 && m.city == "Skopje").map(m => m.firstName + " " + m.lastName)
            console.log(`All Male Students above 18 years who lives in Skopje: ${maleStudents}`)
            let averageGrades = parsedData.filter(female => female.age > 24 && female.gender == "Female").map(female => female.averageGrade).reduce(averageGrad,0)
            console.log(`The Average Grades Of Female Students Above 24: ${averageGrades / parsedData.filter(f => f.age > 24 && f.gender == "Female").length}`)
            let anotherMaleStudents = parsedData.filter(males => males.averageGrade > 2 && males.firstName[0] == "B")
            console.log(anotherMaleStudents)
        }
    })
})
function allStudentsWithGrade(student) {
    return student.averageGrade > 3
}
function averageGrad(currentSum, grade){
    return  currentSum += grade
}
