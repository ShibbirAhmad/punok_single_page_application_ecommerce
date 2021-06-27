<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php

        $setting = App\Models\GeneralSetting::latest()->first();

     ?>
    <title>  {{ $setting->title }} </title>
    <style>
              .email_box{

                 width: 100%;
                 min-height: 500px;

              }
             .box_left{
                  width: 20%;

              }

            .box_right{
                  width: 20%;
              }

              .box_center{
                  margin:0 auto ;
                  width: 80% ;
                  min-height: 300px;
                  background-color: #eee;
                  box-shadow: 1px 2px 1px  #ddd ;
              }

              .box_center p {
                  padding-right:10px;
                  padding-bottom:10px;
                  padding-left:40px;
                  line-height: 23px;
               }

               .box_center h4 {
                    text-align:center ;
                   font-size: 24px;
                   font-style: bold;
                   color:#FF4D03;
                   padding-top: 40px;
               }

               .follow{
                   margin:  0 auto;
                   width: 260px;
                   margin-bottom: 50px;
               }
               .follow1  {
                   float: left;
                   height: 40px;
                   width: 100px;
                   background:#FF4D03;
                   border-radius:5px;

               }

               .follow1 a {
                   margin:16px;
                   margin-left: 18px;
                   position:absolute;
                   color:#fff;
                   text-decoration: none;
               }

               .follow2  {
                   float: right ;
                   height: 40px;
                   width: 150px;
                   background:#FF4D03;
                   border-radius:5px;

               }

               .follow2 a {
                   margin:16px;
                   position: absolute;
                   color:#fff;
                   text-decoration: none;
               }



    </style>
</head>
<body>

       <div class="email_box">
                 <div class="box_left"></div>
                 <div class="box_center">

                     <h4> {{ $setting->title }} </h4>

                       <p>
                           {!! $data !!}
                       </p>
                        <div class="follow">
                            <div class="follow1">
                                <a href="https://madinafashion.com.bd"> visit site </a>
                            </div>
                            <div class="follow2">
                                <a href="https://facebook.com/madinafashion">follow facebook</a>
                            </div>
                        </div>
               </div>
                 <div class="box_right"></div>
        </div>


</body>
</html>