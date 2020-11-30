<template>
<div> 
  <h2 class="form-header"> Введите ваши данные для авторизации: </h2>
 <form name="form" action="#" method="post" enctype="multipart/form-data">
        <fieldset>
             <div>
                <label for="login">Ваше имя:</label>
                <input id="login" type="text" name="login" />
            </div>
            <div>
                <label for="email">Ваш email:</label>
                <input id="email" type="email" name="email" />
            </div>
            <div>
                <label for="password">Ваш пароль:</label>
                <input id="password" type="password" name="password" />
            </div>
            <div>
                <label for="file">Файл:</label>
                <input id="file" type="file" name="file" />
            </div>         
        </fieldset>
        <div>
            <input type="reset" value="Сбросить" />
            <input type="submit" name="submit" value="Отправить" />
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

.form-header {
color: $color-header;
text-align:center;
}

body{
background-image: url(bg-01.jpg);
background-size: 100%; 
}


</style>





