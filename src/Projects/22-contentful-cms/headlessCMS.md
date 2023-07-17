# HeadLess CMS

CMS simply stands for Content Management system that does not have built in front end, meaning we can

store our data in the cloud, manage our data with the help of GUI or graphical interface. We can also reuse and share our content on different platforms and devices.

In other words, once we have our data in uploaded, Headless CMS provides a content API for developers to retrieve content and display it on any platform

So it can be React application, svelte application, vanilla JS application etc.

## Steps to set up data

1. First we need to create a Content Type. It acts as a `model` for the content we want to store. The name given should be remembered for future usage.

1. Now we have to define the structure of the Content Type i.e. the name and type of each field inside the Content Type. 
Click on `Add Field` for doing the same. We can also add validation for each field at this step.

1. Every instance of Content Type with the fields set in the previous step is called an Entry.  After filling all the fields, click on `Publish` to create the entry.
*Remember, after uploading a media file or make any change to it, we need to click on `Publish` to add it to our Entry.*

1. Go to `Settings` >> `API keys` >> `Content delivery/preview tokens` >> `Add API key` to get `Space ID` and `Content Delivery API - access token`

    We have to store these in .env file


1. Now to access the data from the API, we shall use a 3rd-party library, namely `Contentful`.
Click [here](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference) to know more about the contentful API. 

    Run `npm i contentful` to install it. 

1. Refer to the fetchProjects.js file for subsequent steps.

## Deployment on Netlify

1. First, upload the project on GitHub. 

1. Import the project from GitHub to Netlify. Make sure GitHub is connected to Netlify.

1. Copy the .env variable and add it by clicking on `New Variable`.

1. Make sure the **Build command** and **Publish Directory** is correct.

1. Click on **Deploy Site**. 

    After the build is completed, Netlify might give an error complaining about the *accessToken*. In that case, head to `Deploy` tab and choose `Clear cache and deploy site` from **Trigger Deploy** dropdown.

## Webhooks

Everytime we make a change on Contentful, without us pushing the changes to GitHub everytime, Netlify will automatically rebuild the deployed site.

1. For a particular deployment on Netlify, go to `Site Overview` tab and click on `Site settings`. 

1. Under `Continuous deployment` section of `Build and Deploy` tab, we can find `Build hooks`. 

1. Click on `Add build hook`, give it a name and **Save** it. Copy the generated url.

1. Go to Contenful website and click on `Webhooks` under **Settings** 

1. Click on `Add Webhook` , give it a name (not necessarily the same one as the Build hook on Netlify) and paste the copied url and **Save** it. 

1. We may also add some filters for triggering rebuild.

Now everytime we publish some changes on Contentful, our site on Netlify will be re-built automatically.