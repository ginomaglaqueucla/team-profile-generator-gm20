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
    <div class="card m-3" style="width: 18rem;">
        <div class="card-header text-white bg-primary">Header</div>
        <div class="card-body">
            <div class="border p-2">
                ID iuhhuinuniuni
            </div>
            <div class="border p-2">
                EMAIL
            </div>
            <div class="border p-2">
                SCHOOL
            </div>
        </div>  
    </div>
    <div class="card m-3" style="width: 18rem;">
        <div class="card-header text-white bg-primary">Header</div>
        <div class="card-body">
            <div class="border p-2">
                ID inhiununi
            </div>
            <div class="border p-2">
                EMAIL
            </div>
            <div class="border p-2">
                SCHOOL
            </div>
        </div>  
    </div>
    <div class="card m-3" style="width: 18rem;">
        <div class="card-header text-white bg-primary">Header</div>
        <div class="card-body">
            <div class="border p-2">
                ID oininnonkm
            </div>
            <div class="border p-2">
                EMAIL
            </div>
            <div class="border p-2">
                SCHOOL
            </div>
        </div>  
    </div>
    <div class="card m-3" style="width: 18rem;">
        <div class="card-header text-white bg-primary">Header</div>
        <div class="card-body">
            <div class="border p-2">
                ID njijhuiuugyg
            </div>
            <div class="border p-2">
                EMAIL
            </div>
            <div class="border p-2">
                SCHOOL
            </div>
        </div>  
    </div>
    <div class="card m-3" style="width: 18rem;">
        <div class="card-header text-white bg-primary">Header</div>
        <div class="card-body">
            <div class="border p-2">
                ID: hguhuhuihuni
            </div>
            <div class="border p-2">
                EMAIL
            </div>
            <div class="border p-2">
                SCHOOL
            </div>
        </div>  
    </div>
    </main>
    <footer class="container text-center py-3">
    </footer>
</body>
</html>   
`;
  };