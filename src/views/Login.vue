<template>
<div> 
  <h2 class="form-header"> Введите ваши данные для авторизации: </h2>
  


 <form name="form" action="#" method="post" enctype="multipart/form-data">
        <fieldset>
            <div class=form-wrapper>
             <div class="form-line">
                <label for="login">Ваше имя:</label>
                <input id="login" type="text" name="login" />
            </div>
            <div class="form-line">
                <label for="email">Ваш email:</label>
                <input id="email" type="email" name="email" />
            </div>
            <div class="form-line">
                <label for="password">Ваш пароль:</label>
                <input id="password" type="password" name="password" />
            </div>
            <div class="form-file" >
                <label id="file1-label" for="file">Файл:</label>
                <input id="file1" type="file" name="file" />
            </div>    
            </div>
        </fieldset>
        <div class="reset-submit">
            <input id="reset1" type="reset" value="Сбросить" />
            <input id="submit1" type="submit" name="submit" value="Отправить" />
        </div>
    </form>
     </div> 



    





</template>

<script>

export default {

} 

</script>

<style lang="scss">

$color-header : #42b983;
$margin-10: 10px;
$margin-50: 50px; 

.form-header { 
color: $color-header;
text-align:center;
}

body{
background-image: url(bg-01.jpg);
background-size: 100%; 
}



.form-wrapper {
     width: 300px;
     margin: 20px auto;
     font-size: 16px;
}


.form-line {
   margin-top: $margin-10;
   display: flex;
   justify-content: space-between;
}

.form-file {
   margin-top: $margin-50;
   display: flex;
   justify-content: space-between;
}

.reset-submit{
   /* по центру */ 
   margin-top: $margin-10 ;
   display: flex;
   justify-content: center;
}


#reset1{
margin-right:$margin-10;
}

#file1{
   margin-left: 20px; 
}


</style>





