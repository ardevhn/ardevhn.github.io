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
---

<div class="post-entry">
	<p>
		MaryTTS is an open-source, multilingual Text-to-Speech Synthesis platform written in Java. We at ARDEV want to save you time and effort and provide you with and easy step-by-step guide so you can deploy your MaryTTS Server in Heroku. For this tutorial, we will be using MaryTTS Installer (you can find it 
 <a href="https://github.com/marytts/marytts-installer" target="_blank" style="color:#039be5;">here</a>)
	</p>
	
	<h5>Prerequisites</h5>
	<ul>
	  <li>Github Repo: <a href="https://github.com/marytts/marytts-installer" target="_blank" style="color:#039be5;">MaryTTS</a></li>
	  <li>A free <a href="https://signup.heroku.com/dc" target="_blank" style="color:#039be5;">Heroku Account</a></li>
	  <li>The <a href="https://signup.heroku.com/dc" target="_blank" style="color:#039be5;">Heroku CLI</a></li>
	</ul>
	
	
	<h6>1. Configure to deploy to Heroku </h6>
	<p class="lead">
		Once the repository is cloned, open the <strong>build.gradle</strong> file and add a stage task, this will install the languages you want when the server is executed. Example:

		<center><img src="/assets/img/blog/blog-step-1.png"></center>		

	</p>
	<small> <i>Note: you can read more about this tasks <a href="https://github.com/marytts/marytts-installer#install-a-voice" target="_blank" style="color:#039be5;">here</a></i> </small>
	<br>
	<br>
	<h6>2. Add Procfile </h6>
	<p class="lead">
		A Procfile is a text file in the root directory of your application that defines process types and explicitly declares what command should be executed to start your app (<a href="https://devcenter.heroku.com/articles/deploying-gradle-apps-on-heroku#the-procfile" target="_blank" style="color:#039be5;">Reference</a>).
		<p>
			In other words, this file will contain the command Heroku will execute to start the MaryTTS Server. To start your MaryTTS instance your Procfile should contain something like this:
		</p> 
		<br>
		<center><img src="/assets/img/blog/blog-step-2.png"></center>		
		<br>
	</p>
	<P>
		This declares a single process type, web, and the command needed to run it. The line <code>./marytts server</code> runs our server but maryTTS has a default port in which it listens to, so we need to tell it to listen to the port Heroku assigns our app dynamically. We do that by adding <code>-Dsocket.port=$PORT</code>.
	</P>
	

	<br>
	<br>
	<h6>3. Add changes</h6>
	<p class="lead">
			We need to track the new files we just added so in our terminal we run:
		<center><img src="/assets/img/blog/blog-step-3.png"></center>
		

		
	</p>
	<br>
	<br>
	<h6>4. Creating a Heroku remote </h6>
	<p class="lead">
			Assuming you have the Heroku CLI installed (if not you can see instructions <a href="https://devcenter.heroku.com/articles/heroku-cli" target="_blank" style="color:#039be5;">here</a>) run the command <code>heroku create</code> in your terminal, this will add a new application on Heroku along with a git remote.
	</p>

	<center><img src="/assets/img/blog/blog-step-4.png"></center>
	<br>

	<p>
		Log in to your Heroku account:
		<center><img src="/assets/img/blog/blog-step-5.png"></center>
	</p>

	<p>
		And push your changes to Heroku you must run:
		<center><img src="/assets/img/blog/blog-step-6.png"></center>
	</p>	
	<p>
		Heroku will deploy the server and will give you an URL you can use to access your server. You can open the app in your browser by running <code>heroku open</code>
	</p>

	<h5>Conclusion</h5>
	<p class="lead">
	You have successfully deployed your MaryTTS server to Heroku. Is a very straighforward procedure but it wasn´t at the moment we	decided we wanted to run MaryTTS to heroku. We hope 
	</p>
</div>