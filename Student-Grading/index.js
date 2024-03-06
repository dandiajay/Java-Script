// Event listener for the button click
document.getElementById('calculateButton').addEventListener('click', calculateAverageGrade);

function calculateAverageGrade() {
    // Get user inputs
    const Sanskrit = parseFloat(document.getElementById('Sanskrit').value);
    const English = parseFloat(document.getElementById('English').value);
    const Mathematics = parseFloat(document.getElementById('Mathematics').value);
    const ComputerScience = parseFloat(document.getElementById('ComputerScience').value)
    const Physics = parseFloat(document.getElementById('Physics').value)
    const Social = parseFloat(document.getElementById('Social').value)

   
    // Calculate average and total
    const averageScore = (Sanskrit + English + Mathematics + ComputerScience + Physics + Social) / 6;
    const total = Sanskrit + English + Mathematics + ComputerScience + Physics + Social;

   

    // Check for fail condition
    if (Sanskrit <= 35 || English <= 35 || Mathematics <= 35 || ComputerScience <= 35 || Physics <= 35 || Social <= 35) {
        document.getElementById('result').innerHTML = "Fail";
        document.getElementById('result').style.color='red';
        // document.getElementById('avg').innerHTML = "Average " + averageScore;
        // document.getElementById('total').innerHTML = "Total Marks " + total;
    } else if (Sanskrit >= 35 && English >= 35 && Mathematics >= 35 && ComputerScience >= 35 && Physics >= 35 && Social >= 35) {

        let averageGrade = '';
        if (averageScore >= 90 && averageScore <= 100) {
            averageGrade = 'O';
        } else if (averageScore >= 80 && averageGrade <= 90) {
            averageGrade = 'A';
        } else if (averageScore >= 70 && averageGrade <= 80) {
            averageGrade = 'B';
        } else if (averageScore >= 60 && averageGrade <= 70) {
            averageGrade = 'C';
        } else if (averageScore >= 50 && averageGrade <= 60) {
            averageGrade = 'D';
        } else if (averageScore >= 40 && averageGrade <= 50) {
            averageGrade = 'E';
        } else {
            averageGrade = 'F';
        }

        // Display results
        document.getElementById('averageGrade').innerHTML = `Average Grade: ${averageGrade}`;
        document.getElementById('avg').innerHTML = "Average " + averageScore;
        document.getElementById('total').innerHTML = "Total Marks " + total;
        document.getElementById('result').innerHTML='Pass'
        document.getElementById('result').style.color='green'
    }
    document.getElementById('san').innerHTML = "Sanskrit " + Sanskrit;
    document.getElementById('eng').innerHTML = "English " + English;
    document.getElementById('math').innerHTML = "Mathematics " + Mathematics;
    document.getElementById('cs').innerHTML = "ComputerScience " + ComputerScience;
    document.getElementById('phy').innerHTML = "Physics " + Physics;
    document.getElementById('soc').innerHTML = "Social " + Social;

}