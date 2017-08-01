---
layout: post
page_description: ARDEV delivers innovative technology solutions for solving real-world business challenges.
keywords: Android, Mobile Application
category: Android
image_path: /assets/img/blog/detect-android-faces-post.png
author: Angela Delgado
autor_image: https://s.gravatar.com/avatar/0e168b4201a9a5d569c32f6b4e7a8389
author_fb: https://www.facebook.com/ajdm05
author_twitter: https://twitter.com/ajdm05
author_linkedin: 
author_github: https://github.com/ajdm05
author_stack_overflow:
description: One of the apps trending now, are the ones related with filters. So, we're going to introduce you into it; doing a face tracker demo.
published: true
---

If you are excited and want to push out into apps related with filters or apps that need a camera tracker, we're going to give you a lift by building an app that uses 
the camera to detect faces using the [Face API](https://developers.google.com/vision/) by Google Mobile Vision API.

First of all, you have to be clear that face detection is not the same as face recognition. Face detection is the process of locating every single human face; and on the other hand, Face recognition is the process of determining if a face corresponds to a specific person.

Now, that it's clear. Let's do this... 
(If you just want to build and test the app, you can find the code on my [GitHub](https://github.com/ajdm05/AndroidFaceTracker))

###### 1. Project Setup

On the **build.gradle** file add the following line to the dependencies compiler configuration to include Vision Play Services into the project.
	
```xml
	compile 'com.google.android.gms:play-services-vision:10.2.0'
```

Once you have added the Play Service compile dependencies, you can sync the gradle. Now open the **AndroidManifest.xml** file (next code will be added here), and add the code for the camera use feature.

```xml
	<uses-feature
	        android:name="android.hardware.camera"
	        android:required="true"/>
```

The next step is to add the camera request permission because the app will be using the camera.

```xml
	<uses-permission android:name="android.permission.CAMERA" />
```

On the activity node, set the default screen orientation: this time we'll be using a portrait mode.

```xml
	<activity android:name=".MainActivity" android:screenOrientation="portrait">
```

###### 2.Create camera preview

After doing all the configurations, we're going to create a new class named **CameraPreview.java** which extends ```ViewGroup``` because it's going to be our custom view to preview the camera. It contains the logic and configuration for the camera source preview.

The main things in this class are: to create a ```SurfaceView``` to display the camera preview, a ```SurfaceHolder``` to control the SurfaceView and to start the camera preview.

```java
	//In the Ctor: Create the SurfaceView which implements the SurfaceHolder
	public CameraPreview(Context context, AttributeSet attrs) {
	    super(context, attrs);
	    mContext = context;
	    mStartRequested = false;
	    mSurfaceAvailable = false;

	    mSurfaceView = new SurfaceView(context);
	    mSurfaceView.getHolder().addCallback(new SurfaceCallback());
	    addView(mSurfaceView);
	}
```

```java
	// SurfaceHolder
	private class SurfaceCallback implements SurfaceHolder.Callback {

	    //start the camera when the surface is created
	    @Override
	    public void surfaceCreated(SurfaceHolder surface) {
	        mSurfaceAvailable = true;
	        try {
	            startWhenReady();
	        } catch (IOException e) {
	            Log.e("Android face tracker", "Something went wrong while creating the surface.");
	        }
	    }

	    @Override
	    public void surfaceDestroyed(SurfaceHolder surface) {
	        mSurfaceAvailable = false;
	    }

	    @Override
	    public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {
	    }
	}
```

```java
	//Start the camera by setting the info
	private void startWhenReady() throws IOException {
		if (mStartRequested && mSurfaceAvailable) {
		    mCameraSource.start(mSurfaceView.getHolder());
		    if (mCameraOverlay != null) {
		        Size size = mCameraSource.getPreviewSize();
		        int prevWidth = Math.min(size.getWidth(), size.getHeight());
		        int prevHeight = Math.max(size.getWidth(), size.getHeight());
		        mCameraOverlay.setCameraInfo(prevWidth, prevHeight, mCameraSource.getCameraFacing());
		        mCameraOverlay.clear();
		    }
		    mStartRequested = false;
		}
	}
```

###### 3. Create the face detector

The face detector settings are going to be on **MainActivity.java** which is the main activity for this app.
On the **createCameraSource** method, we create the detector instance, setting up the "All Classifications" property, but it depends on what you're attempting to do with your app:

```java
	//Creating the face detector
	FaceDetector detector = new FaceDetector.Builder(context)
	        .setClassificationType(FaceDetector.ALL_CLASSIFICATIONS)
	        .build();
```

After creating the detector, we can associate a processor to receive the results which create a new instance for each face which manages the face overlay; and when a face is no longer visible, it will remove the face tracker.

```java
	detector.setProcessor(
		    new MultiProcessor.Builder<>(new MainActivity.GraphicFaceTrackerFactory())
		            .build());
```

Then, create the camera source to preview the camera and stream those images into the detector process at a rate of 30 fps. In this example, we'll be using the front camera configuration and a determined size.

```java
	//setting the camera source and using the front camera by default
	mCameraSource = new CameraSource.Builder(context, detector)
	        .setRequestedPreviewSize(640, 480)
	        .setFacing(CameraSource.CAMERA_FACING_BACK)
	        .setRequestedFps(30.0f)
	        .build();
```

###### 4. Create the face overlay

The **GraphicFaceTrackerFactory** is the class that implements the Multiprocessor Factory, which is the one (as I explained before) that creates the face and the camera overlay.

```java
	//Detector process that manage the results
	private class GraphicFaceTrackerFactory implements MultiProcessor.Factory<Face> {
	    @Override
	    public Tracker<Face> create(Face face) {
	        return new MainActivity.GraphicFaceTracker(cameraOverlay);
	    }
	}
```

And finally, **the GraphicFaceTracker** class which extends from Tracker and which manage the camera overlay and the face overlay classes. The first one is the one responsible for managing the scale position on the camera preview and to add the Face overlay graphics. And the second one is in charge to manage and draw the rectangle around the detected faces (see GitHub project for more details of each class).

```java
	private class GraphicFaceTracker extends Tracker<Face> {
	    private CameraOverlay mOverlay;
	    private FaceOverlay faceOverlayGraphics;

	    //Create a new FaceOverlay instance which manage the rectangle around the face tracked
	    GraphicFaceTracker(CameraOverlay overlay) {
	        mOverlay = overlay;
	        faceOverlayGraphics = new FaceOverlay(overlay);
	    }

	    @Override
	    public void onNewItem(int faceId, Face item) {
	    }

	    @Override
	    public void onUpdate(FaceDetector.Detections<Face> detectionResults, Face face) {
	        mOverlay.add(faceOverlayGraphics);
	        faceOverlayGraphics.updateFace(face);
	    }

	    @Override
	    public void onMissing(FaceDetector.Detections<Face> detectionResults) {
	        mOverlay.remove(faceOverlayGraphics);
	    }

	    @Override
	    public void onDone() {
	        mOverlay.remove(faceOverlayGraphics);
	    }
	}
```

###### Conclusion

Now you should be able to run an app and see the rectangles around the faces that have been detected. 
You have learned how to use Face Detection from Google Mobile Face API to detect faces. And also you're ready to start a camera preview without using the native camera, detecting faces and getting faces information; so, get deep and explore this magical world and join your new knowledge into a project.

This post was based on [Google samples - FaceTracker](https://github.com/googlesamples/android-vision/tree/master/visionSamples/FaceTracker)