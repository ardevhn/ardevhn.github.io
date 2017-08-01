---
layout: post
page_description: ARDEV delivers innovative technology solutions for solving real-world business challenges.
keywords: Web, Text To Speech, Java
category: Web
image_path: /assets/img/blog/maryttslogo.png
author: Dennis Molina
autor_image: https://s.gravatar.com/avatar/79297baaf4a3cc8d129992ce65d2aef1
author_fb: https://www.facebook.com/dennismolinagarcia
author_linkedin: https://www.linkedin.com/in/dennismolinadev/
author_github: https://github.com/DennisMG
author_stack_overflow:
description: We are doing a step-by-step tutorial on how to setup a text to speech synthesizer server on Heroku.
published: false
---

MaryTTS is an open-source, multilingual Text-to-Speech Synthesis platform written in Java. We at ARDEV want to save you time and effort and provide you with an easy step-by-step guide so you can deploy your MaryTTS Server in Heroku. For this tutorial, we will be using MaryTTS Installer (you can find it [here](https://github.com/marytts/marytts-installer))

##### Prerequisites

*   Github Repo: [MaryTTS](https://github.com/marytts/marytts-installer)
*   A free [Heroku Account](https://signup.heroku.com/dc)
*   The [Heroku CLI](https://signup.heroku.com/dc)

###### 1\. Configure to deploy to Heroku

Once the repository is cloned, open the **build.gradle** file and add a stage task, this will install the languages you want when the server is executed. Example:  

<br>

 <center><img src="/assets/img/blog/blog-step-1.png"></center>  

<br>

<small>_Note: you can read more about this tasks [here](https://github.com/marytts/marytts-installer#install-a-voice)_</small>  

###### 2\. Add Procfile

A Procfile is a text file in the root directory of your application that defines process types and explicitly declares what command should be executed to start your app ([Reference](https://devcenter.heroku.com/articles/deploying-gradle-apps-on-heroku#the-procfile)).

In other words, this file will contain the command Heroku will execute to start the MaryTTS Server. To start your MaryTTS instance your Procfile should contain something like this:  

<br>

 <center><img src="/assets/img/blog/blog-step-2.png"></center>  

<br>

This declares a single process type: web, and the command needed to run it. The line ./marytts server runs our server but MaryTTS has a default port in which it listens to, so we need to tell it to listen to the port Heroku assigns our app dynamically. We do that by adding -Dsocket.port=$PORT.

###### 3\. Add changes

We need to track the new files we just added so in our terminal we run:

<br>

 <center><img src="/assets/img/blog/blog-step-3.png"></center>  

<br>

###### 4\. Creating a Heroku remote

Assuming you have the Heroku CLI installed (if not you can see instructions [here](https://devcenter.heroku.com/articles/heroku-cli)) run the command `heroku create` in your terminal, this will add a new application on Heroku along with a git remote.

<br>

 <center><img src="/assets/img/blog/blog-step-4.png"></center>  

<br>

Log in to your Heroku account:

<br>

 <center><img src="/assets/img/blog/blog-step-5.png"></center>  

<br>

And push your changes to Heroku you must run:

<br>

 <center><img src="/assets/img/blog/blog-step-6.png"></center>  

<br>

Heroku will deploy the server and will give you an URL you can use to access your server. You can open the app in your browser by running `heroku open`

##### Conclusion

You have successfully deployed your MaryTTS server to Heroku. Is a very straightforward procedure but it wasn´t at the moment we decided we wanted to run MaryTTS in Heroku, it took a lot of researching and trial and error. Now you can implement any app that uses your own speech synthesizer service; from readers to bots, the applications are wide. So start coding, there are no limits.