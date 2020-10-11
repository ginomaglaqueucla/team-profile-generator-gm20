const generateCards = employeeData => {
    const { Manager, Engineer, Intern } = employeeData;
    let employeeUnique = "Office Number";
    let employeeUniqueValue = employeeData[0].officeNumber;
    let icon = "mug-hot";
    cardHTMLArray = [];
    for(let i = 0; i < employeeData.length; i++){
        if(employeeData[i].role === "Engineer"){
            employeeUnique = "GithHub";
            employeeUniqueValue = employeeData[i].github;
            icon = "glasses";
        }
        else if(employeeData[i].role === "Intern"){
            employeeUnique = "School";
            employeeUniqueValue = employeeData[i].School;
            icon = "user-graduate";
        }
        console.log(icon);
        cardHTMLArray[i] = `
        <div class="card m-3" style="width: 18rem;">
        <div class="card-header text-white bg-primary">
            <p>${employeeData[i].name}</p>
            <p><i class="fas fa-${icon}"></i> ${employeeData[i].role}</p>
        </div>
        <div class="card-body">
            <div class="border p-2">
                ID: ${employeeData[i].id}
            </div>
            <div class="border p-2">
                Email: ${employeeData[i].email}
            </div>
            <div class="border p-2">
                ${employeeUnique}: ${employeeUniqueValue}
            </div>
        </div>  
    </div>`
    }
    return cardHTMLArray.join('');
}


module.exports = templateData => {
    // destructure page data by section
    console.log(templateData);

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header class="jumbotron text-center">
        My Team
    </header>
    <main class="d-flex justify-content-center m-5 row">
        ${generateCards(templateData)}
    </main>
    <footer class="container text-center py-3">
    </footer>
</body>
</html>   
`;
  };