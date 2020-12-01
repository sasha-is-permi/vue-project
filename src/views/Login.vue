<!-- Страница авторизации полизователя.
     Валидация формы осуществляется с помощью 
     пакета validate
     ( установка: npm install vuelidate --save-- ) -->

<template>
<div> 
  <h2 class="form-header"> Введите ваши данные для авторизации: </h2>
  


 <v-form 
 @submit.prevent="onSubmit"
 name="form"
 action="#"
 method="post"
 enctype="multipart/form-data"
    >
        <fieldset>
            <div class=form-wrapper>
             <div class="form-line">
                <label for="login">Ваше имя:</label>
                <input 
                id="login"
                type="text"
                name="login"
                v-model="login"
                :rules="loginRules"
                 />
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
            <!-- Валидация при нажатии кнопочки submit 
            При нажатии на кнопку вызываем метод onSubmit()
            Кнопка отключена пока валидация не прошла 
            -->
            <input
            @click="onSubmit"
            color="primary"
            :disabled="$v.$invalid"
             id="submit1" 
             type="submit" 
             name="submit" 
             value="Отправить" 
             />
        </div>
    </v-form>
     </div> 



    





</template>

<script>

export default {
      data() {
        return {
          login:'',
          valid:false,
          loginRules: [
             v => !!v || 'Логин не введен',
             v =>( (v.length >=3 && v.length <=15) ) || 'Логин должен содержать от 3 до 15 символов '
          ]

        }

      },

      methods: {
onSubmit() {

      
    }
}
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
//background-image: url(bg-01.jpg);
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





