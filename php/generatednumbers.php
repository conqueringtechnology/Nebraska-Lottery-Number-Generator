<?php
$fileOutput = "../csv/generatednumbers.csv";
$powerBallNumbers = $_POST['powerBallNumbers'];
$powerBallNumber = $_POST['powerBallNumber'];
$pick5Numbers = $_POST['pick5Numbers'];
$megaMillionsNumbers = $_POST['megaMillionsNumbers'];
$megaBallNumber = $_POST['megaBallNumber'];
$luckyForLifeNumbers = $_POST['luckyForLifeNumbers'];
$luckyBallNumber = $_POST['luckyBallNumber'];
$pick3Numbers = $_POST['pick3Numbers'];
$twoBy2RedNumber = $_POST['twoBy2RedNumber'];
$twoBy2WhiteNumber = $_POST['twoBy2WhiteNumber'];
$yottaNumbers = $_POST['yottaNumbers'];
$yottaBallNumber = $_POST['yottaBallNumber'];
$dateStamp = date("m/d/y");

//All data in one variable
$finalDetails = array($powerBallNumbers,$powerBallNumber,$pick5Numbers,$megaMillionsNumbers,$megaBallNumber,$luckyForLifeNumbers,$luckyBallNumber,$pick3Numbers,$twoBy2RedNumber,$twoBy2WhiteNumber,$yottaNumbers,$yottaBallNumber,$dateStamp);

//Open read file
$openFile = fopen($fileOutput, 'r');
fgetcsv($openFile);
fclose($openFile);

//Open & create file & write file
$openFile = fopen($fileOutput, 'a');
fputcsv($openFile, $finalDetails);
fclose($openFile);

//Redirect to success Page
exit(header('location: http://conqueringtechnology.com/numbergenerator.php'));
 ?>
