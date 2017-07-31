---
layout: post
page_description: ARDEV delivers innovative technology solutions for solving real-world business challenges.
keywords: Android, Mobile Application
category: Android
image_path: /assets/img/blog/Detect-faces-android/detect-android-faces-post.png
author: Angela Delgado
autor_image: https://s.gravatar.com/avatar/0e168b4201a9a5d569c32f6b4e7a8389
author_fb: https://www.facebook.com/ajdm05
author_twitter: https://twitter.com/ajdm05
author_linkedin: 
author_github: https://github.com/ajdm05
author_stack_overflow:
description: One of the apps trending now, are the ones related with filters. So, we're going to introduce you into it; doing a face tracker demo.
---

<div class="post-entry">
	<p>
		If you are excited and want to push out into apps related with filters or apps that need a camera tracker, we're going to give you a lift by building an app that uses 
		the camera to detect faces using the <a href="https://developers.google.com/vision/" target="_blank" style="color:#039be5;">Face API</a> by Google Mobile Vision API.
	</p>
	
	<p>
		First of all, you have to be clear that face detection is not the same as face recognition. Face detection is the process of locate every single human face; and in the other hand,
		Face recognition is the process of determine if a face correspond to an specific person.
	</p>
	
	<p>
		Now, that it's clear. Let's do this... 
		<br/>
		(If you just want to build and test the app, you can find the code on my <a href="https://github.com/ajdm05/AndroidFaceTracker" target="_blank" style="color:#039be5;">GitHub</a>)
	</p>
	
	<p class="lead">
		<h6>1. Project Setup</h6>
		On the <strong>build.gradle</strong> file add the following line to the <code>dependencies</code> compile configuration to include Vision Play Services into the project.
	
		<div class="post-media">
            <img alt="author" src="/assets/img/blog/Detect-faces-android/mobile-vision-dependencie.png">
        </div>

		<p>
			Once you have added the Play Service compile dependencies, you can sync the gradle. Now open the <strong> AndroidManifest.xml </strong> file (next code will be added here), and add the code for the camera uses feature.
		</p>

		<div class="post-media">
            <img alt="author" src="/assets/img/blog/Detect-faces-android/camera-uses-feature.png">
        </div>

		<p>
			The next step is to add the camera request permission, because the app will be using the camera.
		</p>

		<div class="post-media">
            <img alt="author" src="/assets/img/blog/Detect-faces-android/camera-request-permission.png">
        </div>

		<p>
			On the activity node, set the default screen orientation: this time we'll be using a portrait mode.
		</p>

		<div class="post-media">
            <img alt="author" src="/assets/img/blog/Detect-faces-android/camera-portrait-mode.png">
        </div>

		

		<h6>2. Create camera preview</h6>
		<p>
			After do all the configurations, we're going to create a new class named <strong>CameraPreview.java</strong> which extends <code>ViewGroup</code> because it's going to be our custom view to preview the camera. It contains the logic and configuration for the camera 
			source preview.
		</p>

		<p>
			The main things in this class are: to create a <code>SurfaceView</code> to display the camera preview, a <code>SurfaceHolder</code> to control the SurfaceView and to start the camera preview.
		</p>

		<div class="post-media">
            <img alt="author" src="/assets/img/blog/Detect-faces-android/surfaceview-ctor.png">
        </div>

        <div class="post-media">
            <img alt="author" src="/assets/img/blog/Detect-faces-android/surface-holder.png">
        </div>

        <div class="post-media">
            <img alt="author" src="/assets/img/blog/Detect-faces-android/start-the-camera.png">
        </div>



        <h6>3. Create the face detector</h6>
		<p>
			The face detector settings are going to be on <strong>MainActivity.java</strong> which is the main activity for this app.
			On the <strong>createCameraSource</strong> method, we create the detector instance, setting up the "All Classifications" property, but it depends on what you're attempting to do with your app:
		</p>

		<div class="post-media">
            <img alt="author" src="/assets/img/blog/Detect-faces-android/face-detector.png">
        </div>

        <p>
			After creating the detector, we can associate a processor to recieve the results which creates a new instance for each face which manage the face overlay; and when a face is no loger visible, it will remove the face tracker.
		</p>

		<div class="post-media">
            <img alt="author" src="/assets/img/blog/Detect-faces-android/detector-processor.png">
        </div>

        <p>
			Then, create the camera source to preview the camera and stream those images into the detector process in a rate of 30 fps. In this example we'll be using the front camera configuration and a determined size. 
		</p>

		<div class="post-media">
            <img alt="author" src="/assets/img/blog/Detect-faces-android/start-the-camera-preview.png">
        </div>



        <h6>4. Create the face overlay</h6>
        <p>
			The <strong>GraphicFaceTrackerFactory</strong> is the class that implements the Multiporcessor Factory, which is the one (as I explained before) that creates the face and the camera overlay.
		</p>

		<div class="post-media">
            <img alt="author" src="/assets/img/blog/Detect-faces-android/face-tracker-factory.png">
        </div>

		<p>
			And finally the <strong>GraphicFaceTracker</strong> class which extends from Tracker and which manage the camera overlay and the face overlay classes. The first one is the one responsible of manage the scale position on the camera preview and to add the Face overlay graphics. And the second one is in charge to manage and draw the rectangle around the detected faces (see GitHub project for more details of each class). 
		</p>

		<div class="post-media">
            <img alt="author" src="/assets/img/blog/Detect-faces-android/face-tracker.png">
        </div>



        <h6>Conclusion </h6>
		<p>
			Now you should be able to run an app and see the rectangles around the faces that have been detected.
			You have learned how to use <strong>Face Detection</strong> from Google Mobile Face API to detect faces. And also you're ready to start a camera preview without using the native camera, detecting faces and getting faces information; so, get deep and explore this magic world and join your new knowledge into a project.
		</p>

	</p>

	<p>
		This post was based on <a href="https://github.com/googlesamples/android-vision/tree/master/visionSamples/FaceTracker" target="_blank" style="color:#039be5;">Google samples - FaceTracker</a>.
	</p>
</div>