<!doctype html>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title> PWeb 9 - Iniciando em PHP </title>
  </head>
<body>
    <div class="container m-5">
        <h1 class="mb-5 col-sm-6 text-center">PWEB 9 - Atividade PHP</h1>
        
        <form method="post" action="pweb9.php" class="mt-5">
            <div class="row form-group mb-3">
                <label class="control-label col-sm-1 mt-2" for="n1"><h3>n1:</h3></label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="n1" name="n1">
                </div>
            </div>
            <div class="row form-group mb-3">
                <label class="control-label col-sm-1 mt-2" for="n2"><h3>n2:</h3></label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="n2" name="n2">
                </div>
            </div>
            <div class="col-sm-6 text-center">
                <button type="submit" class="btn btn-outline-dark mb-3" name="bt1">Somar</button>
                <button type="submit" class="btn btn-outline-dark mb-3" name="bt2">Subtrair</button>
                <button type="submit" class="btn btn-outline-dark mb-3" name="bt3">Multiplicar</button>
                <button type="submit" class="btn btn-outline-dark mb-3" name="bt4">Dividir</button>
                <button type="submit" class="btn btn-outline-dark mb-3" name="bt5">Tabuada</button>
            </div>

        </form>

        <?php
            if(isset($_POST["bt1"])) somar(); 
            if(isset($_POST["bt2"])) subtrair();
            if(isset($_POST["bt3"])) multiplicar();
            if(isset($_POST["bt4"])) dividir();
            if(isset($_POST["bt5"])) tabuada();
        ?>

    </div>


    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</body>
</html>

<?php
    function somar(){
        $a = $_POST["n1"];
        $b = $_POST["n2"];
        $c = $a + $b;
        echo "<h3> Resultado da soma = $c </h3>";
    }

    function subtrair(){
        $a = $_POST["n1"];
        $b = $_POST["n2"];
        $c = $a - $b;
        echo "<h3> Resultado da subtração = $c </h3>";
    }

    function multiplicar (){
        $a = $_POST["n1"];
        $b = $_POST["n2"];
        $c = $a * $b;
        echo "<h3> Resultado da multiplicação = $c </h3>";
    }

    function dividir (){
        $a = $_POST["n1"];
        $b = $_POST["n2"];
        if($b == 0){
            echo "<h3> Não é possível dividir por 0!</h3>";
        } else{
            $c = $a / $b;
            echo "<h3> Resultado da divisão = $c </h3>";
        }
    }

    function tabuada (){
        $a = $_POST["n1"];
        echo "<h4> Tabuada de $a </h4>";
        for ($i=1; $i<=10; $i++){
            $p = $a * $i;
            echo "<li>$a X $i = $p </li>";
        }
    }

?>