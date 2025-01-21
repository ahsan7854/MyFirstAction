<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple JavaScript Example</title>
</head>
<body>
    <h1>Welcome to JavaScript!</h1>
    <button id="myButton">Click me!</button>

    <script>
        // JavaScript code
        document.getElementById('myButton').addEventListener('click', function() {
            alert('Button was clicked!');
        });
    </script>
</body>
</html>
