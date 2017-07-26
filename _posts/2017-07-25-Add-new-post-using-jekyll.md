---
layout: post
page_description: ARDEV delivers innovative technology solutions for solving real-world business challenges.
keywords: Product Engineering, Enterprise IT Services, Mobile Application
category: Web
image_path: /assets/img/full/10.jpg
author: John M
author_fb: https://www.facebook.com/
author_twitter: https://twitter.com/
author_linkedin: https://www.linkedin.com/
author_github: https://github.com/
author_stack_overflow: https://stackoverflow.com/
description: One of the most amazing feature of Jekyll is that it is "Blog-aware". It means that Jekyll does all the dirty work for you when blogging.
---

<div class="post-entry">
	<p>If you want to have a blog, write different articles and publish them online without getting a headeache, all you need is Jekyll.</p>
	<p>You only have to worry for maintaining and managing a simply folder in your computer. No databases and no web-based CMS systems.</p>
	<blockquote>
		Jekyll does what you tell it to do — no more, no less. It doesn't try to outsmart users by making bold assumptions, nor does it burden them with needless complexity and configuration. Put simply, Jekyll gets out of your way and allows you to concentrate on what truly matters: your content.
	</blockquote>
	<h6>Adding new post file</h6>
	<p class="lead"></p>
	<ol>
		<li>Posts folder</li>
		<p>You have to save the file in a folder called <b>_posts</b>. This is part of Jekyll's default project structure, and it will look for all the posts files in that folder.</p>
		<li>Create file</li>
		<p>The new post generally has to be a markdown or HTML file. How you name files is important! Jekyll requires the file name with this format: <b>YYYY-MM-DD-title.markdown</b>
			<br/>
			For example: 2017-07-25-hello-world.md
		</p>
		<li>Content</li>
		<p>Post files must begin with the <b>YAML Front Matter</b> written between triple-dashed lines. </p>
		
		<div class="ui-tab-content">
			<div class="ui-tabs-panel ui-widget-content ui-corner-bottom">
				 --- <br/>
				 layout: post <br/>
				 title: Hello world <br/>
				 --- 
			</div>
		</div>
				
		<p> In that section, you can set predefined variables or even create custom ones.<br/> <br/>
		After the Front Matter section, you can write all the post's content. It could be Markdown or even you can include HTML. </p>
		
		<div class="accordion">
			<div class="accordion-section">
				--- <br/> 
				layout: post <br/>
				title: Hello world <br/> 
				--- <br/>
				This is my Hello World post content.
			</div>
		</div>
	
	</ol>
	
	<p>These basics steps should be enough to start writing your new posts. But don't let Jekyll to stop here, go deep into it!</p>
</div>